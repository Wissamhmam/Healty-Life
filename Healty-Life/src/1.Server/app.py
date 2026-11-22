import os
from flask import Flask, request, jsonify
from flask_cors import CORS
from python import GetContentFromWeb

app = Flask(__name__)
app.config["MAX_CONTENT_LENGTH"] = 16 * 1024
allowed_origins = [
    origin.strip()
    for origin in os.getenv("CORS_ORIGINS", "http://localhost:3000").split(",")
    if origin.strip()
]
CORS(
    app,
    resources={r"/process-message": {"origins": allowed_origins}},
    methods=["POST"],
    allow_headers=["Content-Type"],
)


@app.route("/process-message", methods=["POST"])
def process_message():
    if not request.is_json:
        return jsonify({"error": "Content-Type must be application/json"}), 415
    data = request.get_json(silent=True) or {}
    message = data.get("message")
    if not isinstance(message, str) or not message.strip():
        return jsonify({"error": "A non-empty message is required"}), 400
    if len(message) > 8000:
        return jsonify({"error": "Message exceeds the 8000-character limit"}), 413
    try:
        content = GetContentFromWeb(message)
        return jsonify({"content": content})
    except ValueError as error:
        return jsonify({"error": str(error)}), 400
    except Exception:
        app.logger.exception("Message processing failed")
        return jsonify({"error": "Message processing failed"}), 502


if __name__ == "__main__":
    # Use a production WSGI server in deployment; Flask's dev server is local-only.
    app.run(host="127.0.0.1", port=int(os.getenv("PORT", "5000")), debug=False)
