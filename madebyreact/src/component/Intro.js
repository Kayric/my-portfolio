import React from "react";
import "./Intro.css";

function Intro() {
  return (
    <header>
      <div className="header-content">
        <div className="container grid-2">
          <div className="column-1">
            <h1 className="header-title">Kirkrapee Techavanich</h1>
            <p className="text">
              A software developer in training with strengths in administrative
              and customer service skills. My curiosity about problem solving
              and my love of learning drive my interest in the journey into the
              tech world.
            </p>
          </div>

          <div className="column-2 image">
            <img
              src="./img/profile.jpg"
              className="img-element z-index"
              alt=""
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Intro;
