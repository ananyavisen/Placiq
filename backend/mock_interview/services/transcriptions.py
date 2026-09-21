import os

from dotenv import load_dotenv
from transformers import pipeline

load_dotenv()

print("Loading Whisper...")

transcriber = pipeline(
    "automatic-speech-recognition",
    model="openai/whisper-small"
)

print("Whisper loaded!")


def transcribe_audio(audio_path):

    result = transcriber(audio_path,  return_timestamps=True)

    transcript = result["text"].strip()

    return transcript