from django.contrib import admin

from .models import CoachConversation, CoachMessage


@admin.register(CoachConversation)
class CoachConversationAdmin(admin.ModelAdmin):
    list_display = ("id", "user", "title", "created_at", "updated_at")
    search_fields = ("title", "user__email")
    list_filter = ("created_at", "updated_at")


@admin.register(CoachMessage)
class CoachMessageAdmin(admin.ModelAdmin):
    list_display = ("id", "conversation", "role", "created_at")
    search_fields = ("content",)
    list_filter = ("role", "created_at")
