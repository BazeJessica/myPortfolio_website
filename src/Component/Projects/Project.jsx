import React from "react";
import "./Project.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import project_data from "../../assets/services_data";
import arrow_icon from "../../assets/arrow_icon.svg";

const Project = () => {
  return (
    <div className="project" id="projects">
      <div className="project-title">
        <h1>My Projects</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="project-container">
        {project_data.map((project, index) => {
          return (
            <div className="project-format" key={index}>
              <h3>{project.s_no}</h3>
              <h2>{project.s_name}</h2>
              <p>{project.s_desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Project;
