import json
import os

from groq import Groq


client = Groq(api_key=os.getenv("GROQ_API_KEY"))


def analyze_resume(resume_text):
    prompt = f"""
You are a professional resume analyzer.

Analyze the following resume and extract structured information.

Return ONLY valid JSON.
Do not add markdown, explanations, or code fences.

JSON structure:
{{
    "skills": [],
    "technologies": [],
    "projects": [],
    "education": [],
    "experience": [],
    "certifications": [],
    "suggestions": []
    "ats_score": 0
}}

Rules:
- skills: technical and professional skills explicitly mentioned.
- technologies: programming languages, frameworks, libraries, databases, tools, and platforms explicitly mentioned.
- projects: extract project name and a short description.
- education: extract degree, institution, and relevant details.
- experience: extract company/organization, role, duration, and key work if available.
- certifications: extract certification names if present.
- suggestions: provide specific improvements based only on the resume.
- Do not invent information that is not present in the resume.
- ats_score: give an ATS compatibility score from 0 to 100 based on resume structure, clarity, relevant keywords, measurable achievements, formatting, and completeness. Do not invent information.

Resume:
{resume_text}
"""

    response = client.chat.completions.create(
        model="openai/gpt-oss-120b",
        messages=[
            {
                "role": "user",
                "content": prompt,
            }
        ],
        temperature=0.2,
    )

    content = response.choices[0].message.content

    return json.loads(content)