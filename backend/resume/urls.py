from django.urls import path
from .views import ResumeUploadView, ResumeLatestView, ResumeDeleteView

urlpatterns = [
    path("upload/", ResumeUploadView.as_view(), name="resume-upload"),
    path("latest/", ResumeLatestView.as_view(), name="resume-latest"),
    path("delete/", ResumeDeleteView.as_view(), name="resume-delete"),
]