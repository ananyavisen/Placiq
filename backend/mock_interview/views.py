from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from .services.m3_predictor import predict_m3
from .models import InterviewSession, InterviewTurn
from .serializers import (
    StartInterviewSerializer,
    InterviewAnswerSerializer,
    InterviewEvaluationSerializer,
    InterviewEvaluation
)
import tempfile
import os
from .models import InterviewSession
from .serializers import InterviewSessionListSerializer
import subprocess
import uuid

from django.core.files import File
from .services.evaluation_service import generate_and_save_evaluation
from .services.tts import generate_speech
from .services.transcriptions import transcribe_audio
from django.utils import timezone
from .services.interviewer import generate_question
from .services.context import build_candidate_context
from .services.speech_analysis import analyze_speech

MAX_QUESTIONS = 8

class StartInterviewView(APIView):

    permission_classes = [IsAuthenticated]

    def post(self, request):

        serializer = StartInterviewSerializer(
            data=request.data
        )

        serializer.is_valid(
            raise_exception=True
        )

        interview_type = serializer.validated_data[
            "interview_type"
        ]

        # -----------------------------------------
        # Get candidate information from DB
        # -----------------------------------------

        candidate_context = build_candidate_context(
            request.user
        )

        # -----------------------------------------
        # Create interview session
        # -----------------------------------------

        session = InterviewSession.objects.create(
            user=request.user,
            interview_type=interview_type
        )

        # -----------------------------------------
        # Generate first question
        # -----------------------------------------

        question = generate_question(
            candidate_context=candidate_context,
            interview_type=interview_type,
            history=[]
        )

        # -----------------------------------------
        # Save first question
        # -----------------------------------------

        InterviewTurn.objects.create(
            session=session,
            sequence=1,
            question=question
        )

        session.question_count = 1
        session.save(
            update_fields=["question_count"]
        )

        # -----------------------------------------
        # Response
        # -----------------------------------------

        return Response(
            {
                "session_id": session.id,
                "interview_type": session.interview_type,
                "question": question
            },
            status=status.HTTP_201_CREATED
        )

