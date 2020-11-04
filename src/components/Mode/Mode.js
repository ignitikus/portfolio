import React from "react";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import Brightness3Icon from "@material-ui/icons/Brightness3";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";

export default function Mode({ mode, setMode }) {
  const iconStyle = {
    color: mode ? "black" : "#eee",
    position: "fixed",
    right: "10px",
    top: "10px",
  };

  const backgroundPicture = {
    position: "absolute",
    color: mode ? "black" : "#eee",
    top: "10%",
    right: "10%",
    opacity: "0.1",
  };

  const iconBackgroundStyle = {
    fontSize: "20em",
  };

  return (
    <>
      <div style={iconStyle} onClick={() => setMode(!mode)}>
        {mode ? (
          <WbSunnyIcon fontSize="large" />
        ) : (
          <Brightness3Icon fontSize="large" />
        )}
      </div>
      <div style={backgroundPicture}>
        {mode ? (
          <WbSunnyIcon style={iconBackgroundStyle} />
        ) : (
          <Brightness3Icon style={iconBackgroundStyle} />
        )}
      </div>
    </>
  );
}
