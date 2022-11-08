import React from "react";
import Button from "../Button/Button";
import "./Modal.css";

function Modal(props) {

  if (props.show){
    return (
      <div className="modal">
        <p className="message">Player {props.winnerName} won the game!</p>
        <Button className={"btn btn--winner"} onClick={props.onClick}>Okay</Button>
      </div>
  )
  }
  else{
    return null
  }
}

export default Modal;
