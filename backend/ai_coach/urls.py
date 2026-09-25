from django.urls import path

from .views import (
    CoachChatView,
    CoachConversationListView,
    CoachConversationDetailView,
)


urlpatterns = [
    path("chat/", CoachChatView.as_view(), name="coach-chat"),
    path(
        "conversations/",
        CoachConversationListView.as_view(),
        name="coach-conversations",
    ),
    path(
        "conversations/<int:conversation_id>/",
        CoachConversationDetailView.as_view(),
        name="coach-conversation-detail",
    ),
]
