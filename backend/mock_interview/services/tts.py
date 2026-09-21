import os

from dotenv import load_dotenv
from groq import Groq


load_dotenv()

client = Groq(
    api_key=os.getenv("GROQ_API_KEY")
)


def generate_speech(text, output_path):
    response = client.audio.speech.create(
        model="canopylabs/orpheus-v1-english",
        voice="austin",
        input=text,
        response_format="wav"
    )

    response.write_to_file(output_path)
    