import React from "react";
import "./Exp.css";

function Exp() {
  return (
    <section className="experience section" id="experience">
      <div className="container">
        <div className="section-header">
          <h3 className="title" data-title="Experience">
            What I have done recently.
          </h3>
        </div>

        <div className="cards">
          <div className="card-wrap">
            <div className="card" data-card="Generation">
              <div className="card-content z-index">
                <img src="./img/Generation.jpg" class="icon" alt="" />
                <h3 className="title-sm">Learner</h3>
                <p className="text">Jan 2022 - Apr 2022</p>
                Junior Software Developer Bootcamp
              </div>
            </div>
          </div>
          <div className="card-wrap">
            <div className="card" data-card="MikiSolutions">
              <div className="card-content z-index">
                <img src="./img/miki.jpg" className="icon" alt="" />
                <h3 className="title-sm">Application Support</h3>
                <p className="text">Dec 2018 - Present</p>
                <li>
                  Manage technical and operation support issues from clients and
                  internal parties who use the company’s application.(using XML
                  and JSON in the log)
                </li>
                <li>
                  Monitor the production applications, identify problems, and
                  resolve or report issues to the Developer team.
                </li>
                <li>Non complex database management with SQL.</li>
              </div>
            </div>
          </div>

          <div className="card-wrap">
            <div className="card" data-card="MikiSolutions">
              <div className="card-content z-index">
                <img src="./img/miki.jpg" class="icon" alt="" />
                <h3 className="title-sm">Content management</h3>
                <p className="text">Feb 2016 - Nov 2018</p>
                <li>
                  Maintain, update and research hotel information for the
                  company's website.
                </li>
                <li>
                  Handling inquiries and requests from colleagues and hotels.
                </li>
              </div>
            </div>
          </div>

          <div className="cards">
            <div className="card-wrap">
              <div className="card" data-card="Generation">
                <div className="card-content z-index">
                  <img src="./img/SU.png" class="icon" alt="" />
                  <h3 className="title-sm">
                    Bachelor of Arts - BA, Anthropology
                  </h3>
                  <p className="text">2005-2009</p>
                  Second-class honors
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Exp;
