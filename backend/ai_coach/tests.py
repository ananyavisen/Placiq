from django.test import TestCase


class AiCoachSmokeTest(TestCase):
    def test_app_imports(self):
        from .models import CoachConversation, CoachMessage

        self.assertEqual(CoachConversation._meta.app_label, "ai_coach")
        self.assertEqual(CoachMessage._meta.app_label, "ai_coach")
