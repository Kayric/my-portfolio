import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav>
      <div className="container">
        <div className="links">
          <ul>
            <li>
              <a href="#header">Home</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <a href="./img/Kirkrapee2022.pdf" className="btn">
              MY CV
            </a>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
