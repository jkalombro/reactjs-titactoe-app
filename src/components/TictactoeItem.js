import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

//actions
import { updateCellMark, updateRoundStatus } from '../store/actions/gameActions';

//images
import xicon from '../themes/images/x.png';
import oicon from '../themes/images/o.png';

const TictactoeItem = ({ cellstate }) => {
  const players = useSelector(state => state.game.players);
  const round = useSelector(state => state.game.round);
  const gameboard = useSelector(state => state.game.gameboard);
  const dispatch = useDispatch();

  const handleClick = () => {
    if (round.round_state === "STANDBY") {
      alert("Click START MATCH to start the game.");
    } else if (round.round_state === "ENDROUND") {
      alert("Click NEXT ROUND to start the new round.");
    } else if (round.round_state === "ENDGAME") {
      alert("Click NEW MATCH to start a new match.");
    } else {
      dispatch(updateCellMark(round, gameboard, cellstate.cellid));
      dispatch(updateRoundStatus(round, gameboard, players, cellstate.cellid));
    }
  }

  const GetCell = () => {
    if (cellstate.current_mark === "x") {
      return (
        <div>
          <img className="cell-mark-img" src={xicon} alt="" />
        </div>
      )
    } else if (cellstate.current_mark === "o") {
      return (
        <div className="cell-mark-img">
          <img className="cell-mark-img" src={oicon} alt="" />
        </div>
      )
    } else {
      return (
        <div>
          <button className="board-btn" onClick={() => handleClick()} />
        </div>
      )
    }
  }

  return (
    <>{GetCell()}</>
  )
}

export default TictactoeItem;