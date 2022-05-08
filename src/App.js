import { useState } from "react";
import { createPortal } from "react-dom";
import "./styles.css";

export default function App() {
  const [pending, setPending] = useState([
    "Learn HTML",
    "Learn CSS",
    "Learn JS",
    "Learn REact",
    "Learn Mern"
  ]);
  const [completed, setCompleted] = useState([]);

  return (
    <div className="container">
      {/* todo list */}
      <div className="task-container">
        <h4>Pending Task</h4>
        {pending.map((task, index) => {
          return (
            <div className="task-card">
              {index + 1} {task}
              <button
                className="complete-btn"
                onClick={() => {
                  var p = [...pending];
                  var c = [...completed];
                  c.push(task);
                  setCompleted(c);
                  p.splice(index, 1);
                  setPending(p);
                }}
              >
                completed
              </button>
            </div>
          );
        })}
      </div>

      {/* completed list */}
      <div className="task-container">
        <h4>Completed Task</h4>
        {completed.map((task, index) => {
          return <div>{task}</div>;
        })}
      </div>
    </div>
  );
}
