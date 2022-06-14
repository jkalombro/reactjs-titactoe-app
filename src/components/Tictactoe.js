import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

//actions
import { startGame } from '../store/actions/gameActions';

//component imports
import TictactoeItem from './TictactoeItem';
import WinnerTrophyModal from './WinnerTrophyModal';

const Tictactoe = () => {
    const players = useSelector(state => state.game.players);
    const round = useSelector(state => state.game.round);
    const gameboard = useSelector(state => state.game.gameboard);
    const dispatch = useDispatch();

    const handleStartMatch = () => {
        dispatch(startGame(round, gameboard, players, 'MATCH'));
    }

    const handleStartRound = () => {
        dispatch(startGame(round, gameboard, players, 'ROUND'));
    }

    return (
        <div>
            <h3 className="round-text"> {round.current_round > 0 ? 'Round ' + round.current_round : <br />} </h3>
            <h2>{round.round_message}</h2>
            <br />
            <table className="tictactoe-tbl" cellSpacing="0">
                <tbody>
                    <tr>
                        <td className={gameboard[0].tdclass}>
                            <TictactoeItem cellstate={gameboard[0]} />
                        </td>
                        <td className={gameboard[1].tdclass}>
                            <TictactoeItem cellstate={gameboard[1]} />
                        </td>
                        <td className={gameboard[2].tdclass}>
                            <TictactoeItem cellstate={gameboard[2]} />
                        </td>
                    </tr>
                    <tr>
                        <td className={gameboard[3].tdclass}>
                            <TictactoeItem cellstate={gameboard[3]} />
                        </td>
                        <td className={gameboard[4].tdclass}>
                            <TictactoeItem cellstate={gameboard[4]} />
                        </td>
                        <td className={gameboard[5].tdclass}>
                            <TictactoeItem cellstate={gameboard[5]} />
                        </td>
                    </tr>
                    <tr>
                        <td className={gameboard[6].tdclass}>
                            <TictactoeItem cellstate={gameboard[6]} />
                        </td>
                        <td className={gameboard[7].tdclass}>
                            <TictactoeItem cellstate={gameboard[7]} />
                        </td>
                        <td className={gameboard[8].tdclass}>
                            <TictactoeItem cellstate={gameboard[8]} />
                        </td>
                    </tr>
                </tbody>
            </table>
            <br /><br />
            <div className="main-btn">
                {round.round_state === 'STANDBY' ? <button onClick={() => handleStartMatch()}>START MATCH</button> : null}
                {round.round_state === 'ENDROUND' ? <button onClick={() => handleStartRound()}>START NEW ROUND</button> : null}
                {round.round_state === 'ENDMATCH' ? <button onClick={() => handleStartMatch()}>START NEW MATCH</button> : null}
            </div>

            <WinnerTrophyModal />
        </div>
    )
}

export default Tictactoe;