import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import axios from "axios";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    if (!text.trim()) {
      setError("Please enter some text.");
      return;
    }

    setLoading(true);
    setError("");
    setResult(null);

    try {
      const response = await axios.post("http://localhost:5001/analyze", { text });

      const emotions = response.data as Record<string, number>;
      const topEmotion = Object.entries(emotions).reduce<[string, number]>(
        (max, curr) => (curr[1] > max[1] ? curr : max),
        ["None", 0]
      );

      setResult(`Detected Emotion: ${topEmotion[0]} (${(topEmotion[1] * 100).toFixed(1)}%)`);
    } catch (err) {
      console.error(err);
      setError("Something went wrong while analyzing emotion.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-[#f9f9f9]">
      <FontAwesomeIcon icon={faHeart} className="heart-icon" />
      <h1 className="text-2xl font-semibold mb-4">Emotion Reflection Tool</h1>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="How are you feeling today?"
        className="w-full max-w-md p-3 border border-gray-300 rounded mb-3"
      />
      <div className="btn">
        <button
        onClick={handleSubmit}
        disabled={loading}
        className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700"
      >
        {loading ? "Analyzing..." : "Submit"}
      </button>
      </div>
    
      {error && <p className="text-red-500 mt-3">{error}</p>}

      {result && (
        <div className="result-card fade-in">
          <h2 className="text-lg font-semibold text-purple-600 mb-2">Result</h2>
          <p className="text-gray-700">{result}</p>
        </div>
      )}
    </div>
  );
}

export default App;
