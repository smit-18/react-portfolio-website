import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content "
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Engineering Management</h3>
                <span className="qualification__subtitle">
                  M.Eng. | Cornell University
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> Aug 2023 - Dec 2024
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Computer Engineering</h3>
                <span className="qualification__subtitle">
                  B.Tech. | Pandit Deendayal Energy University
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> Aug 2019 - May 2023
                </div>
              </div>
            </div>

          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content "
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Software Engineer Intern</h3>
                <span className="qualification__subtitle">
                  Clinch Inc. - New York, USA
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> Jul 2024 - Aug 2024
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Full Stack Developer Intern</h3>
                <span className="qualification__subtitle">
                  Quicko - India
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> Jan 2023 - May 2023
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web Developer Intern</h3>
                <span className="qualification__subtitle">
                  Sieger Creations - India
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> Jun 2022 - Aug 2022
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
