import React, { useState } from 'react';
import InputController from './InputController';
import Safe from './Safe';
import State from './State'

function DFA() {
    let [shareState, setShareState] = useState([])

    const updateChange = (shareValue) => {
        setShareState(shareValue)
    }

    return(
        <div className="dfaContainer">
            <div className="dfaTitleContainer">
                <div className="dfaTitle">DFA Something</div>
            </div>
            <div className="imgContainer">
                <Safe shareValue={ shareState } />
            </div>
            <div className="stateContainer">
                <State shareValue={ shareState } />
            </div>
            <div className="inputContainer">
                <InputController shareValue={ shareState } updateChange={ updateChange }  />
            </div>
        </div>
    )
}

export default DFA;