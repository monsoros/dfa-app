import React from 'react';
import InputController from './InputController';

function DFA() {
    return(
        <div className="dfaContainer">
            <div className="dfaTitleContainer">
                <div className="dfaTitle">DFA Something</div>
            </div>
            <div className="imgContainer">
                Image Container
            </div>
            <div className="stateContainer">
                State Container
            </div>
            <div className="inputContainer">
                <InputController />
            </div>
        </div>
    )
}

export default DFA;