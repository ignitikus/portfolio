import React, { useState } from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import "./Contact.css";

export default function Contact({ mode }) {
  const [emailSubject, setEmailSubject] = useState("");
  const [emailBody, setEmailBody] = useState("");

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

  const inputSubject = {
    width: "30%",
    height: "40px",
    borderRadius: "5px",
    border: "none",
    margin: "10px",
    padding: "10px",
    outline: "none",
    backgroundColor: mode ? "white" : "#181818",
    color: mode ? "black" : "#eee",
    transition: "all 2s ease",
  };

  const emailTextArea = {
    width: "30%",
    borderRadius: "5px",
    border: "none",
    margin: "10px",
    padding: "10px",
    outline: "none",
    backgroundColor: mode ? "white" : "#181818",
    color: mode ? "black" : "#eee",
    transition: "all 2s ease",
  };

  const submitButtonLink = {
    backgroundColor: mode ? "white" : "#181818",
    color: mode ? "black" : "#eee",
    transition: "all 2s ease",
    textDecoration: "none",
    borderRadius: "5px",
    padding: "20px",
  };

  const contactIcons = {
    fontSize: "4em",
    color: mode ? "black" : "#eee",
    transition: "all 2s ease",
    margin: "0 20px",
  };

  const handleInputChange = (e) => {
    switch (e.target.name) {
      case "subject":
        setEmailSubject(e.target.value);
        break;
      case "body":
        setEmailBody(e.target.value);
        break;
      default:
        break;
    }
  };

  return (
    <div style={contactContainer}>
      <div className="innerContactContainer">
        <h1 className="h1-header">Contact Me</h1>
        <div>
          <div className="email-composer">
            <input
              type="text"
              placeholder="Subject goes here..."
              style={inputSubject}
              onChange={(e) => handleInputChange(e)}
              value={emailSubject}
              name="subject"
            />
            <textarea
              placeholder="Type your email here..."
              cols="30"
              rows="10"
              style={emailTextArea}
              onChange={(e) => handleInputChange(e)}
              value={emailBody}
              name="body"
            ></textarea>
            <a
              href={`mailto:nikolay.kim@codeimmersives.com?subject=${emailSubject}&body=${emailBody}`}
              style={submitButtonLink}
              className="submit-button-link"
            >
              Submit
            </a>
            <div className="quick-links">
              <a
                href="https://www.linkedin.com/in/nikolay-kim-392234aa"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedInIcon style={contactIcons} />
              </a>
              <a
                href="https://github.com/ignitikus"
                target="_blank"
                rel="noreferrer"
              >
                <GitHubIcon style={contactIcons} />
              </a>
              <a
                href="mailto:nikolay.kim@codeimmersives.com"
                target="_blank"
                rel="noreferrer"
              >
                <AlternateEmailIcon style={contactIcons} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
