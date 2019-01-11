import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import ReactModal from 'react-modal';

//actions
import { showHideModals } from '../actions/gameActions';

//images
import trophy_img from '../themes/images/trophy.png';
import confetti_img from '../themes/images/confetti.gif';

class WinnerTrophyModal extends Component {

    handleCloseModal () {
        this.props.showHideModals(false);
    }

    render() {

        return (
        <div>
            <ReactModal className="trophy-modal"  
            isOpen={this.props.game_modals.winnermodal_isShow} 
            ariaHideApp={false}
            contentLabel="Trophy Modal">
                <div className="trophy-img-container">
                    <img className="trophy-img" src={trophy_img} alt="" />
                </div>
                <div className="congratulations-text">CONGRATULATIONS! <br /> {this.props.game_modals.winner_name} won the Game!</div>
                <div className="close-modal-button"><button onClick={this.handleCloseModal.bind(this)}>CLOSE</button></div>
                <div className="confetti-img">
                    <img src={confetti_img} alt="" />
                </div>
            </ReactModal>
        </div>
        )
    }
}

WinnerTrophyModal.propTypes = {
    showHideModals: propTypes.func,
    game_modals: propTypes.object
}

const mapStateToProps = state => ({
    game_modals: state.game.game_modals
});

export default connect(mapStateToProps, { showHideModals })(WinnerTrophyModal);
