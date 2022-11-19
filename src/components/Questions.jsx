import React, { useState } from "react";
import { data } from "../data";
import arrowup from "../assets/images/arrow-up.png";

import arrowdown from "../assets/images/arrow-down.png";

const Questions = () => {
  const [open, setOpen] = useState(null);

  const toggle = (i) => {
    if (open === i) {
      return setOpen(null);
    }
    setOpen(i);
  };

  return (
    <div className="questions-container">
      <h4>FAQ</h4>
      <h1>Frequently Asked Questions</h1>
      <p>
        Get quick answers to questions about HNG internship, teams, projects and
        others
      </p>

      <div className="question-item-container">
        {data.map((items, i) => {
          return (
            <div className="question-item">
              <div className="question-title " onClick={() => toggle(i)}>
                <h3>{items.Question}</h3>
                {open === i ? (
                  <img src={arrowdown} alt="" width={20} />
                ) : (
                  <img src={arrowup} alt="" width={20} />
                )}
              </div>
              <div
                className={
                  open === i ? "question-content active" : "question-content"
                }
              >
                <p>{items.Answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Questions;
