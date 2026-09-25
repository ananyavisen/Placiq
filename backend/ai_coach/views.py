from django.db import transaction
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import CoachConversation, CoachMessage
from .serializers import (
    ChatRequestSerializer,
    CoachConversationSerializer,
    CoachMessageSerializer,
)
from .services import generate_coach_response


class CoachChatView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        serializer = ChatRequestSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        message = serializer.validated_data["message"]
        conversation_id = serializer.validated_data.get("conversation_id")

        if conversation_id is not None:
            try:
                conversation = CoachConversation.objects.get(
                    id=conversation_id,
                    user=request.user,
                )
            except CoachConversation.DoesNotExist:
                return Response(
                    {"error": "Conversation not found."},
                    status=status.HTTP_404_NOT_FOUND,
                )
        else:
            conversation = CoachConversation.objects.create(
                user=request.user,
                title=message[:80],
            )

        # Send recent history to the model. The new user message is added below,
        # so it is not duplicated in the history sent to Groq.
        recent_messages = list(
            conversation.messages.order_by("-created_at")[:30]
        )
        recent_messages.reverse()

        history = [
            {"role": item.role, "content": item.content}
            for item in recent_messages
        ]

        try:
            assistant_text = generate_coach_response(
                user=request.user,
                history=history,
                message=message,
            )
        except Exception as exc:
            return Response(
                {
                    "error": "Unable to generate an AI Coach response.",
                    "detail": str(exc),
                },
                status=status.HTTP_502_BAD_GATEWAY,
            )

        # Only save the messages after the AI response succeeds. This prevents
        # failed Groq requests from leaving an orphan user message in the chat.
        with transaction.atomic():
            user_message = CoachMessage.objects.create(
                conversation=conversation,
                role="user",
                content=message,
            )
            assistant_message = CoachMessage.objects.create(
                conversation=conversation,
                role="assistant",
                content=assistant_text,
            )
            conversation.save(update_fields=["updated_at"])

        return Response(
            {
                "conversation_id": conversation.id,
                "message": CoachMessageSerializer(assistant_message).data,
                "user_message": CoachMessageSerializer(user_message).data,
            },
            status=status.HTTP_200_OK,
        )


class CoachConversationListView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        conversations = CoachConversation.objects.filter(user=request.user)
        return Response(
            CoachConversationSerializer(conversations, many=True).data,
            status=status.HTTP_200_OK,
        )

    def post(self, request):
        title = str(request.data.get("title", "New AI Coach Chat"))[:200]
        conversation = CoachConversation.objects.create(
            user=request.user,
            title=title or "New AI Coach Chat",
        )
        return Response(
            CoachConversationSerializer(conversation).data,
            status=status.HTTP_201_CREATED,
        )


class CoachConversationDetailView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, conversation_id):
        try:
            conversation = CoachConversation.objects.get(
                id=conversation_id,
                user=request.user,
            )
        except CoachConversation.DoesNotExist:
            return Response(
                {"error": "Conversation not found."},
                status=status.HTTP_404_NOT_FOUND,
            )

        return Response(
            {
                "conversation": CoachConversationSerializer(conversation).data,
                "messages": CoachMessageSerializer(
                    conversation.messages.all(), many=True
                ).data,
            },
            status=status.HTTP_200_OK,
        )

    def delete(self, request, conversation_id):
        try:
            conversation = CoachConversation.objects.get(
                id=conversation_id,
                user=request.user,
            )
        except CoachConversation.DoesNotExist:
            return Response(
                {"error": "Conversation not found."},
                status=status.HTTP_404_NOT_FOUND,
            )

        conversation.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
