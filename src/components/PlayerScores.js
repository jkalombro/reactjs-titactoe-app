import React from 'react'
import { useSelector } from "react-redux";

const PlayerScores = () => {
  const players = useSelector(state => state.game.players);

  return (
    <div className="score-container">
      <div className="score-box-1">
          <h2>{players[0].name}</h2>
          <h1>{players[0].score<10 ? '0' + players[0].score : players[0].score}</h1>
      </div>
      <div className="score-box-2">
          <h2>{players[1].name}</h2>
          <h1>{players[1].score<10 ? '0' + players[1].score : players[1].score}</h1>
      </div>
    </div>
  )
}

export default PlayerScores;