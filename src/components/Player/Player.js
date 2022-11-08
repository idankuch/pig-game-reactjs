import PlayerNameTitle from "./PlayerNameTitle";
import PlayerTotalScore from "./PlayerTotalScore";
import PlayerCurrentScore from "./PlayerCurrentScore";
import "./Player.css";

const Player = function (props) {
  return (
    <section className={`player ${props.className}`}>
      <PlayerNameTitle name={props.name}/>
      <PlayerTotalScore totalScore={props.total} />
      <PlayerCurrentScore currentScore={props.current} />
    </section>
  );
};

export default Player;
