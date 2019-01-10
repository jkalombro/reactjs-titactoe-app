import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import ReactModal from 'react-modal';

//actions
import { showHideModals } from '../actions/gameActions';

//images
import trophy_img from '../themes/images/trophy.png';

class WinnerTrophyModal extends Component {

    handleCloseModal () {
        this.props.showHideModals(false);
    }

    render() {

        console.log("Modal was called!");

        return (
        <div>
            <ReactModal 
            isOpen={this.props.game_modals.winnermodal_isShow} 
            ariaHideApp={false}
            contentLabel="Minimal Modal Example">
            <h1>MY MODAL</h1>
            <img src={trophy_img} alt="" />
            <button onClick={this.handleCloseModal.bind(this)}>Close Modal</button>
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
