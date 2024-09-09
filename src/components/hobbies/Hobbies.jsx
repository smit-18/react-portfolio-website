import React, { useState } from "react";
import "./hobbies.css";

const Hobbies = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="hobbies section" id="hobbies">
      <h2 className="section__title">Hobbies</h2>
      <span className="section__subtitle">How I like to spend my time</span>

      <div className="hobbies__container container grid">
        <div className="hobbies__content">
          <div>
            <i className="uil uil-glass-martini hobbies__icon"></i>
            <h3 className="hobbies__title">
              Wine <br /> Enthusiast
            </h3>
          </div>

          <span className="hobbies__button" onClick={() => toggleTab(1)}>
            View More
            <i className="uil uil-arrow-right hobbies__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 1
                ? "hobbies__modal active-modal"
                : "hobbies__modal"
            }
          >
            <div className="hobbies__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times hobbies__modal-close"
              ></i>

              <h3 className="hobbies__modal-title">Product Designer</h3>
              <p className="hobbies__modal-description">
                Service with more than 3 years of experience.Providing quality
                work to clients and companies.
              </p>

              <ul className="hobbies__modal-hobbies grid">
                <li className="hobbies__modal-hobby">
                  <i className="uil uil-check-circle hobbies__modal-icon"></i>
                  <p className="hobbies__modal-info">
                    I develop the user interface.
                  </p>
                </li>

                <li className="hobbies__modal-hobby">
                  <i className="uil uil-check-circle hobbies__modal-icon"></i>
                  <p className="hobbies__modal-info">Web page development.</p>
                </li>

                <li className="hobbies__modal-hobby">
                  <i className="uil uil-check-circle hobbies__modal-icon"></i>
                  <p className="hobbies__modal-info">
                    I create ux element interactions.
                  </p>
                </li>

                <li className="hobbies__modal-hobby">
                  <i className="uil uil-check-circle hobbies__modal-icon"></i>
                  <p className="hobbies__modal-info">
                    I position your company brand.
                  </p>
                </li>

                <li className="hobbies__modal-hobby">
                  <i className="uil uil-check-circle hobbies__modal-icon"></i>
                  <p className="hobbies__modal-info">
                    Design and mockups of products for companies.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="hobbies__content">
          <div>
            <i className="uil uil-map hobbies__icon"></i>
            <h3 className="hobbies__title">
              Seasoned <br /> Traveller
            </h3>
          </div>

          <span className="hobbies__button" onClick={() => toggleTab(2)}>
            View More
            <i className="uil uil-arrow-right hobbies__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 2
                ? "hobbies__modal active-modal"
                : "hobbies__modal"
            }
          >
            <div className="hobbies__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times hobbies__modal-close"
              ></i>

              <h3 className="hobbies__modal-title">UI/UX Designer</h3>
              <p className="hobbies__modal-description">
                Service with more than 3 years of experience.Providing quality
                work to clients and companies.
              </p>

              <ul className="hobbies__modal-hobbies grid">
                <li className="hobbies__modal-hobby">
                  <i className="uil uil-check-circle hobbies__modal-icon"></i>
                  <p className="hobbies__modal-info">
                    I develop the user interface.
                  </p>
                </li>

                <li className="hobbies__modal-hobby">
                  <i className="uil uil-check-circle hobbies__modal-icon"></i>
                  <p className="hobbies__modal-info">Web page development.</p>
                </li>

                <li className="hobbies__modal-hobby">
                  <i className="uil uil-check-circle hobbies__modal-icon"></i>
                  <p className="hobbies__modal-info">
                    I create ux element interactions.
                  </p>
                </li>

                <li className="hobbies__modal-hobby">
                  <i className="uil uil-check-circle hobbies__modal-icon"></i>
                  <p className="hobbies__modal-info">
                    I position your company brand.
                  </p>
                </li>

                <li className="hobbies__modal-hobby">
                  <i className="uil uil-check-circle hobbies__modal-icon"></i>
                  <p className="hobbies__modal-info">
                    Design and mockups of products for companies.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="hobbies__content">
          <div>
            <i className="uil uil-monitor hobbies__icon"></i>
            <h3 className="hobbies__title">
              Avid <br /> Gamer
            </h3>
          </div>

          <span className="hobbies__button" onClick={() => toggleTab(3)}>
            View More
            <i className="uil uil-arrow-right hobbies__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 3
                ? "hobbies__modal active-modal"
                : "hobbies__modal"
            }
          >
            <div className="hobbies__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times hobbies__modal-close"
              ></i>

              <h3 className="hobbies__modal-title">Visual Designer</h3>
              <p className="hobbies__modal-description">
                Service with more than 3 years of experience.Providing quality
                work to clients and companies.
              </p>

              <ul className="hobbies__modal-hobbies grid">
                <li className="hobbies__modal-hobby">
                  <i className="uil uil-check-circle hobbies__modal-icon"></i>
                  <p className="hobbies__modal-info">
                    I develop the user interface.
                  </p>
                </li>

                <li className="hobbies__modal-hobby">
                  <i className="uil uil-check-circle hobbies__modal-icon"></i>
                  <p className="hobbies__modal-info">Web page development.</p>
                </li>

                <li className="hobbies__modal-hobby">
                  <i className="uil uil-check-circle hobbies__modal-icon"></i>
                  <p className="hobbies__modal-info">
                    I create ux element interactions.
                  </p>
                </li>

                <li className="hobbies__modal-hobby">
                  <i className="uil uil-check-circle hobbies__modal-icon"></i>
                  <p className="hobbies__modal-info">
                    I position your company brand.
                  </p>
                </li>

                <li className="hobbies__modal-hobby">
                  <i className="uil uil-check-circle hobbies__modal-icon"></i>
                  <p className="hobbies__modal-info">
                    Design and mockups of products for companies.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
