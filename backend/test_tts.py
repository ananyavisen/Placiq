from mock_interview.services.tts import generate_speech


generate_speech(
    "Welcome to your mock interview. Can you tell me about yourself?",
    "test_ai_voice.wav"
)

print("TTS generated successfully!")