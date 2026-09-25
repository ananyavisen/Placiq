from rest_framework import serializers

from .models import CoachConversation, CoachMessage


class CoachMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = CoachMessage
        fields = ["id", "role", "content", "created_at"]


class CoachConversationSerializer(serializers.ModelSerializer):
    class Meta:
        model = CoachConversation
        fields = ["id", "title", "created_at", "updated_at"]


class ChatRequestSerializer(serializers.Serializer):
    message = serializers.CharField(
        max_length=5000,
        allow_blank=False,
        trim_whitespace=True,
    )
    conversation_id = serializers.IntegerField(
        required=False,
        allow_null=True,
        min_value=1,
    )
