import React from "react";

export default function Footer({ mode }) {
  console.log(new Date().getFullYear());
  const projectsFooter = {
    width: "100%",
    height: "50px",
    position: "absolute",
    bottom: `${window.innerHeight * 3 * -1 - 50}px`,
    backgroundColor: mode ? "black" : "#eee",
    color: mode ? "#eee" : "black",
    transition: "all 2s ease-in-out",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  return (
    <div style={projectsFooter}>
      <div>Nikolay Kim © {new Date().getFullYear()}</div>
    </div>
  );
}
