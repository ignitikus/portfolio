import React, { useState } from "react";
import fuber from "../../assets/fuber.png";
import piano from "../../assets/piano.png";
import ticTacToe from "../../assets/tic-tac-toe.png";

import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import GitHubIcon from "@material-ui/icons/GitHub";

import "./Project.css";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    outline: "none",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    outline: "none",
    width: window.innerWidth <= 800 ? "90%" : "40%",
    maxHeight: "90%",
    borderRadius: "5px",
  },
}));

const projectsArr = [
  {
    title: "Itsy Bitsy Piano/Soundboard",
    description:
      "Itsy Bitsy Piano is a digital mini piano. Main features are recording and replay. Save feature is available only for registered users. Soundboard features up to 32 programmable midi keys. Deployed on AWS EC2.",
    short: "ReactJS, MongoDB Atlas, NodeJS, Express, AWS EC2",
    source: piano,
    alt: "piano project screenshot",
    test: {
      login: "",
      password: "",
    },
    link: "https://itsy-bitsy-piano.nikokim.com/",
    github:
      "https://github.com/ignitikus/personal-project-CodeImmersives-Term3",
  },
  {
    title: "Fuber",
    description:
      "Fuber is a collaboration project. Make a request for anything (as long as it's legal) or help a stranger. Socket.IO allows low latency communication between clients and backend. Google Maps and geo location are used to display clients' requests in real time.",
    short: "ReactJS, Redux, MongoDB, NodeJS, Express, Socket.IO",
    source: fuber,
    alt: "fuber project screenshot",
    test: {
      login: "test@test.it",
      password: "123",
    },
    link: "https://fuber-fullstack.herokuapp.com/",
    github: "https://github.com/spaik11/fuber-fullstack",
  },
  {
    title: "Tic-Tac-Toe",
    description: "Tic-Tac-Toe game with silly opponent.",
    short: "HTML, CSS, and JavaScript",
    source: ticTacToe,
    alt: "game project screenshot",
    test: {
      login: "",
      password: "",
    },
    link: "https://ignitikus.github.io/tic-tac-toe/index.html",
    github: "https://github.com/ignitikus/tic-tac-toe/",
  },
];

export default function Projects({ mode }) {
  const [open, setOpen] = useState(false);
  const [currentProj, setCurrentProj] = useState(projectsArr[0]);
  const classes = useStyles();

  const projectsContainer = {
    width: "100%",
    height: `${window.innerHeight}px`,
    backgroundColor: mode ? "#eee" : "black",
    color: mode ? "black" : "#eee",
    transition: "all 2s ease-in-out",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const handleOpenModal = (i) => {
    setOpen(true);
    setCurrentProj(projectsArr[i]);
  };

  return (
    <div style={projectsContainer}>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={() => setOpen(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <img
              className="modal-image"
              src={currentProj.source}
              alt={currentProj.alt}
            />
            <div className="card-info">
              <div className="card-title">{currentProj.title}</div>
              <div className="card-short-description">
                Technologies: {currentProj.short}
              </div>
              <hr className="card-divider" />
              <div>{currentProj.description}</div>
              {currentProj.test.login && (
                <>
                  <h4>Test login: {currentProj.test.login}</h4>
                  <h4>Test password:{currentProj.test.password}</h4>
                </>
              )}
            </div>
            <div className="external-links">
              <a
                href={currentProj.link}
                target="_blank"
                rel="noreferrer"
                className="button-link visit-button"
              >
                Visit Website
              </a>
              <a
                href={currentProj.github}
                target="_blank"
                rel="noreferrer"
                className="button-link github-button"
              >
                <GitHubIcon />
              </a>
            </div>
          </div>
        </Fade>
      </Modal>
      <div className="innerProjectsContainer">
        <h1>Projects</h1>
        <div className="imagesContainer">
          {projectsArr.map(({ source, alt }, i) => {
            return (
              <img
                key={i}
                src={source}
                alt={alt}
                className="project-images"
                onClick={() => handleOpenModal(i)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
