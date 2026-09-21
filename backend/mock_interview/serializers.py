from rest_framework import serializers
from .models import InterviewSession, InterviewEvaluation


class InterviewAnswerSerializer(serializers.Serializer):
    audio = serializers.FileField()


class StartInterviewSerializer(serializers.Serializer):
    interview_type = serializers.ChoiceField(
        choices=["hr", "technical"]
    )


class InterviewSessionListSerializer(serializers.ModelSerializer):
    overall_score = serializers.SerializerMethodField()

    class Meta:
        model = InterviewSession
        fields = [
            "id",
            "interview_type",
            "status",
            "started_at",
            "completed_at",
            "question_count",
            "overall_score",
        ]

    def get_overall_score(self, obj):
        if hasattr(obj, "evaluation") and obj.evaluation:
            return obj.evaluation.overall_score

        return None


class InterviewEvaluationSerializer(serializers.ModelSerializer):
    class Meta:
        model = InterviewEvaluation
        fields = "__all__"