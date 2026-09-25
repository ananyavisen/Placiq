PLACIQ AI COACH BACKEND
=======================

This folder is intended to be copied directly into:
    Placiq/backend/ai_coach/

Manual changes outside this folder:

1) backend/config/settings.py
Add "ai_coach" to INSTALLED_APPS.

2) backend/config/urls.py
Add:
    path("api/ai-coach/", include("ai_coach.urls")),

3) backend/requirements.txt
Add:
    groq

The existing project already uses python-dotenv. The AI Coach uses the
same GROQ_API_KEY environment variable and the same Groq model as the
existing Mock Interview/Resume AI code:
    openai/gpt-oss-120b

4) Make sure GROQ_API_KEY exists in backend/.env.

5) From the backend directory run:
    python manage.py migrate

API endpoints:
    POST   /api/ai-coach/chat/
    GET    /api/ai-coach/conversations/
    POST   /api/ai-coach/conversations/
    GET    /api/ai-coach/conversations/<conversation_id>/
    DELETE /api/ai-coach/conversations/<conversation_id>/

The API uses the project's existing SessionAuthentication and requires an
authenticated user.

IMPORTANT:
The React AI Coach ChatPanel still needs to call POST /api/ai-coach/chat/.
That frontend connection is intentionally not included in this backend folder.
