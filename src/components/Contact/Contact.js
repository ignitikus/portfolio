import React from "react";

export default function Contact({ mode }) {
  const contactContainer = {
    width: "100%",
    height: `${window.innerHeight}px`,
    backgroundColor: mode ? "#eee" : "black",
    color: mode ? "black" : "#eee",
    transition: "all 2s ease-in-out",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  const innerContactContainer = {};
  return (
    <div style={contactContainer}>
      <div style={innerContactContainer}>
        <h1>Contact</h1>
      </div>
    </div>
  );
}
