import React, {
  useEffect,
  useRef,
  useState,
} from "react";

import {
  useLocation,
  useNavigate,
} from "react-router-dom";

import {
  Clock3,
  LogOut,
  Mic,
  Square,
  Volume2,
} from "lucide-react";

import robot from "../../assets/robot.png";

import {
  createInterviewSession,
  submitInterviewAnswer,
} from "../../api/mockInterview";


export default function VoiceInterview() {

  const location = useLocation();
  const navigate = useNavigate();

  const interviewType =
    location.state?.interviewType || "hr";

  const isTechnical =
    interviewType === "technical";

  const roundTitle = isTechnical
    ? "Technical Interview"
    : "Voice Interview";

  const roundLabel = isTechnical
    ? "Technical Round"
    : "HR Round";


  // -----------------------------------------
  // Interview state
  // -----------------------------------------

  const [sessionId, setSessionId] =
    useState(null);

  const [question, setQuestion] =
    useState("");

  const [questionNumber, setQuestionNumber] =
    useState(1);

  const [aiAudio, setAiAudio] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  const [isSpeaking, setIsSpeaking] =
    useState(false);

  const [isRecording, setIsRecording] =
    useState(false);

  const [isSubmitting, setIsSubmitting] =
    useState(false);

  const [error, setError] =
    useState(null);


  // -----------------------------------------
  // Recorder references
  // -----------------------------------------

  const mediaRecorderRef =
    useRef(null);

  const audioChunksRef =
    useRef([]);

  const audioRef =
    useRef(null);


  // -----------------------------------------
  // Create interview
  // -----------------------------------------

  useEffect(() => {

    const startInterview = async () => {

      try {

        setLoading(true);
        setError(null);

        const data =
          await createInterviewSession(
            interviewType
          );

        console.log(
          "Interview started:",
          data
        );

        setSessionId(data.session_id);

        setQuestion(
          data.next_question ||
          data.question ||
          ""
        );

        setQuestionNumber(
          data.question_number || 1
        );

        setAiAudio(
          data.ai_audio || null
        );

      } catch (err) {

        console.error(
          "Failed to start interview:",
          err
        );

        setError(
          "Unable to start the interview."
        );

      } finally {

        setLoading(false);

      }

    };

    startInterview();

  }, [interviewType]);


  // -----------------------------------------
  // Play AI audio whenever question changes
  // -----------------------------------------

  useEffect(() => {

    if (!aiAudio) {
      return;
    }

    const playAudio = async () => {

      try {

        setIsSpeaking(true);

        if (audioRef.current) {
          audioRef.current.pause();
        }

        const audio =
          new Audio(aiAudio);

        audioRef.current = audio;

        audio.onended = () => {
          setIsSpeaking(false);
        };

        audio.onerror = () => {
          setIsSpeaking(false);
        };

        await audio.play();

      } catch (err) {

        console.error(
          "Audio playback failed:",
          err
        );

        setIsSpeaking(false);

      }

    };

    playAudio();

  }, [aiAudio]);


  // -----------------------------------------
  // Start recording
  // -----------------------------------------

  const startRecording = async () => {

    try {

      if (isSpeaking) {
        return;
      }

      const stream =
        await navigator.mediaDevices.getUserMedia({
          audio: true,
        });

      const mediaRecorder =
        new MediaRecorder(stream);

      mediaRecorderRef.current =
        mediaRecorder;

      audioChunksRef.current = [];


      mediaRecorder.ondataavailable = (
        event
      ) => {

        if (event.data.size > 0) {

          audioChunksRef.current.push(
            event.data
          );

        }

      };


      mediaRecorder.onstop = async () => {

        const audioBlob =
          new Blob(
            audioChunksRef.current,
            {
              type: "audio/webm",
            }
          );

        stream
          .getTracks()
          .forEach((track) => track.stop());

        await submitAnswer(audioBlob);

      };


      mediaRecorder.start();

      setIsRecording(true);

    } catch (err) {

      console.error(
        "Microphone error:",
        err
      );

      setError(
        "Microphone permission is required."
      );

    }

  };


  // -----------------------------------------
  // Stop recording
  // -----------------------------------------

  const stopRecording = () => {

    if (
      mediaRecorderRef.current &&
      mediaRecorderRef.current.state !==
        "inactive"
    ) {

      mediaRecorderRef.current.stop();

      setIsRecording(false);

    }

  };


  // -----------------------------------------
  // Submit answer
  // -----------------------------------------

  const submitAnswer = async (
    audioBlob
  ) => {

    if (!sessionId) {
      return;
    }

    try {

      setIsSubmitting(true);
      setError(null);

      const data =
        await submitInterviewAnswer(
          sessionId,
          audioBlob
        );

      console.log(
        "Answer response:",
        data
      );


      // ---------------------------------------
      // Interview completed
      // ---------------------------------------

      if (data.status === "completed") {

        navigate(
          `/mock-interview/report/${sessionId}`,
          {
            state: {
              result: data,
            },
          }
        );

        return;
      }


      // ---------------------------------------
      // Next question
      // ---------------------------------------

      setQuestion(
        data.next_question || ""
      );

      setQuestionNumber(
        data.question_number ||
        questionNumber + 1
      );

      setAiAudio(
        data.ai_audio || null
      );

    } catch (err) {

      console.error(
        "Failed to submit answer:",
        err
      );

      setError(
        "Failed to submit your answer. Please try again."
      );

    } finally {

      setIsSubmitting(false);

    }

  };


  // -----------------------------------------
  // End interview
  // -----------------------------------------

  const endInterview = () => {

    if (audioRef.current) {
      audioRef.current.pause();
    }

    if (
      mediaRecorderRef.current &&
      mediaRecorderRef.current.state !==
        "inactive"
    ) {

      mediaRecorderRef.current.stop();

    }

    navigate("/mock-interviews");

  };


  // -----------------------------------------
  // Loading
  // -----------------------------------------

  if (loading) {

    return (

      <div className="flex min-h-screen items-center justify-center">

        <div className="text-center">

          <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-blue-600" />

          <p className="text-sm text-gray-500">
            Preparing your interview...
          </p>

        </div>

      </div>

    );

  }


  // -----------------------------------------
  // UI
  // -----------------------------------------

  return (

    <div className="min-h-screen w-full">

      {/* Header */}

      <div className="flex items-center justify-between px-8 pb-3 pt-4">

        <div>

          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            {roundTitle}
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            Speak naturally. Our AI interviewer will
            listen and respond to your answers.
          </p>

        </div>


        <div className="flex items-center gap-4">

          <button
            onClick={endInterview}
            className="flex items-center gap-2 rounded-xl border border-red-200 bg-white px-4 py-2.5 text-sm font-medium text-red-500 transition hover:bg-red-50"
          >

            <LogOut size={17} />

            End Interview

          </button>


          <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-2.5 shadow-sm">

            <Clock3
              size={20}
              className="text-gray-500"
            />

            <div className="leading-tight">

              <span className="block text-xs text-gray-400">
                Question
              </span>

              <strong className="text-sm font-semibold text-gray-800">
                {questionNumber} / 8
              </strong>

            </div>

          </div>

        </div>

      </div>


      {/* Main */}

      <div className="grid grid-cols-1 gap-6 px-8 pb-6 lg:grid-cols-[1fr_280px]">


        {/* Interview area */}

        <main className="flex min-h-[calc(100vh-155px)] flex-col items-center justify-start rounded-3xl border border-white/20 bg-white/10 px-8 pb-8 pt-4 backdrop-blur-[2px]">


          {/* Robot */}

          <div className="relative flex h-48 w-48 items-center justify-center">

            <div
              className={`absolute inset-0 rounded-full border border-blue-200/70 bg-blue-50/30 ${
                isSpeaking
                  ? "animate-pulse"
                  : ""
              }`}
            />

            <div className="absolute inset-5 rounded-full border border-blue-300/50 bg-white/50 shadow-inner" />

            <img
              src={robot}
              alt="AI Interviewer"
              className="relative z-10 h-40 w-40 object-contain"
            />

          </div>


          {/* Question */}

          <div className="mt-5 w-full max-w-2xl rounded-2xl border border-white/25 bg-white/20 px-6 py-5 backdrop-blur-md">

            <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-gray-700">

              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 text-blue-500">

                <Volume2 size={17} />

              </div>

              <span>
                AI Interviewer
              </span>


              {isSpeaking && (

                <span className="ml-auto flex items-center gap-1.5 text-xs font-normal text-green-500">

                  <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />

                  Speaking

                </span>

              )}

            </div>


            <p className="text-base leading-7 text-gray-800">

              {question}

            </p>

          </div>


          {/* Error */}

          {error && (

            <p className="mt-4 text-sm text-red-500">
              {error}
            </p>

          )}


          {/* Controls */}

          <div className="mt-8 flex items-center gap-8">


            {/* Record */}

            <button
              onClick={
                isRecording
                  ? stopRecording
                  : startRecording
              }
              disabled={
                isSpeaking ||
                isSubmitting
              }
              className={`group flex h-20 w-20 items-center justify-center rounded-full text-white shadow-lg transition ${
                isRecording
                  ? "bg-red-500 shadow-red-200"
                  : "bg-blue-600 shadow-blue-200 hover:scale-105 hover:bg-blue-700"
              } ${
                isSpeaking ||
                isSubmitting
                  ? "cursor-not-allowed opacity-50"
                  : ""
              }`}
            >

              {isRecording ? (
                <Square size={27} />
              ) : (
                <Mic size={29} />
              )}

            </button>

          </div>


          <div className="mt-4 text-sm font-medium text-gray-600">

            {isSubmitting
              ? "Evaluating your answer..."
              : isRecording
              ? "Tap to Stop"
              : isSpeaking
              ? "AI is speaking..."
              : "Tap to Record"}

          </div>


          <div className="mt-1 text-xs text-gray-400">
            Speak clearly and naturally...
          </div>

        </main>


        {/* Sidebar */}

        <aside className="flex flex-col gap-4">


          {/* Progress */}

          <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">

            <div className="flex items-center justify-between">

              <span className="text-sm font-semibold text-gray-800">
                {roundLabel}
              </span>

              <span className="flex items-center gap-1.5 text-xs font-medium text-green-500">

                <span className="h-2 w-2 rounded-full bg-green-500" />

                {isSubmitting
                  ? "Evaluating"
                  : isSpeaking
                  ? "Speaking"
                  : isRecording
                  ? "Listening"
                  : "Ready"}

              </span>

            </div>


            <div className="mt-6 flex items-center justify-between text-xs">

              <span className="text-gray-500">
                Interview Progress
              </span>

              <span className="font-medium text-gray-700">
                Question {questionNumber} of 8
              </span>

            </div>


            <div className="mt-3 h-2 overflow-hidden rounded-full bg-gray-100">

              <div
                className="h-full rounded-full bg-blue-600 transition-all"
                style={{
                  width: `${(questionNumber / 8) * 100}%`,
                }}
              />

            </div>

          </div>


          {/* Round */}

          <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">

            <div className="flex items-center gap-3">

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-sm font-bold text-blue-600">

                {isTechnical
                  ? "T"
                  : "HR"}

              </div>

              <div>

                <strong className="text-sm font-semibold text-gray-800">
                  {roundLabel}
                </strong>

                <p className="mt-1 text-xs leading-5 text-gray-500">

                  {isTechnical
                    ? "Technical knowledge and problem solving"
                    : "Communication and professional behavior"}

                </p>

              </div>

            </div>

          </div>


          {/* Tip */}

          <div className="rounded-2xl border border-blue-100 bg-blue-50/70 p-5">

            <strong className="text-sm font-semibold text-gray-800">
              💡 Pro Tip
            </strong>

            <p className="mt-2 text-xs leading-5 text-gray-600">
              Take a moment to think before answering.
              Speak naturally and explain your thoughts clearly.
            </p>

          </div>

        </aside>

      </div>

    </div>

  );

}