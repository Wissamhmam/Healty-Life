import os
from openai import OpenAI

client = OpenAI(
    # This is the default and can be omitted
    api_key="API_KEY",
)


def GetContentFromWeb(MSG):
    chat_completion = client.chat.completions.create(
        messages=[
            {
                "role": "user",
                "content": MSG,
             }
    ],
    model="gpt-3.5-turbo",
                                                    )
    return chat_completion.choices[0].message.content


