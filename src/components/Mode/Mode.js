import React, { useEffect, useState } from "react";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import Brightness3Icon from "@material-ui/icons/Brightness3";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";

import "./Mode.css";

export default function Mode({ mode, setMode }) {
  const [currentHeight, setCurrentHeight] = useState(0);

  useEffect(() => {
    setCurrentHeight(window.scrollY);

    window.addEventListener("scroll", (event) => {
      setCurrentHeight(window.scrollY);
    });
  }, [currentHeight]);

  const arrowContainer = {
    backgroundColor: "#D7D7D7",
    width: "3em",
    height: "3em",
    position: "fixed",
    top: `${window.innerHeight / 2}px`,
    right: "10px",
    transition: "all 2s ease",
    borderRadius: "50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  const arrowStyle = {
    color: "black",
    transition: "all 2s ease",
    fontSize: "2em",
  };

  const iconStyle = {
    color: mode ? "black" : "#eee",
    position: "fixed",
    right: "10px",
    top: "10px",
  };

  const backgroundPicture = {
    position: "fixed",
    color: mode ? "black" : "#eee",
    top: "10%",
    right: "10%",
    opacity: "0.1",
  };

  const iconBackgroundStyle = {
    fontSize: "20em",
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScrollToBottom = () => {
    if (currentHeight < window.innerHeight) {
      window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth",
      });
    } else if (currentHeight < window.innerHeight * 2) {
      window.scrollTo({
        top: window.innerHeight * 2,
        behavior: "smooth",
      });
    } else {
      window.scrollTo({
        top: window.innerHeight * 3 + 100,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <div style={iconStyle} onClick={() => setMode(!mode)}>
        {mode ? (
          <WbSunnyIcon fontSize="large" className="buttonOnHover" />
        ) : (
          <Brightness3Icon fontSize="large" className="buttonOnHover" />
        )}
      </div>
      <div style={backgroundPicture} className="backgroundPicture">
        {mode ? (
          <WbSunnyIcon style={iconBackgroundStyle} />
        ) : (
          <Brightness3Icon style={iconBackgroundStyle} />
        )}
      </div>
      <div style={arrowContainer}>
        {currentHeight <= window.innerHeight * 3 ? (
          <ArrowDownwardIcon
            style={arrowStyle}
            className="buttonOnHover"
            onClick={handleScrollToBottom}
          />
        ) : (
          <ArrowUpwardIcon
            style={arrowStyle}
            className="buttonOnHover"
            onClick={handleScrollToTop}
          />
        )}
      </div>
    </>
  );
}
