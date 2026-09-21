import os
import joblib
import numpy as np

from .text_embeddings import extract_text_embedding
from .wav2vec import extract_wav2vec_embedding


# ---------------------------------------------------------
# Paths
# ---------------------------------------------------------

BASE_DIR = os.path.dirname(
    os.path.dirname(
        os.path.dirname(
            os.path.abspath(__file__)
        )
    )
)

MODEL_DIR = os.path.join(
    BASE_DIR,
    "models"
)


# ---------------------------------------------------------
# Load trained M3 artifacts
# ---------------------------------------------------------

MODEL_PATH = os.path.join(
    MODEL_DIR,
    "m3_ridge.pkl"
)

SCALER_PATH = os.path.join(
    MODEL_DIR,
    "m3_scaler.pkl"
)


print("Loading M3 model...")

m3_model = joblib.load(
    MODEL_PATH
)

m3_scaler = joblib.load(
    SCALER_PATH
)

print("M3 model loaded!")


# ---------------------------------------------------------
# Target names
# ---------------------------------------------------------

TARGETS = [
    "openness",
    "conscientiousness",
    "extraversion",
    "agreeableness",
    "neuroticism",
    "overall_personality",
    "interview_score",
    "answer_score",
    "speaking_skills",
    "confidence_score",
    "facial_expression",
    "overall_performance"
]


# ---------------------------------------------------------
# Acoustic feature order
#
# MUST match training exactly.
# ---------------------------------------------------------

ACOUSTIC_FEATURES = [
    "speech_duration",
    "speech_ratio",
    "speech_segments",
    "pause_count",
    "average_pause",
    "median_pause",
    "longest_pause",
    "filler_count",
    "filler_rate",
    "pitch_mean",
    "pitch_std",
    "energy_mean",
    "energy_std",
    "energy_range"
]


def predict_m3(
    transcript,
    audio_path,
    speech_features
):

    # -----------------------------------------------------
    # 1. Text → 768
    # -----------------------------------------------------

    text_embedding = extract_text_embedding(
        transcript
    )

    # -----------------------------------------------------
    # 2. Acoustic → 14
    # -----------------------------------------------------

    acoustic_embedding = np.array(
        [
            speech_features[feature]
            for feature in ACOUSTIC_FEATURES
        ],
        dtype=np.float32
    )

    # -----------------------------------------------------
    # 3. Audio → 1536
    # -----------------------------------------------------

    wav2vec_embedding = extract_wav2vec_embedding(
        audio_path
    )

    # -----------------------------------------------------
    # Validate dimensions
    # -----------------------------------------------------

    assert text_embedding.shape == (768,)

    assert acoustic_embedding.shape == (14,)

    assert wav2vec_embedding.shape == (1536,)

    # -----------------------------------------------------
    # 4. Build M3
    #
    # [text | acoustic | wav2vec]
    #
    # 768 + 14 + 1536 = 2318
    # -----------------------------------------------------

    features = np.concatenate(
        [
            text_embedding,
            acoustic_embedding,
            wav2vec_embedding
        ]
    )

    assert features.shape == (2318,)

    # -----------------------------------------------------
    # 5. Add batch dimension
    # -----------------------------------------------------

    features = features.reshape(
        1,
        -1
    )

    # -----------------------------------------------------
    # 6. Apply research scaler
    # -----------------------------------------------------

    features_scaled = m3_scaler.transform(
        features
    )

    # -----------------------------------------------------
    # 7. M3 prediction
    # -----------------------------------------------------

    prediction = m3_model.predict(
        features_scaled
    )[0]

    # -----------------------------------------------------
    # 8. Convert to JSON-friendly dictionary
    # -----------------------------------------------------

    result = {
        target: float(value)
        for target, value in zip(
            TARGETS,
            prediction
        )
    }

    return result