import React, { useState } from "react";
import explore from "../shared/Cabin";
import "./Topbar.css";

const Topbar = () => {
  const [thumb, setThumb] = useState(explore);
  return (
    <div className="Topbar__container">
      <h4 style={{ color: "#fff" }}>Explore</h4>
      <div className="Topbar">
        {thumb.map((question) => {
          return (
            <div className="thumbnail">
              <img
                className="thumbnail__image"
                src={question.image}
                alt={question.text}
              />
              <div className="text">
                <p> {question.name}</p>
                <p> {question.dist}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Topbar;
