from django.conf import settings
from django.db import models


class Resume(models.Model):
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="resumes",
    )
    file = models.FileField(upload_to="resumes/")
    original_filename = models.CharField(max_length=255)
    file_size = models.PositiveIntegerField()
    uploaded_at = models.DateTimeField(auto_now_add=True)

    # Extracted resume content
    resume_text = models.TextField(blank=True)

    # Resume data
    skills = models.JSONField(default=list, blank=True)
    technologies = models.JSONField(default=list, blank=True)
    projects = models.JSONField(default=list, blank=True)
    education = models.JSONField(default=list, blank=True)
    experience = models.JSONField(default=list, blank=True)
    certifications = models.JSONField(default=list, blank=True)

    # Analysis
    ats_score = models.PositiveIntegerField(null=True, blank=True)
    analysis = models.JSONField(default=dict, blank=True)

    def __str__(self):
        return self.original_filename