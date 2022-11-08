import "./PlayerCurrentScore.css";

const PlayerCurrentScore = function (props) {
  return (
    <div className="current">
      <p className="current-label">Current</p>
      <p className="current-score" id="current--0">
        {props.currentScore}
      </p>
    </div>
  );
};

export default PlayerCurrentScore;
