import React from "react";
import { Technical as Data } from "./Data";

const Technical = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Technical</h3>

      <div className="skills__box">
        {Data.map((skillGroup) => {
          return (
            <div className="skills__group">
              {skillGroup.map((skill) => {
                return (
                  <div className="skills__data">
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

export default Technical;
