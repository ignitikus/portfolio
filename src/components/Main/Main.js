import React, { useEffect, useState } from "react";
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

  return (
    <div style={typistContainer}>
      <div style={typistInnerDiv}>
        <Typist cursor={{ hideWhenDone: true }}>
          <span className="typist-text">
            Hi! I am <span id="name">Nikolay Kim</span>
          </span>
          <br />
          <span className="typist-text">
            You can call me <span id="nickname">Niko</span>
          </span>
          <br />
          <span className="typist-text"> A Full Stack Web Developer</span>
        </Typist>
      </div>
    </div>
  );
}
