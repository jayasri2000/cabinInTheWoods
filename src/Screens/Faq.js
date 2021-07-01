import React, { useState } from "react";
import "./screens.css";
import FAQ from "../components/FaqData";

import SingleQuestion from "../components/SingleQuestion";

const Faq = () => {
  const [questions, setQuestions] = useState(FAQ);
  return (
    <div
      className="faq"
      style={{ backgroundColor: "#01363c", height: "100vh" }}
    >
      <div style={{ color: "#fff", marginBottom: 50 }}>
        <h3>How To Start?</h3>
        <section className="info">
          {questions.map((question) => {
            return (
              <SingleQuestion key={question.id} {...question}></SingleQuestion>
            );
          })}
        </section>
      </div>
    </div>
  );
};

export default Faq;
