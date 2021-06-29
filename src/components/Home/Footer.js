import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__item">
        <div className="footer__idate">
          <label>Arrival Date</label>
          <input></input>
        </div>
      </div>
      <div className="footer__item">
        <div className="footer__ddate">
          <label>Departure Date</label>
          <input></input>
        </div>
      </div>
      <div className="footer__item">
        <div className="footer__guests">
          <label>No of guests</label>
          <input></input>
        </div>
      </div>
      <div className="footer__item">
        <div className="footer__button">See Available Rooms</div>
      </div>
    </div>
  );
};

export default Footer;
