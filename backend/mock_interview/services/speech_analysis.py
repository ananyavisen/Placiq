import re

import numpy as np
import soundfile as sf
import torch
import librosa

from silero_vad import (
    load_silero_vad,
    get_speech_timestamps
)


SAMPLE_RATE = 16000
MIN_SPEECH_DURATION = 1.0

# -------------------------------------------------
# Conservative filler vocabulary
# -------------------------------------------------

FILLER_WORDS = {
    "um",
    "uh",
    "er",
    "erm",
    "hmm"
}


# -------------------------------------------------
# Load VAD once
# -------------------------------------------------

print("Loading Silero VAD...")

vad_model = load_silero_vad()

print("Silero VAD loaded!")


# -------------------------------------------------
# Speech analysis
# -------------------------------------------------

def analyze_speech(audio_path, transcript):

    # ---------------------------------------------
    # Load audio
    # ---------------------------------------------

    audio, sample_rate = sf.read(
        audio_path,
        dtype="float32"
    )

    # Stereo → mono
    if audio.ndim > 1:
        audio = audio.mean(axis=1)

    # Resample
    if sample_rate != SAMPLE_RATE:

        audio = librosa.resample(
            audio,
            orig_sr=sample_rate,
            target_sr=SAMPLE_RATE
        )

        sample_rate = SAMPLE_RATE

    # ---------------------------------------------
    # Torch tensor for VAD
    # ---------------------------------------------

    audio_tensor = torch.from_numpy(audio)

    # ---------------------------------------------
    # Voice Activity Detection
    # ---------------------------------------------

    speech_timestamps = get_speech_timestamps(
        audio_tensor,
        vad_model,
        sampling_rate=sample_rate,
        return_seconds=True
    )

    # ---------------------------------------------
    # Duration
    # ---------------------------------------------

    total_duration = len(audio) / sample_rate

    speech_duration = sum(
        segment["end"] - segment["start"]
        for segment in speech_timestamps
    )
   
    acoustic_valid = speech_duration >= MIN_SPEECH_DURATION
    # ---------------------------------------------
    # Speech ratio
    # ---------------------------------------------

    if total_duration > 0:
        speech_ratio = speech_duration / total_duration
    else:
        speech_ratio = 0

    # ---------------------------------------------
    # Extract speech-only audio
    # ---------------------------------------------

    speech_chunks = []

    for segment in speech_timestamps:

        start_sample = int(
            segment["start"] * sample_rate
        )

        end_sample = int(
            segment["end"] * sample_rate
        )

        speech_chunks.append(
            audio[start_sample:end_sample]
        )

    if speech_chunks:

        speech_audio = np.concatenate(
            speech_chunks
        )

    else:

        speech_audio = np.array(
            [],
            dtype=np.float32
        )

    # =================================================
    # PAUSE ANALYSIS
    # =================================================

    pauses = []

    for i in range(1, len(speech_timestamps)):

        previous_end = speech_timestamps[i - 1]["end"]
        current_start = speech_timestamps[i]["start"]

        pause = current_start - previous_end

        if pause > 0:
            pauses.append(pause)

    pause_count = len(pauses)

    if pause_count > 0:

        average_pause = float(
            np.mean(pauses)
        )

        median_pause = float(
            np.median(pauses)
        )

        longest_pause = float(
            np.max(pauses)
        )

    else:

        average_pause = 0.0
        median_pause = 0.0
        longest_pause = 0.0

    # =================================================
    # TRANSCRIPT FEATURES
    # =================================================

    clean_text = transcript.lower()

    clean_text = re.sub(
        r"[^\w\s]",
        "",
        clean_text
    )

    words = clean_text.split()

    word_count = len(words)

    # ---------------------------------------------
    # Response WPM
    #
    # Includes pauses in the denominator
    # ---------------------------------------------

    if total_duration > 0:

        response_wpm = (
            word_count /
            (total_duration / 60)
        )

    else:

        response_wpm = 0.0

    # ---------------------------------------------
    # Articulation WPM
    #
    # Uses only active speech duration
    # ---------------------------------------------

    if speech_duration > 0:

        articulation_wpm = (
            word_count /
            (speech_duration / 60)
        )

    else:

        articulation_wpm = 0.0

    # =================================================
    # FILLER WORDS
    # =================================================

    detected_fillers = [
        word
        for word in words
        if word in FILLER_WORDS
    ]

    filler_count = len(
        detected_fillers
    )

    if word_count > 0:

        filler_rate = (
            filler_count /
            word_count
        )

    else:

        filler_rate = 0.0

    # =================================================
    # PITCH
    #
    # Computed only on speech audio
    # =================================================

    if len(speech_audio) > 0:

        f0, voiced_flag, voiced_prob = librosa.pyin(
            speech_audio,
            fmin=librosa.note_to_hz("C2"),
            fmax=librosa.note_to_hz("C7"),
            sr=sample_rate
        )

        valid_pitch = f0[
            ~np.isnan(f0)
        ]

    else:

        valid_pitch = np.array([])

    if len(valid_pitch) > 0:

        pitch_mean = float(
            np.mean(valid_pitch)
        )

        pitch_std = float(
            np.std(valid_pitch)
        )

    else:

        pitch_mean = 0.0
        pitch_std = 0.0

    # =================================================
    # ENERGY
    #
    # Computed only on speech audio
    # =================================================

    if len(speech_audio) > 0:

        rms = librosa.feature.rms(
            y=speech_audio
        )

        rms_values = rms.flatten()

        energy_mean = float(
            np.mean(rms_values)
        )

        energy_std = float(
            np.std(rms_values)
        )

        energy_range = float(
            np.max(rms_values) -
            np.min(rms_values)
        )

    else:

        energy_mean = 0.0
        energy_std = 0.0
        energy_range = 0.0

    # =================================================
    # FINAL FEATURE DICTIONARY
    # =================================================

    features = {

        # -------------------------
        # Temporal
        # -------------------------

        "duration": round(
            total_duration,
            2
        ),

        "speech_duration": round(
            speech_duration,
            2
        ),
       
        "acoustic_valid": acoustic_valid,
        "speech_ratio": round(
            speech_ratio,
            4
        ),

        "speech_segments": len(
            speech_timestamps
        ),

        # -------------------------
        # Speaking rate
        # -------------------------

        "word_count": word_count,

        "response_wpm": round(
            response_wpm,
            2
        ),

        "articulation_wpm": round(
            articulation_wpm,
            2
        ),

        # -------------------------
        # Pauses
        # -------------------------

        "pause_count": pause_count,

        "average_pause": round(
            average_pause,
            3
        ),

        "median_pause": round(
            median_pause,
            3
        ),

        "longest_pause": round(
            longest_pause,
            3
        ),

        # -------------------------
        # Fillers
        # -------------------------

        "filler_count": filler_count,

        "filler_rate": round(
            filler_rate,
            4
        ),

        "detected_fillers": detected_fillers,

        # -------------------------
        # Pitch
        # -------------------------

        "pitch_mean": round(
            pitch_mean,
            2
        ),

        "pitch_std": round(
            pitch_std,
            2
        ),

        # -------------------------
        # Energy
        # -------------------------

        "energy_mean": round(
            energy_mean,
            6
        ),

        "energy_std": round(
            energy_std,
            6
        ),

        "energy_range": round(
            energy_range,
            6
        )
    }

    return features