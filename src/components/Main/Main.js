import React from "react";
import Typist from "react-typist";
import "../../../node_modules/react-typist/dist/Typist.css";
import "./Main.css";

export default function Main({ mode }) {
  const typistContainer = {
    width: "100%",
    height: `${window.innerHeight}px`,
    backgroundColor: mode ? "#eee" : "black",
    color: mode ? "black" : "#eee",
    transition: "all 2s ease-in-out",
  };

  const typistInnerDiv = {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const typistText = {
    fontSize: window.innerWidth > 600 ? "3em" : "1.5em",
    fontWeight: 500,
  };

  return (
    <div style={typistContainer}>
      <div style={typistInnerDiv}>
        <Typist cursor={{ hideWhenDone: true }}>
          <span style={typistText}>
            Hi! I am <span id="name">Nikolay Kim</span>
          </span>
          <br />
          <span style={typistText}>
            You can call me <span id="nickname">Niko</span>
          </span>
          <br />
          <span style={typistText}> A Full Stack Web Developer</span>
        </Typist>
      </div>
    </div>
  );
}
