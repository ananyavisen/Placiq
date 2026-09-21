from rest_framework import status
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated

from .models import Resume
from .serializers import ResumeSerializer
from .extractor import extract_text
from .analyzer import analyze_resume


class ResumeUploadView(APIView):
    permission_classes = [IsAuthenticated]
    parser_classes = [MultiPartParser, FormParser]

    def post(self, request):
        file = request.FILES.get("file")

        if not file:
            return Response(
                {"error": "No resume file provided."},
                status=status.HTTP_400_BAD_REQUEST,
            )

        if file.size > 5 * 1024 * 1024:
            return Response(
                {"error": "File size must be less than 5MB."},
                status=status.HTTP_400_BAD_REQUEST,
            )

        allowed_types = [
            "application/pdf",
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        ]

        if file.content_type not in allowed_types:
            return Response(
                {"error": "Only PDF and DOCX files are allowed."},
                status=status.HTTP_400_BAD_REQUEST,
            )

        # Delete user's previous resumes
        old_resumes = Resume.objects.filter(user=request.user)

        for old_resume in old_resumes:
            if old_resume.file:
                old_resume.file.delete(save=False)

        old_resumes.delete()

        # Save new resume
        resume = Resume.objects.create(
            user=request.user,
            file=file,
            original_filename=file.name,
            file_size=file.size,
        )

        # Extract text
        resume_text = extract_text(resume.file.path)

        # Analyze using Groq
        analysis = analyze_resume(resume_text)

        # Save extracted data and analysis
        resume.resume_text = resume_text
        resume.skills = analysis.get("skills", [])
        resume.technologies = analysis.get("technologies", [])
        resume.projects = analysis.get("projects", [])
        resume.education = analysis.get("education", [])
        resume.experience = analysis.get("experience", [])
        resume.certifications = analysis.get("certifications", [])
        resume.ats_score = analysis.get("ats_score")
        resume.analysis = {
            "suggestions": analysis.get("suggestions", [])
        }

        resume.save()

        return Response(
            ResumeSerializer(resume).data,
            status=status.HTTP_201_CREATED,
        )


class ResumeLatestView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        resume = (
            Resume.objects
            .filter(user=request.user)
            .order_by("-uploaded_at")
            .first()
        )

        if not resume:
            return Response(
                {"message": "No resume uploaded yet."},
                status=status.HTTP_404_NOT_FOUND,
            )

        return Response(
            ResumeSerializer(resume).data,
            status=status.HTTP_200_OK,
        )
class ResumeDeleteView(APIView):
    permission_classes = [IsAuthenticated]

    def delete(self, request):
        resume = (
            Resume.objects
            .filter(user=request.user)
            .order_by("-uploaded_at")
            .first()
        )

        if not resume:
            return Response(
                {"error": "No resume found."},
                status=status.HTTP_404_NOT_FOUND,
            )

        if resume.file:
            resume.file.delete(save=False)

        resume.delete()

        return Response(
            {"message": "Resume deleted successfully."},
            status=status.HTTP_200_OK,
        )