import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="bottom-footer">
          <div className="copyright">
            <p className="text">
              Inspired by True Coder | Made by{" "}
              <span>Kirkrapee Techavanich</span>
            </p>
          </div>

          <div className="followme-wrap">
            <div className="followme">
              <h3>Follow me</h3>
              <span className="footer-line"></span>
              <div className="social-media"></div>
            </div>

            <div className="back-btn-wrap">
              <a href="#" className="back-btn">
                <i className="fas fa-chevron-up"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
