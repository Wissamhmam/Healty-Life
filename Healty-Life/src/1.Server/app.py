from flask import Flask, request, jsonify
from flask_cors import CORS 
from python import GetContentFromWeb  
app = Flask(__name__)
CORS(app)  

@app.route('/process-message', methods=['POST'])
def process_message():
    data = request.get_json()
    message = data.get('message')
    content = GetContentFromWeb(message)
    return jsonify({'content': content})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
