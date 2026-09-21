from .evaluator import generate_evaluation
from .evaluation_data import build_evaluation_turns
from .context import build_candidate_context

from ..models import InterviewEvaluation


def calculate_overall_score(evaluation, interview_type):
    """
    Calculate the overall percentage from the category scores.

    The LLM does NOT calculate this.
    """

    if interview_type == "technical":

        scores = [
            evaluation["communication"]["score"],
            evaluation["confidence"]["score"],
            evaluation["answer_quality"]["score"],
            evaluation["technical_performance"]["score"],
            evaluation["accuracy"]["score"],
        ]

    else:  # HR

        scores = [
            evaluation["communication"]["score"],
            evaluation["confidence"]["score"],
            evaluation["answer_quality"]["score"],
            evaluation["speaking_skills"]["score"],
            evaluation["behavioral_performance"]["score"],
        ]

    return round(sum(scores) / len(scores), 2)


def generate_and_save_evaluation(session):
    """
    Generate the post-interview evaluation and persist it
    in the database.
    """

    # -----------------------------------------
    # Candidate context
    # -----------------------------------------

    candidate_context = build_candidate_context(
        session.user
    )

    # -----------------------------------------
    # Build interview data
    # -----------------------------------------

    turns = build_evaluation_turns(
        session
    )

    # -----------------------------------------
    # Generate LLM evaluation
    # -----------------------------------------

    evaluation = generate_evaluation(
        candidate_context=candidate_context,
        interview_type=session.interview_type,
        turns=turns
    )

    # -----------------------------------------
    # Calculate overall score
    # -----------------------------------------

    overall_score = calculate_overall_score(
        evaluation,
        session.interview_type
    )

    # -----------------------------------------
    # Extract common scores
    # -----------------------------------------

    communication_score = (
        evaluation["communication"]["score"]
    )

    confidence_score = (
        evaluation["confidence"]["score"]
    )

    answer_quality_score = (
        evaluation["answer_quality"]["score"]
    )

    # -----------------------------------------
    # Technical / HR specific scores
    # -----------------------------------------

    technical_performance_score = None
    accuracy_score = None

    speaking_skills_score = None
    behavioral_performance_score = None

    if session.interview_type == "technical":

        technical_performance_score = (
            evaluation["technical_performance"]["score"]
        )

        accuracy_score = (
            evaluation["accuracy"]["score"]
        )

    else:

        speaking_skills_score = (
            evaluation["speaking_skills"]["score"]
        )

        behavioral_performance_score = (
            evaluation["behavioral_performance"]["score"]
        )

    # -----------------------------------------
    # Save evaluation
    # -----------------------------------------

    interview_evaluation, created = (
        InterviewEvaluation.objects.update_or_create(
            session=session,
            defaults={
                "overall_score": overall_score,

                "communication_score":
                    communication_score,

                "confidence_score":
                    confidence_score,

                "answer_quality_score":
                    answer_quality_score,

                "technical_performance_score":
                    technical_performance_score,

                "accuracy_score":
                    accuracy_score,

                "speaking_skills_score":
                    speaking_skills_score,

                "behavioral_performance_score":
                    behavioral_performance_score,

                "insights": evaluation
            }
        )
    )

    return interview_evaluation