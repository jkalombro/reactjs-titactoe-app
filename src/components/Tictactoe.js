import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';

//component imports
import TictactoeItem from './TictactoeItem';
import WinnerTrophyModal from './WinnerTrophyModal';
import { startGame, showHideModals } from '../actions/gameActions';

class Tictactoe extends Component {

    handleStartMatch(e) {
        this.props.startGame(this.props.round, this.props.gameboard, 'MATCH');
        this.props.showHideModals(true);
    }

    handleStartRound(e) {
        this.props.startGame(this.props.round, this.props.gameboard, 'ROUND');
    }

    render() {
        return (
        <div>
            <h3 className="round-text"> { this.props.round.current_round > 0 ? 'Round ' + this.props.round.current_round: <br/>} </h3>
            <h2>{ this.props.round.round_message}</h2>
            <br />
            <table className="tictactoe-tbl" cellSpacing="0">
                <tbody>
                    <tr>
                        <td className={this.props.gameboard[0].tdclass}>
                            <TictactoeItem cellstate={this.props.gameboard[0]}/>
                        </td>
                        <td className={this.props.gameboard[1].tdclass}>
                            <TictactoeItem cellstate={this.props.gameboard[1]}/>
                        </td>
                        <td className={this.props.gameboard[2].tdclass}>
                            <TictactoeItem cellstate={this.props.gameboard[2]}/>
                        </td>
                    </tr>
                    <tr>
                        <td className={this.props.gameboard[3].tdclass}>
                            <TictactoeItem cellstate={this.props.gameboard[3]}/>
                        </td>
                        <td className={this.props.gameboard[4].tdclass}>
                            <TictactoeItem cellstate={this.props.gameboard[4]}/>
                        </td>
                        <td className={this.props.gameboard[5].tdclass}>
                            <TictactoeItem cellstate={this.props.gameboard[5]}/>
                        </td>
                    </tr>
                    <tr>
                        <td className={this.props.gameboard[6].tdclass}>
                            <TictactoeItem cellstate={this.props.gameboard[6]}/>
                        </td>
                        <td className={this.props.gameboard[7].tdclass}>
                            <TictactoeItem cellstate={this.props.gameboard[7]}/>
                        </td>
                        <td className={this.props.gameboard[8].tdclass}>
                            <TictactoeItem cellstate={this.props.gameboard[8]}/>
                        </td>
                    </tr>
                </tbody>
            </table>
            <br /><br />
            <div className="main-btn">
                { this.props.round.round_state === 'STANDBY' ? <button onClick={this.handleStartMatch.bind(this)}>START MATCH</button>: null}
                { this.props.round.round_state === 'ENDROUND' ? <button onClick={this.handleStartRound.bind(this)}>START NEW ROUND</button>: null}
            </div>

            <WinnerTrophyModal />
        </div>
        )
    }
}

TictactoeItem.propTypes = {
    startGame: propTypes.func,
    showHideModals: propTypes.func,
    game_mode: propTypes.string,
    round: propTypes.object,
    gameboard: propTypes.array
}

const mapStateToProps = state => ({
    game_mode: state.game.game_mode,
    round: state.game.round,
    gameboard: state.game.gameboard
});

export default connect(mapStateToProps, { startGame, showHideModals })(Tictactoe);