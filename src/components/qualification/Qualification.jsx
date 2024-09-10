import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);
  const [modalState, setModalState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const toggleModalTab = (index) => {
    setModalState(index);
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
              <div className="qualification__info" onClick={() => toggleModalTab(1)}>
                <h3 className="qualification__title">Software Engineer Intern</h3>
                <span className="qualification__subtitle">
                  Clinch Inc. - New York, USA
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> Jul 2024 - Aug 2024
                </div>
              </div>
              <div className={modalState === 1 ? "qualification__modal active-modal" : "qualification__modal"}>
                <div className="qualification__modal-content">
                  <i
                    onClick={() => toggleModalTab(0)}
                    className="uil uil-times qualification__modal-close"
                  ></i>

                  <h3 className="qualification__modal-title">Software Engineer Intern</h3>
                  <p className="qualification__modal-description">
                    Clinch Inc. | New York, USA
                  </p>

                  <ul className="qualification__modal-qualifications grid">
                    <li className="qualification__modal-qualification">
                      <i className="uil uil-check-circle qualification__modal-icon"></i>
                      <p className="qualification__modal-info">
                        Enhanced onboarding UI using React, TypeScript, and Express, reducing process time by 30% and increasing retention by 15%, ensuring product quality and detail-focused development.
                      </p>
                    </li>

                    <li className="qualification__modal-qualification">
                      <i className="uil uil-check-circle qualification__modal-icon"></i>
                      <p className="qualification__modal-info">
                        Developed new email templates for customer support by troubleshooting and triaging issues in the previous version to achieve a 10% increase in interaction rates.
                      </p>
                    </li>

                    <li className="qualification__modal-qualification">
                      <i className="uil uil-check-circle qualification__modal-icon"></i>
                      <p className="qualification__modal-info">
                      Redesigned app navigation by collaborating with cross-functional teams, including Product Management, boosting user engagement by 25% and enhancing overall product quality.
                      </p>
                    </li>
                  </ul>
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
              <div className="qualification__info" onClick={() => toggleModalTab(2)}>
                <h3 className="qualification__title">Full Stack Developer Intern</h3>
                <span className="qualification__subtitle">
                  Quicko - India
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> Jan 2023 - May 2023
                </div>
              </div>

              <div className={modalState === 2 ? "qualification__modal active-modal": "qualification__modal"}>
                <div className="qualification__modal-content">
                  <i
                    onClick={() => toggleModalTab(0)}
                    className="uil uil-times qualification__modal-close"
                  ></i>

                  <h3 className="qualification__modal-title">Full Stack Developer Intern</h3>
                  <p className="qualification__modal-description">
                    Quicko | Ahmedabad, India
                  </p>

                  <ul className="qualification__modal-qualifications grid">
                    <li className="qualification__modal-qualification">
                      <i className="uil uil-check-circle qualification__modal-icon"></i>
                      <p className="qualification__modal-info">
                        Developed and integrated a full-stack booking web app using AWS and Node.js, driving a 25% increase in user engagement by implementing personalized service recommendations.
                      </p>
                    </li>

                    <li className="qualification__modal-qualification">
                      <i className="uil uil-check-circle qualification__modal-icon"></i>
                      <p className="qualification__modal-info">
                        Engineered RESTful APIs for CRUD operations and member availability features, improving operational efficiency by 20%, and streamlining team and workspace management.
                      </p>
                    </li>

                    <li className="qualification__modal-qualification">
                      <i className="uil uil-check-circle qualification__modal-icon"></i>
                      <p className="qualification__modal-info">
                        Built and integrated a coupon management system with seamless backend and frontend integration, increasing sales conversions by 10% and facilitating marketing campaigns during checkout.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div className="qualification__info" onClick={() => toggleModalTab(3)}>
                <h3 className="qualification__title">Web Developer Intern</h3>
                <span className="qualification__subtitle">
                  Sieger Creations - India
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> Jun 2022 - Aug 2022
                </div>
              </div>

              <div className={modalState === 3 ? "qualification__modal active-modal" : "qualification__modal"}>
                <div className="qualification__modal-content">
                  <i
                    onClick={() => toggleModalTab(0)}
                    className="uil uil-times qualification__modal-close"
                  ></i>

                  <h3 className="qualification__modal-title">Web Developer Intern</h3>
                  <p className="qualification__modal-description">
                    Sieger Creations | Udaipur, India
                  </p>

                  <ul className="qualification__modal-qualifications grid">
                    <li className="qualification__modal-qualification">
                      <i className="uil uil-check-circle qualification__modal-icon"></i>
                      <p className="qualification__modal-info">
                        Enhanced website performance by optimizing JavaScript, HTML, and CSS, leading to a 20% reduction in load times and a 15% boost in user satisfaction.
                      </p>
                    </li>

                    <li className="qualification__modal-qualification">
                      <i className="uil uil-check-circle qualification__modal-icon"></i>
                      <p className="qualification__modal-info">
                        Improved client satisfaction and project approval rates by 25% by effectively translating client needs into technical specifications and delivering tailored coding solutions, ensuring alignment with business objectives and user expectations.
                      </p>
                    </li>

                  </ul>
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
