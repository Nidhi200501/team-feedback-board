import React, { useState } from "react";
import "./App.css";

function MemberCard({ name, count, onIncrease }) {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p className="count">Feedback: {count}</p>
      <button className="btn" onClick={onIncrease}>Give Feedback</button>
    </div>
  );
}

export default function App() {
  const team = ["Tanya", "Nidhi", "Kajal", "Komal"];

  const [feedback, setFeedback] = useState(
    team.map(() => 0) // [0,0,0,0]
  );

  function increaseFeedback(index) {
    const updated = [...feedback];
    updated[index] += 1;
    setFeedback(updated);
  }

  function resetAll() {
    setFeedback(team.map(() => 0));
  }

  return (
    <div className="wrapper">
      <h1>Team Feedback Board</h1>
      <p className="subtitle">
        Each member gets independent feedback. Reset All clears everything.
      </p>

      <div className="grid">
        {team.map((member, index) => (
          <MemberCard
            key={index}
            name={member}
            count={feedback[index]}
            onIncrease={() => increaseFeedback(index)}
          />
        ))}
      </div>

      <button className="btn reset" onClick={resetAll}>
        Reset All
      </button>
    </div>
  );
}