import React from "react";

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

  const innerAboutContainer = {};
  return (
    <div style={aboutContainer}>
      <div style={innerAboutContainer}>
        <h1>About</h1>
      </div>
    </div>
  );
}
