from rest_framework import serializers
from .models import Resume


class ResumeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Resume
        fields = [
            "id",
            "original_filename",
            "file",
            "file_size",
            "uploaded_at",
            "ats_score",
            "skills",
            "technologies",
            "projects",
            "education",
            "experience",
            "certifications",
            "analysis",
        ]
        read_only_fields = [
            "id",
            "original_filename",
            "file_size",
            "uploaded_at",
            "ats_score",
            "skills",
            "technologies",
            "projects",
            "education",
            "experience",
            "certifications",
            "analysis",
        ]