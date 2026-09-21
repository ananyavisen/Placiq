from mock_interview.models import InterviewTurn


def build_evaluation_turns(session):
    """
    Convert InterviewTurn objects from an interview session
    into the structured payload expected by the evaluator.
    """

    turns = session.turns.all().order_by("sequence")

    evaluation_turns = []

    for turn in turns:

        # Ignore questions that the candidate has not answered yet
        if not turn.transcript:
            continue

        evaluation_turns.append({
            "question_number": turn.sequence,
            "question": turn.question,
            "transcript": turn.transcript,
            "speech_features": turn.speech_features or {},
            "m3_predictions": turn.m3_predictions or {}
        })

    return evaluation_turns