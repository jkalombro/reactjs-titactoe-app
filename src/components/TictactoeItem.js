import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateCellMark, updateRoundStatus } from '../actions/gameActions';

//images
import xicon from '../themes/images/x.png';
import oicon from '../themes/images/o.png';

class TictactoeItem extends Component {
  handleClick(e) {
    if(this.props.round.round_state === "STANDBY") {
      alert("Click START MATCH to start the game.");
    }else if(this.props.round.round_state === "ENDROUND"){
      alert("Click NEXT ROUND to start the new round.");
    }else if(this.props.round.round_state === "ENDGAME"){
      alert("Click NEW MATCH to start a new match.");
    }else{
      this.props.updateCellMark(this.props.round, this.props.gameboard, this.props.cellstate.cellid);
      this.props.updateRoundStatus(this.props.round, this.props.gameboard, this.props.players, this.props.cellstate.cellid);
    }
  }

  render() {
    const cell = this.props.cellstate;

    if(cell.current_mark === "x") {
        return (
            <div>
              <img className="cell-mark-img" src={xicon} alt="" />
            </div>
          )
    }else if(cell.current_mark === "o"){
        return (
            <div className="cell-mark-img">
              <img className="cell-mark-img" src={oicon} alt="" />
            </div>
          )
    }else{
      return (
        <div>
          <button className="board-btn" onClick={this.handleClick.bind(this)} />
        </div>
      )
    }
  }
}

TictactoeItem.propTypes = {
  updateCellMark: propTypes.func,
  updateRoundStatus: propTypes.func,
  game_mode: propTypes.string,
  players: propTypes.array,
  round: propTypes.object,
  gameboard: propTypes.array
}

const mapStateToProps = state => ({
  game_mode: state.game.game_mode,
  players: state.game.players,
  round: state.game.round,
  gameboard: state.game.gameboard
});

export default connect(mapStateToProps, { updateCellMark, updateRoundStatus })(TictactoeItem);