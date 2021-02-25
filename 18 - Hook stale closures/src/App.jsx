import React, { useState, useEffect, useRef } from "react";
import { Alert, Confirm } from "react-st-modal";
import "./App.css";

function App() {
  const input = useRef("");
  const [timer, setTimer] = useState(0);

  // useEffect(() => {
  //   const handleKeydown = (e) => {
  //     if (e.key === "Escape") {
  //       const doneRatio = Math.round((input.length / text.length) * 100);
  //       Confirm(`You already typed ${doneRatio}% of the text`, "Are you sure?");
  //     }
  //   };
  //   document.addEventListener("keydown", handleKeydown);
  //   return () => document.removeEventListener("keydown", handleKeydown);
  // }, [input]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer((t) => t + 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const timerId = setTimeout(() => {
      const wpm = input.current.split(" ").length;
      Alert(`Your speed is ${wpm} WPM.`, "Your WPM");
    }, 5000);
    return () => clearTimeout(timerId);
  }, []);

  const text =
    "It is an old maxim of mine that when you have excluded the impossible, whatever remains, however improbable, must be the truth. Now, I knew that it was not you who had brought it down, so there only remained your niece and the maids. But if it were the maids, why should your son allow himself to be accused in their place? There could be no possible reason.";

  return (
    <div className="app">
      <div className="header">
        <p>{text}</p>
        <span className="timer">{timer}</span>
      </div>
      <textarea
        className="typing-input"
        onChange={(e) => (input.current = e.target.value)}
      ></textarea>
    </div>
  );
}

export default App;
