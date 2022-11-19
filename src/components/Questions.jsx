import React from "react";
import { data } from "../data";

import { data2 } from "../data";
const Questions = () => {
  return (
    <div className="questions-container">
      <h4>FAQ</h4>
      <h1>Frequently Asked Questions</h1>
      <p>
        Get quick answers to questions about HNG internship, teams, projects and
        others
      </p>

      <div className="question-item-container">
        {data.map((items, index) => {
          return (
            <div className="question-item">
              <div className="question-title">
                <h3>{items.Question}</h3>
                <span>icon</span>
              </div>
              <div className="question-content">
                <p>{items.Answer}</p>
              </div>
            </div>
          );
        })}
        {data2.map((items, index) => {
          return (
            <div className="question-item">
              <div className="question-title">
                <h3>{items.Question}</h3>
                <span>icon</span>
              </div>
              <div className="question-content">
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
