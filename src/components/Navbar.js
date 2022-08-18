import React from "react";
import logo from "../images/logo.png"

const Navbar = () => {
  return (
    <>
      <div className="nav">
        <img className="nav-logo" src={logo} alt="" />
        <div className="nav-text"> my travel journal. </div>
      </div>
    </>
  );
};

export default Navbar;
