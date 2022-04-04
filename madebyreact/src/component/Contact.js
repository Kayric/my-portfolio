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
            </div>
          </div>

          <div className="contact-form">
            <h3 className="title">Contact me</h3>
            <div className="row">
              <input
                type="text"
                className="contact-input"
                placeholder="First Name"
              />
              <input
                type="text"
                className="contact-input"
                placeholder="Last Name"
              />
            </div>

            <div className="row">
              <input
                type="text"
                className="contact-input"
                placeholder="Phone"
              />
              <input
                type="email"
                className="contact-input"
                placeholder="Email"
              />
            </div>

            <div className="row">
              <textarea
                name="message"
                className="contact-input textarea"
                placeholder="Message"
              ></textarea>
            </div>
            <a href="#" className="btn">
              Send
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
