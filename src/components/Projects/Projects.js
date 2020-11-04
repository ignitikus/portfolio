import React from "react";

export default function Projects({ mode }) {
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
  const innerProjectsContainer = {};
  return (
    <div style={projectsContainer}>
      <div style={innerProjectsContainer}>
        <h1>Projects</h1>
      </div>
    </div>
  );
}
