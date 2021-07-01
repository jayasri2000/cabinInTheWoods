import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import CheckIcon from "@material-ui/icons/Check";
import "./SingleQuestion.css";

const SingleQuestion = ({ question, answer }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <div className="question">
      <div className="question__question">
        <h4>{question}</h4>
        <div className="button" onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? (
            <RemoveIcon style={{ color: "#3cc2b9" }} />
          ) : (
            <AddIcon style={{ color: "#3cc2b9" }} />
          )}
        </div>
      </div>
      <div>{showInfo && <p className="question__answer">{answer}</p>}</div>
    </div>
  );
};

export default SingleQuestion;
