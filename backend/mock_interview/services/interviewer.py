import json
import os
from dotenv import load_dotenv
from groq import Groq

load_dotenv()
client = Groq(
    api_key=os.getenv("GROQ_API_KEY")
)


SYSTEM_PROMPT = """
You are an AI interviewer conducting a professional
mock interview for a candidate.

The candidate's message is always an answer to your
previous interview question.

Your job is to conduct a natural, adaptive interview.

IMPORTANT RULES:

- Ask exactly ONE question at a time.
- Base the next question on the candidate's previous answer.
- Never combine multiple questions into one.
- If multiple relevant topics exist, choose only the single most relevant one.
- Remember the entire conversation.
- Do not invent candidate skills, projects, experience,
  education, or achievements.
- Ask relevant follow-up questions.
- Do not provide tutorials or career advice during the interview.
- Do not evaluate the candidate during the interview.
- Keep questions concise.
- If an answer is unclear, ask one clarification question.

OUTPUT FORMAT:

Return ONLY the next interview question as plain text.

Rules:
- Ask exactly ONE interview question.
- The question must end with "?".
- Never ask multiple questions.
- Never return JSON.
- Never return Markdown.
- Never return code fences.
- Never include explanations or career advice.
- Do not include a separate remark.
"""


def generate_question(
    candidate_context,
    interview_type,
    history
):

    context_text = json.dumps(
        candidate_context,
        indent=2
    )

    messages = [
        {
            "role": "system",
            "content": SYSTEM_PROMPT
        },
        {
            "role": "system",
            "content": (
                f"Interview type: {interview_type}\n\n"
                f"Candidate context:\n{context_text}"
            )
        }
    ]

    messages.extend(history)

    response = client.chat.completions.create(
        model="openai/gpt-oss-120b",
        messages=messages,
        temperature=0.1,
        max_tokens=150,
       
    )

    question = response.choices[0].message.content.strip()

    return question