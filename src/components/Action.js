import React from 'react';

const Action = (props) => (
    <div><p></p>
    <button 
    className="big-button"
    onClick={props.handleColorPick}
    disabled = {!props.hasOptions}>
    Choose My Outfit!
    </button>
    <p>{props.subtitle}{props.choice}</p>
</div>
)

export default Action;