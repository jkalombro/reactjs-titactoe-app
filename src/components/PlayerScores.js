import React, { Component } from 'react'
import propTypes from 'prop-types';
import { connect } from 'react-redux';

class PlayerScores extends Component {
  render() {
    return (
      <div className="score-container">
        <div className="score-box-1">
            <h2>{this.props.players[0].name}</h2>
            <h1>{this.props.players[0].score<10 ? '0' + this.props.players[0].score : this.props.players[0].score}</h1>
        </div>
        <div className="score-box-2">
            <h2>{this.props.players[1].name}</h2>
            <h1>{this.props.players[1].score<10 ? '0' + this.props.players[1].score : this.props.players[1].score}</h1>
        </div>
      </div>
    )
  }
}

PlayerScores.propTypes = {
  players: propTypes.array
}

const mapStateToProps = state => ({
  players: state.game.players
});

export default connect(mapStateToProps)(PlayerScores);