import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/profile-img.jpeg";
import langIcon from "../../assets/language.png";
import projectIcon from "../../assets/project.png";
import schoolIcon from "../../assets/school.png";
import { useState } from "react";

const About = () => {
  const [active, setActive] = useState("languages");
  return (
    <div className="about" id="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I'm a software developer student with a passion for building
              innovative and user-friendly applications. I have a solid
              foundation in software practices and with hands-on experience in
              softwaredevelopment practices and agile methodologies.
            </p>
            <p>
              I have background in computer science and a keen eye for detail,
              I'm always looking for ways to improve my skills and I yearn to
              grow within a fast-paced startup or an enterprise as a continuous
              learner.
            </p>
          </div>
        </div>
      </div>

      <div className="feature-container">
        {/* Feature Cards */}
        <div className="feature">
          <div
            className={`feature-card ${active === "languages" ? "active" : ""}`}
            onClick={() => setActive("languages")}
          >
            <img src={langIcon} alt="Languages" />
            <h4>Languages</h4>
            <p>Html, CSS, JavaScript.....</p>
          </div>

          <div
            className={`feature-card ${active === "education" ? "active" : ""}`}
            onClick={() => setActive("education")}
          >
            <img src={schoolIcon} alt="Education" />
            <h4>Education</h4>
            <p>BSC in Computer Science...</p>
          </div>

          <div
            className={`feature-card ${active === "projects" ? "active" : ""}`}
            onClick={() => setActive("projects")}
          >
            <img src={projectIcon} alt="Projects" />
            <h4>Projects</h4>
            <p>Built more than 5 projects</p>
          </div>
        </div>

        <div className="feature-content">
          {active === "languages" && (
            <div className="about-skill">
              <h2>✨ Programming Skills</h2>
              <div className="skills-list">
                <div className="frontend">
                  <h4>Frontend:</h4>
                  <p>HTML, CSS, JavaScript, React, AngularJs</p>
                </div>
                <div className="backend">
                  <h4>Backend :</h4>
                  <p>NodeJs, ExpressJs</p>
                </div>
                <div className="db">
                  <h4>Database:</h4>
                  <p>MySQL, MongoDB</p>
                </div>
                <div className="softwares">
                  <h4>Softwares:</h4>
                  <p>Git, Docker, Jira,Linux</p>
                </div>
              </div>
            </div>
          )}
          {active === "education" && (
            <div className="school-section">
              <div>
                <h2>Education</h2>
                <p>
                  🎓 B.Sc in Computer Science from Kwame Nkrumah University of
                  Science and Technology(KNUST)
                </p>
                <p>From January 2021 to June 2024</p>
                <p>
                  <h3>Relevant Courses:</h3> Data Structures and algorithms, Web
                  Technologies
                </p>
              </div>
              <div>
                <p>🎓 Masters degree in Software Engineering at JUNIA ISEN</p>
                <p>From January 2023 to Current</p>
                <p>
                  <h3>Relevant Courses:</h3> Docker, Agile Methodologies,
                  Databases, Web Technologies
                </p>
              </div>
            </div>
          )}
          {active === "projects" && (
            <div className="projects">
              <p>
                🚀 Built more than 5 projects, including Portfolio, E-commerce
                App, etc.
              </p>
              <a href="https://github.com/BazeJessica/"><button >Explore projects</button></a>
            </div>
          )}
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>1+</h1>
          <p>Years of Experience</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>5+</h1>
          <p>Project Completed</p>
        </div>
      </div>
    </div>
  );
};

export default About;
