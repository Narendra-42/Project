import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="nav">
      <div className="logo">Speaker Hub</div>
      <div className="nav-links">
        <a href="">Home</a>
        <a href="#products-section">Product</a>
        <a href="">About</a>
        <a href="">Services</a>
      </div>
    </div>
  );
};

export default Navbar;
