import React, { useState, useEffect } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import ClearIcon from "@material-ui/icons/Clear";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobilemenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  useEffect(() => {
    showButton();
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <div className="navbar">
        <div className="navbar-container container">
          <div style={{ color: "#fff", fontWeight: "bold" }}>CANOPY.</div>
          <div className="menu-icon" onClick={handleClick}>
            {click ? <ClearIcon /> : <MenuIcon />}
          </div>
          <div className={click ? "nav-menu active" : "nav-menu"}>
            <div className="nav-item" onClick={closeMobilemenu}>
              <Link to="/">Home</Link>
            </div>
            <div className="nav-item" onClick={closeMobilemenu}>
              <Link to="/about">About</Link>
            </div>
            <div className="nav-item" onClick={closeMobilemenu}>
              <Link to="/faq">FAQs</Link>
            </div>
            <div className="nav-item" onClick={closeMobilemenu}>
              <Link to="/cabins">Cabins</Link>
            </div>
            <div className="nav-item" onClick={closeMobilemenu}>
              <Link to="/bookings">Bookings</Link>
            </div>
            <div className="nav__booknow">BOOK A CABIN</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
