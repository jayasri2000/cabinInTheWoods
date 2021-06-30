import React from "react";
import MailIcon from "@material-ui/icons/Mail";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import CallIcon from "@material-ui/icons/Call";
import "./AboutHero.css";
const AboutHero = () => {
  return (
    <div className="aboutHero">
      <div className="aboutHero__image">
        <img
          src="https://assets.simpleviewcms.com/simpleview/image/fetch/c_fill,f_jpg,h_605,q_65,w_1200/https://media.newmindmedia.com/TellUs/image/%3Ffile%3D027_572849519.jpg%26dh%3D800%26dw%3D1200%26t%3D4 "
          alt="image"
          className="aboutHero__img"
        />
      </div>
      <div className="aboutHero__text">
        <h2>About</h2>
        <p>
          Find solace in nature's lap in cabins provided by us.Providing best
          amenities overall to allow for the perfect gateway.
        </p>
        <div className="aboutHero__button">
          <MailIcon
            style={{ color: "#3cc2b9", fontSize: 18, marginRight: 20 }}
          />{" "}
          {"  "}CONNECT
        </div>
      </div>
      <div className="aboutHero__social">
        <FacebookIcon
          style={{ color: "#3cc2b9", fontSize: 18, marginTop: 20 }}
        />
        <InstagramIcon
          style={{ color: "#3cc2b9", fontSize: 18, marginTop: 20 }}
        />
        <CallIcon
          style={{
            color: "#3cc2b9",
            fontSize: 18,
            marginTop: 20,
          }}
        />
      </div>
    </div>
  );
};

export default AboutHero;
