import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal
        isOpen={!!props.selectedOption}
        onRequestClose={props.handleClearOption}
        contentLabel="Selected Color"
        closeTimeoutMS={400}
        className="modal">
        <h3 className="modal__title">You Would Look Great in the</h3>
        {props.selectedOption && <p modal__body>{props.selectedOption}</p>}
        <button className="button" onClick={props.handleClearOption}>Close</button>
    </Modal>
);

export default OptionModal;
