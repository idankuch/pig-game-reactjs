import React from "react";
import "./Dice.css";

const Dice = function (props) {
  return <img src={props.src} alt="Playing dice" className="dice" />;
};

export default Dice;
