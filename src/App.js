import React, { useEffect, useState } from "react";
import Board from "./components/UI/Board/Board";
import Button from "./components/UI/Button/Button";
import Modal from "./components/UI/Modal/Modal";
import Player from "./components/Player/Player";
import Dice from "./components/Dice/Dice";
import "./App.css";

function App() {

  const [totalScore, setTotalScore] = useState([0, 0]); 
  const [currentScore, setCurrentScore] = useState([0, 0]);
  const [activePlayer, setActivePlayer] = useState(0);
  const [dice, setDice] = useState("");
  const [showWinner, setShowWinner] = useState(false);
  let player1, player2 = "";

//   useEffect(()=> {player1 = prompt("Enter Player 1 name");
//   player2 = prompt("Enter Player 2 name");
//   console.log(player1,player2);
// },[])

  //check for winning condition, saves the score and change active player
  function holdScore() {
    totalScore[activePlayer] + currentScore[activePlayer] >=10 ? setShowWinner(true) : changePlayer(); //winning condition
    activePlayer === 0
      ? setTotalScore([
          currentScore[activePlayer] + totalScore[activePlayer],
          totalScore[1],
        ])
      : setTotalScore([
          totalScore[0],
          currentScore[activePlayer] + totalScore[activePlayer],
        ]);
    //VERY UGLY TERNARY NEED TO REFACTOR....
    
  }

  //create new dice value and sums it to previous values, if rolled 1 change active player
  function rollDice() {
    const roll = Math.trunc(Math.random() * 6) + 1;
    setDice(`./img/dice-${roll}.png`);
    roll === 1
      ? changePlayer()
      : activePlayer === 0
      ? setCurrentScore([roll + currentScore[activePlayer], 0])
      : setCurrentScore([0, roll + currentScore[activePlayer]]);
    //VERY UGLY TERNARY NEED TO REFACTOR....
  }

  //new game button
  function reset() {
    setTotalScore([0, 0]);
    setCurrentScore([0, 0]);
    changePlayer();
  }

  //change active player
  const changePlayer = function () {
    activePlayer === 1 ? setActivePlayer(0) : setActivePlayer(1);
    setCurrentScore([0, 0]);
  };

const closeWinnerMessage = function (){
  setShowWinner(false);
  reset();
}
console.log(player1, player2);
  return (
    <Board>
      <Button className={"btn btn--new"} onClick={reset}>
        New game
      </Button>
      <Dice src={dice} />
      <Button className={"btn btn--roll"} onClick={rollDice}>
        Roll dice
      </Button>
      <Button className={"btn btn--hold"} onClick={holdScore}>
        Hold
      </Button>
      <Player
        className={activePlayer === 0 ? "player--active" : ""}
        name={player1}
        total={totalScore[0]}
        current={currentScore[0]}
      />
      <Player
        className={activePlayer === 1 ? "player--active" : ""}
        name={player2}
        total={totalScore[1]}
        current={currentScore[1]}
      />
       <Modal show={showWinner} winnerName={activePlayer} onClick={closeWinnerMessage}/>
    </Board>
  );
}

export default App;