class SubmitAnswerView(APIView):

    permission_classes = [IsAuthenticated]

    def post(self, request, session_id):

        serializer = InterviewAnswerSerializer(
            data=request.data
        )

        serializer.is_valid(
            raise_exception=True
        )

        audio = serializer.validated_data["audio"]

        # -----------------------------------------
        # Get session
        # -----------------------------------------

        try:
            session = InterviewSession.objects.get(
                id=session_id,
                user=request.user
            )

        except InterviewSession.DoesNotExist:

            return Response(
                {
                    "error": "Interview session not found."
                },
                status=status.HTTP_404_NOT_FOUND
            )

        # -----------------------------------------
        # Check status
        # -----------------------------------------

        if session.status != "active":

            return Response(
                {
                    "error": "This interview has already ended."
                },
                status=status.HTTP_400_BAD_REQUEST
            )

        # -----------------------------------------
        # Find current question
        # -----------------------------------------

        current_turn = session.turns.filter(
            sequence=session.question_count
        ).first()

        if current_turn is None:

            return Response(
                {
                    "error": "Current interview question not found."
                },
                status=status.HTTP_400_BAD_REQUEST
            )

        # -----------------------------------------
        # Save candidate audio
        # -----------------------------------------

        # -----------------------------------------
        # Save candidate audio
        # -----------------------------------------

        # Browser recordings are usually WebM/Opus.
        # Convert them to WAV before passing them
        # to Whisper / soundfile / librosa / M3.

        with tempfile.TemporaryDirectory() as temp_dir:

            input_path = os.path.join(
                temp_dir,
                f"{uuid.uuid4()}.webm"
            )

            wav_path = os.path.join(
                temp_dir,
                f"{uuid.uuid4()}.wav"
            )

            # Save uploaded browser audio temporarily
            with open(input_path, "wb") as input_file:
                for chunk in audio.chunks():
                    input_file.write(chunk)

            # Convert WebM/Opus → 16 kHz mono WAV
            subprocess.run(
                [
                    "ffmpeg",
                    "-y",
                    "-i",
                    input_path,
                    "-ar",
                    "16000",
                    "-ac",
                    "1",
                    wav_path,
                ],
                check=True,
                capture_output=True,
                text=True,
            )

            # Store the converted WAV in Django's media storage
            with open(wav_path, "rb") as wav_file:
                current_turn.candidate_audio.save(
                    f"answer_{current_turn.sequence}.wav",
                    File(wav_file),
                    save=True,
                )

        # -----------------------------------------
        # Whisper
        # -----------------------------------------

        transcript = transcribe_audio(
            current_turn.candidate_audio.path
        )

        # -----------------------------------------
        # Save transcript
        # -----------------------------------------

        current_turn.transcript = transcript
        current_turn.save(
            update_fields=["transcript"]
        )


        # -----------------------------------------
        # Speech Analysis
        # -----------------------------------------

        speech_features = analyze_speech(
            current_turn.candidate_audio.path,
            transcript
        )

        current_turn.speech_features = speech_features

        current_turn.save(
            update_fields=["speech_features"]
        )
        
        # -----------------------------------------
        # M3 Prediction
        # -----------------------------------------

        m3_predictions = predict_m3(
            transcript=transcript,
            audio_path=current_turn.candidate_audio.path,
            speech_features=speech_features
        )

        current_turn.m3_predictions = m3_predictions

        current_turn.save(
            update_fields=["m3_predictions"]
        )
        
        # -----------------------------------------
        # Build conversation history
        # -----------------------------------------

        history = []

        for turn in session.turns.all():

            history.append({
                "role": "assistant",
                "content": turn.question
            })

            if turn.transcript:

                history.append({
                    "role": "user",
                    "content": turn.transcript
                })

        # -----------------------------------------
        # Candidate context
        # -----------------------------------------

        candidate_context = build_candidate_context(
            request.user
        )

        if session.question_count >= MAX_QUESTIONS:

            # -----------------------------------------
            # Mark interview as completed
            # -----------------------------------------

            session.status = "completed"
            session.completed_at = timezone.now()

            session.save(
                update_fields=[
                    "status",
                    "completed_at"
                ]
            )

            # -----------------------------------------
            # Generate and save final evaluation
            # -----------------------------------------

            evaluation = generate_and_save_evaluation(
                session
            )

            # -----------------------------------------
            # Final response
            # -----------------------------------------

            return Response(
                {
                    "session_id": session.id,
                    "question_number": current_turn.sequence,
                    "transcript": transcript,
                    "status": "completed",
                    "overall_score": evaluation.overall_score
                },
                status=status.HTTP_200_OK
            )

        # -----------------------------------------
        # Generate next question
        # -----------------------------------------

        next_question = generate_question(
            candidate_context=candidate_context,
            interview_type=session.interview_type,
            history=history
        )

        # -----------------------------------------
        # Increment question count
        # -----------------------------------------

        next_sequence = session.question_count + 1

        # -----------------------------------------
        # Create next interview turn
        # -----------------------------------------
        with tempfile.NamedTemporaryFile(
            suffix=".wav",
            delete=False
        ) as temp_file:

            temp_path = temp_file.name

        generate_speech(
            next_question,
            temp_path
        )
        
        
        next_turn = InterviewTurn.objects.create(
            session=session,
            sequence=next_sequence,
            question=next_question
        )

        
        with open(temp_path, "rb") as audio_file:

            next_turn.ai_audio.save(
                f"question_{next_sequence}.wav",
                File(audio_file),
                save=True
            )

        os.remove(temp_path)
        # -----------------------------------------
        # Update session
        # -----------------------------------------

        session.question_count = next_sequence

        session.save(
            update_fields=["question_count"]
        )

        # -----------------------------------------
        # Response
        # -----------------------------------------

        return Response(
            {
                "session_id": session.id,
                "question_number": next_turn.sequence,
                "transcript": transcript,
                "next_question": next_question,
                "status": "active",
                "ai_audio": request.build_absolute_uri(
                next_turn.ai_audio.url),
                "m3_predictions": m3_predictions,
            },
            status=status.HTTP_200_OK
        )
        
class InterviewSessionListView(APIView):

    permission_classes = [IsAuthenticated]

    def get(self, request):

        sessions = (
            InterviewSession.objects
            .filter(user=request.user)
            .select_related("evaluation")
            .order_by("-started_at")
        )

        serializer = InterviewSessionListSerializer(
            sessions,
            many=True
        )

        return Response(serializer.data)
    
class InterviewReportView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, session_id):

        try:
            session = InterviewSession.objects.get(
                id=session_id,
                user=request.user
            )
        except InterviewSession.DoesNotExist:
            return Response(
                {
                    "error": "Interview session not found."
                },
                status=status.HTTP_404_NOT_FOUND
            )

        try:
            evaluation = session.evaluation
        except InterviewEvaluation.DoesNotExist:
            return Response(
                {
                    "error": "Interview evaluation not found."
                },
                status=status.HTTP_404_NOT_FOUND
            )

        serializer = InterviewEvaluationSerializer(
            evaluation
        )

        return Response(
            serializer.data,
            status=status.HTTP_200_OK
        )