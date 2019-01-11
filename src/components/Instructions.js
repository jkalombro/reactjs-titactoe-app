import React, { Component } from 'react'

class Instructions extends Component {
  render() {
    return (
      <div className="instructions-container">
        <h1>Instructions</h1>
        <ol>
            <li>This game is a turn-based, 2 player game.</li>
            <li>Player 1 = <strong>X</strong> and Player 2 = <strong>O</strong></li>
            <li>To start a match, click the <strong>START MATCH</strong> button.</li>
            <li>In each turn, each player will mark 1 cell in 3x3 table.</li>
            <li>The player who succeeds in placing three of their marks in a horizontal, vertical or diagonal row gains 1 point.</li>
            <li>After each round, click <strong> START NEW ROUND</strong> button to proceed to next round.</li>
            <li>The first player who gets 10 points will win the game and will receive something in the end.</li>
            <li>Enjoy playing :)</li>
        </ol>
      </div>
    )
  }
}

export default Instructions;
