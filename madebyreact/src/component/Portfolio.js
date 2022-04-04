import React from "react";
import "./Portfolio.css";

function Portfolio() {
  return (
    <section className="portfolio section" id="portfolio">
      <div className="background-bg">
        <div className="overlay overlay-sm"></div>
      </div>

      <div className="container">
        <div className="section-header">
          <h3 className="title" data-title="My works">
            Portfolio
          </h3>
        </div>

        <div className="section-body">
          <div className="filter">
            <button className="filter-btn active" data-filter="*">
              React
            </button>
          </div>

          <div className="grid">
            <a href="https://fungwithme.vercel.app/" target="_blank">
              <div className="grid-item logo-design">
                <div className="gallery-image">
                  <img src="./img/Jamming.jpg" alt="" />
                  <div className="img-description"></div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
