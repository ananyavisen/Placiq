from .speech_analysis import analyze_speech


def analyze_interview_turn(turn):

    if not turn.candidate_audio:
        return None

    if not turn.transcript:
        return None

    features = analyze_speech(
        turn.candidate_audio.path,
        turn.transcript
    )

    turn.speech_features = features

    turn.save(
        update_fields=["speech_features"]
    )

    return features