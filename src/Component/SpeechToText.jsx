import React, {useState} from 'react'
import './SpeechToText.css'

const SpeechToText = () => {
  const [text, setText] = useState("");
  const [listening, setListening] = useState(false);

  const handleStartListening = () => {
    const recognition = new window.webkitSpeechRecognition();

    recognition.onstart = () => {
      setListening(true);
    };

    recognition.onresult = (event) => {
      const result = event.results[0][0].transcript;
      setText(result);
    };

    recognition.onend = () => {
      setListening(false);
    };

    recognition.start();
  };

  return (
    <div className="converter-container">
      <h1>
        Speech To Text <span>Converter</span>
      </h1>
      <button onClick={handleStartListening} disabled={listening}>
        {listening ? "Listening..." : "Start Listening"}
      </button>
      <div className="output-container">
        <h2>
          Converted <span>Text </span>:
        </h2>
        <div className="output-text">{text}</div>
      </div>
    </div>
  );
};


export default SpeechToText