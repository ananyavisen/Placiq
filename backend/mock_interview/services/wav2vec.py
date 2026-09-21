import numpy as np
import soundfile as sf
import torch
import librosa

from transformers import (
    Wav2Vec2Processor,
    Wav2Vec2Model
)


MODEL_NAME = "facebook/wav2vec2-base"
SAMPLE_RATE = 16000


print("Loading wav2vec 2.0...")

processor = Wav2Vec2Processor.from_pretrained(
    MODEL_NAME
)

model = Wav2Vec2Model.from_pretrained(
    MODEL_NAME
)

model.eval()

print("wav2vec 2.0 loaded!")


def extract_wav2vec_embedding(audio_path):

    audio, sample_rate = sf.read(
        audio_path,
        dtype="float32"
    )

    # Stereo → mono
    if audio.ndim > 1:
        audio = audio.mean(axis=1)

    # Resample → 16 kHz
    if sample_rate != SAMPLE_RATE:

        audio = librosa.resample(
            audio,
            orig_sr=sample_rate,
            target_sr=SAMPLE_RATE
        )

    # Prepare input
    inputs = processor(
        audio,
        sampling_rate=SAMPLE_RATE,
        return_tensors="pt"
    )

    # Frozen inference
    with torch.no_grad():

        outputs = model(
            inputs.input_values
        )

    hidden_states = outputs.last_hidden_state

    # Temporal mean
    mean_embedding = hidden_states.mean(
        dim=1
    )

    # Temporal standard deviation
    std_embedding = hidden_states.std(
        dim=1
    )

    # 768 + 768 = 1536
    embedding = torch.cat(
        [
            mean_embedding,
            std_embedding
        ],
        dim=1
    )

    return embedding.squeeze(0).numpy()