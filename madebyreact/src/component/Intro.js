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
              Experienced Operations Officer with a history of working in
              various working environment who have been internal transfer from
              administration field to tech field in Dec 2018 by implement the
              knowledge as a user and self learning from W3school to made this
              transfer happened within 2 weeks.
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
