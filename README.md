# 🧠 Emotion Reflection Tool

This is a simple full-stack web application built for an internship assignment. The tool takes user input text and reflects it back with a simulated response using a React + TypeScript frontend and a Flask backend API.

---


<pre>
```bash
## 📁 Project Structure
Emotion-reflection-tool-internship/
│
├── frontend/          # React + TypeScript frontend
│   └── App.tsx        # Main UI logic
│
├── backend/           # Flask backend
│   └── app.py         # API for analyzing user input
```
</pre>


---

## 🚀 Getting Started

### 🔧 Prerequisites

- [Node.js](https://nodejs.org/en/download/) (v16+)
- [Python 3.8+](https://www.python.org/downloads/)
- [pip](https://pip.pypa.io/en/stable/installation/)
- [Git](https://git-scm.com/)

---

## 🖥️ Frontend Setup (React + TypeScript)

1. Navigate to the frontend folder:
    ```bash
    cd frontend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Run the React app:
    ```bash
    npm run dev
    ```

> The frontend should be running at `http://localhost:5173`

---

## 🔙 Backend Setup (Flask API)

1. Navigate to the backend folder:
    ```bash
    cd backend
    ```

2. Create a virtual environment and activate it:
    ```bash
    python3 -m venv venv
    source venv/bin/activate   # Linux/macOS
    venv\Scripts\activate      # Windows
    ```

3. Install required Python packages:
    ```bash
    pip install flask flask-cors
    ```

4. Run the Flask server:
    ```bash
    python app.py
    ```

> The backend will run on `http://localhost:5000`

---

## 💡 How It Works

1. User types a message into the React app.
2. On clicking **Analyze**, a POST request is sent to the Flask API.
3. The Flask API receives the input, logs it, and returns a mock reflected response.
4. The frontend displays the response dynamically.

---
## 📸 Preview

<img width="1423" height="775" alt="Screenshot 2025-07-12 at 9 01 44 PM" src="https://github.com/user-attachments/assets/e369a26b-4261-4330-a81a-2be5464e222e" />



## 📃 License

This project is for academic and internship evaluation purposes only. No license provided.

---

## ✨ Author

- **Ketan Chokkara** – [@CodeUltr0n](https://github.com/CodeUltr0n)

---
