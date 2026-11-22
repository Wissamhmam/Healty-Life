import os
from openai import OpenAI

# OpenAI reads OPENAI_API_KEY from the process environment.
# Never hard-code provider credentials in source code.
client = OpenAI()


def GetContentFromWeb(message: str) -> str:
    if not isinstance(message, str) or not message.strip():
        raise ValueError("Message must be a non-empty string")
    if len(message) > 8000:
        raise ValueError("Message exceeds the 8000-character limit")

    chat_completion = client.chat.completions.create(
        messages=[{"role": "user", "content": message.strip()}],
        model=os.getenv("OPENAI_MODEL", "gpt-3.5-turbo"),
        max_tokens=1200,
    )
    return chat_completion.choices[0].message.content or ""
