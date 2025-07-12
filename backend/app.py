from flask import Flask, request, jsonify
from flask_cors import CORS
import requests
from dotenv import load_dotenv
import os

load_dotenv()  # Load environment variables from .env

API_KEY = os.getenv("APILAYER_API_KEY")

app = Flask(__name__)
CORS(app, supports_credentials=True, origins=["http://localhost:5173"])

# External API configuration
API_URL = "https://api.apilayer.com/text_to_emotion"


@app.route('/analyze', methods=['POST'])
def analyze_emotion():
    try:
        # Get the text input from frontend
        data = request.get_json()
        text = data.get("text", "")
        print(f"Received text from frontend: {text}")

        if not text.strip():
            return jsonify({"error": "Text field is required"}), 400

        # Setup headers and make external API call
        headers = {
            "Content-Type": "text/plain",
            "apikey": API_KEY
        }

        try:
            print("Sending request to Apilayer...")
            response = requests.post(API_URL, data=text, headers=headers, timeout=10)
            print("Apilayer status code:", response.status_code)
            print("Apilayer response body:", response.text)
            response.raise_for_status()
            return jsonify(response.json()), 200
        except requests.exceptions.RequestException as e:
            print(f"API request failed: {str(e)}")
            print("Falling back to mocked emotion response")
            return jsonify({
                "Happy": 0.9,
                "Angry": 0.05,
                "Surprise": 0.03,
                "Sad": 0.01,
                "Fear": 0.01
            }), 200

    except requests.exceptions.RequestException as e:
        return jsonify({"error": f"External API request failed: {str(e)}"}), 502
    except Exception as e:
        return jsonify({"error": f"Internal server error: {str(e)}"}), 500

if __name__ == "__main__":
    print(">>> Flask is launching on http://localhost:5000")
    app.run(debug=True, host="0.0.0.0", port=5001)