import React from "react";
import "./PlayerTotalScore.css";

const PlayerTotalScore = function (props) {
  return (
    <p className="score" id="score--0">
      {props.totalScore}
    </p>
  );
};

export default PlayerTotalScore;
