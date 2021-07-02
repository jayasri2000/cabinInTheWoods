import React from "react";
import "./prev.css";

const Prev = ({ image, name, bookingId }) => {
  return (
    <div className="prev">
      <img src={image} alt={name} className="prevImage" />
      <div className="prev_dets">
        <p style={{ paddingBottom: 10 }}>{name}</p>
        <p>{bookingId}</p>
      </div>
      <div className="prev__foot">
        <div className="prev__btn">Book Again</div>
        <div className="prev__btn">Rate</div>
      </div>
    </div>
  );
};

export default Prev;
