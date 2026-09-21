from django.urls import path

from .views import (
    StartInterviewView,
    SubmitAnswerView,
     InterviewSessionListView,
     InterviewReportView
)


urlpatterns = [

    path(
        "start/",
        StartInterviewView.as_view()
    ),

    path(
        "<int:session_id>/answer/",
        SubmitAnswerView.as_view()
    ),
     path(
        "sessions/",
        InterviewSessionListView.as_view(),
        name="interview-session-list"
    ),
     path(
    "<int:session_id>/report/",
    InterviewReportView.as_view(),
    name="interview-report",
),

]