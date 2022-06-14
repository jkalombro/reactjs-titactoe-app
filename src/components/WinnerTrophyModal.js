import React from 'react';
import ReactModal from 'react-modal';
import { useSelector, useDispatch } from 'react-redux';

//actions
import { showHideModals } from '../store/actions/gameActions';

//images
import trophy_img from '../themes/images/trophy.png';
import confetti_img from '../themes/images/confetti.gif';

const WinnerTrophyModal = () => {
    const game_modals = useSelector(state => state.game.game_modals);
    const dispatch = useDispatch();

    const handleCloseModal = () => {
        dispatch(showHideModals(false));
    }

    return (
        <div>
            <ReactModal className="trophy-modal"
                isOpen={game_modals.winnermodal_isShow}
                ariaHideApp={false}
                contentLabel="Trophy Modal">
                <div className="trophy-img-container">
                    <img className="trophy-img" src={trophy_img} alt="" />
                </div>
                <div className="congratulations-text">CONGRATULATIONS! <br /> {game_modals.winner_name} won the Game!</div>
                <div className="close-modal-button"><button>Click anywhere to Close</button></div>
                <div className="confetti-img" onClick={() => handleCloseModal()}>
                    <img src={confetti_img} alt="" />
                </div>
            </ReactModal>
        </div>
    )
}

export default WinnerTrophyModal;
