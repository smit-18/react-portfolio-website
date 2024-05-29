import React from "react";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i className="bx bx-briefcase-alt about__icon"></i>
        <h3 className="about__title">Completed</h3>
        <span className="about__subtitle">10+ Projects</span>
      </div>

      <div className="about__box">
        <i className="bx bx-award about__icon"></i>
        <h3 className="about__title">Skills</h3>
        <span className="about__subtitle">Technical & PM</span>
      </div>

      <div className="about__box">
        <i className="bx bx-compass about__icon"></i>
        <h3 className="about__title">Interests</h3>
        <span className="about__subtitle">Tech & Innovation</span>
      </div>
    </div>
  );
};

export default Info;
