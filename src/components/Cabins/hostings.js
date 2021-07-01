import React, { useState } from "react";
import cabins from "../shared/housings";
import "./hostings.css";

const Hostings = () => {
  const [housings, setHousings] = useState(cabins);
  return (
    <div className="housings">
      <h4 style={{ color: "#fff" }}>Cabins</h4>
      <div className="housings__container">
        <div className="housings__list">
          {housings.map((cabin) => {
            return (
              <div className="cabin" key={cabin.id}>
                <img
                  src={cabin.image}
                  className="cabin__image"
                  alt={cabin.desc}
                />
                <div className="cabin_details">
                  <div className="cabin__desc">{cabin.desc}</div>
                  <div className="cabin__stat">{cabin.stats}</div>
                  <div className="cabin__footer">
                    <p>{cabin.reiews}</p>
                    <p>{cabin.price}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="housings__solo"></div>
      </div>
    </div>
  );
};

export default Hostings;
