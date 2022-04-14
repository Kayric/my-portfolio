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
          <a href="https://fungwithme.vercel.app/" target="_blank">
            <div className="grid-item">
              <div className="gallery-image">
                <img src="./img/Jamming.jpg" alt="" />
                <div class="img-overlay">
                  <h3>React App</h3>
                </div>
              </div>
            </div>
          </a>

          <a href="https://kayric.github.io/colmar-academy/" target="_blank">
            <div className="grid-item">
              <div className="gallery-image">
                <img src="./img/colmar.jpg" alt="" />
                <div class="img-overlay">
                  <h3>Bootstrap Web Design</h3>
                </div>
              </div>
            </div>
          </a>

          <a href="https://github.com/Kayric/finalproject" target="_blank">
            <div className="grid-item">
              <div className="gallery-image">
                <img src="./img/GoalToFit.jpg" alt="" />
                <div class="img-overlay">
                  <h3>MERN Stack App</h3>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
