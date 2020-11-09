import React from "react";

export default function Footer({ mode }) {
  const projectsFooter = {
    width: "100%",
    height: "60px",
    position: "absolute",
    bottom: `${window.innerHeight * 3 * -1 - 50}px`,
    backgroundColor: mode ? "black" : "#eee",
    color: mode ? "#eee" : "black",
    transition: "all 2s ease-in-out",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const endMessage = {
    position: "absolute",
    bottom: 0,
    right: "20px",
  };
  return (
    <div style={projectsFooter}>
      <h3>Nikolay Kim © {new Date().getFullYear()}</h3>
      {window.innerWidth > 600 ? (
        <h3 style={endMessage}>Thanks for visiting!</h3>
      ) : null}
    </div>
  );
}
