import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact-box">
          <div className="contact-info">
            <h3 className="title">Get in touch</h3>
            <div className="information-wrap">
              <div className="information">
                <div className="contact-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <p className="info-text">Bangkok, Thailand</p>
              </div>

              <div className="information">
                <div className="contact-icon">
                  <i className="fas fa-paper-plane"></i>
                </div>
                <p className="info-text">kirkrapee@gmail.com</p>
              </div>

              <div className="information">
                <div className="contact-icon">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <p className="info-text">+66-84681-2951</p>
              </div>

              <div className="information">
                <div className="contact-icon">
                  <a href="https://github.com/Kayric">
                    <i className="fab fa-github"></i>
                  </a>
                </div>
                <p className="info-text">Github</p>
              </div>

              <div className="information">
                <div className="contact-icon">
                  <a href="https://www.linkedin.com/in/kirkrapee/">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
                <p className="info-text">Linkedin</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
