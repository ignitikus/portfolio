import React from "react";
import headshot from "../../assets/myself2.png";

import "./About.css";

const skillsLearned = [
  {
    skill: "JavaScript",
    percent: 90,
  },
  {
    skill: "ReactJs",
    percent: 80,
  },
  {
    skill: "CSS",
    percent: 75,
  },
  {
    skill: "HTML",
    percent: 80,
  },
  {
    skill: "NodeJS",
    percent: 70,
  },
  {
    skill: "React/Redux",
    percent: 60,
  },
];

const skillsLearning = [
  {
    skill: "C++",
    percent: 10,
  },
  {
    skill: "Python",
    percent: 35,
  },
  {
    skill: "GraphQL",
    percent: 25,
  },
  {
    skill: "Photoshop",
    percent: 15,
  },
  {
    skill: "TensorFlow",
    percent: 10,
  },
];

export default function About({ mode }) {
  const aboutContainer = {
    width: "100%",
    height: `${window.innerHeight}px`,
    backgroundColor: mode ? "#eee" : "black",
    color: mode ? "black" : "#eee",
    transition: "all 2s ease-in-out",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const progressDiv = {
    backgroundColor: mode ? "#D7D7D7" : "#eee",
    color: "black",
    padding: "10px",
    borderRadius: "5px 0 0 5px ",
    margin: "5px 0",
    transition: "all 2s ease",
    width: "5em",
    fontWeight: "bolder",
  };

  const skillDiv = {
    display: "flex",
    alignItems: "center",
    width: "100%",
  };

  const percentNum = {
    paddingLeft: "5px",
  };

  const percentBar = (percent) => {
    const progress = {
      width: "15em",
      backgroundColor: mode ? "#D7D7D7" : "#eee",
      color: mode ? "#eee" : "black",
      padding: "10px",
      borderRadius: "0 5px 5px 0",
      margin: "5px 0",
      transition: "all 2s ease",
    };

    const progressBar = {
      backgroundColor: mode ? "#5f5f5f" : "black",
      paddingRight: `${percent * 0.15}em`,
      transition: "all 2s ease",
    };

    return (
      <div style={progress}>
        <span style={progressBar}>&nbsp;</span>
      </div>
    );
  };

  return (
    <div style={aboutContainer}>
      <div className="innerAboutContainer">
        <h1>About Me</h1>
        <div className="about-description">
          <div className="photo-description-container">
            <div>
              <img src={headshot} alt="my headshot" className="headshot" />
              <h2 className="h2-under-picture">Hey! It's me!</h2>
            </div>
            <div className="about-me">
              <div className="about-me-p">
                I'm a former U.S Air Force Staff Sergeant and current Full-Stack
                Web Developer from NYC. Fluent in Russian and English, plus
                survival Japanese. Strong work ethic in team or individual
                settings to deliver successful product. Not afraid of challenge
                or new tech.
              </div>
              <h4>
                Checkout my resume:{" "}
                <a
                  href="https://ignitikus.github.io/resume/"
                  target="_blank"
                  rel="noreferrer"
                  className="resume-a-link"
                >
                  click here to open in new tab
                </a>
              </h4>
            </div>
          </div>
        </div>
        <div className="skills-container">
          <div>
            <h3 className="skills-h3">What I Know:</h3>
            {skillsLearned
              .sort((a, b) => b.percent - a.percent)
              .map(({ skill, percent }) => {
                return (
                  <div key={skill} style={skillDiv}>
                    <div style={progressDiv}>{skill}</div>
                    <div>{percentBar(percent)}</div>
                    <div style={percentNum}>{percent}%</div>
                  </div>
                );
              })}
          </div>
          <div>
            <h3 className="skills-h3">What I'm learning:</h3>
            {skillsLearning
              .sort((a, b) => b.percent - a.percent)
              .map(({ skill, percent }) => {
                return (
                  <div key={skill} style={skillDiv}>
                    <div style={progressDiv}>{skill}</div>
                    <div>{percentBar(percent)}</div>
                    <div style={percentNum}>{percent}%</div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}
