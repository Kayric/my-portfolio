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
            <a
              href="https://www.canva.com/design/DAEIqwm1aEM/BjzRtqwRfY2JXK-hO8lcWw/view?utm_content=DAEIqwm1aEM&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
              className="btn"
            >
              MY CV
            </a>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
