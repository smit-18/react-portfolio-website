import React from "react";
import { NonTechnical as Data } from "./Data";

const Soft = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Non-Technical</h3>

      <div className="skills__box">
        {Data.map((skillGroup, idx) => {
          return (
            <div key={idx} className="skills__group">
              {skillGroup.map((skill) => {
                return (
                  <div key={skill.name} className="skills__data">
                    <i className="bx bx-badge-check"></i>
                    <div>
                      <h3 className="skills__name">{skill.name}</h3>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Soft;
