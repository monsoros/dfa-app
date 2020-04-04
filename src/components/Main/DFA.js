import React from 'react';
import { Player } from 'video-react';
import InputController from './InputController';
import ImgContainer from './ImgContainer';
import StateContainer from './StateContainer';

function DFA() {
    return(
        <div className="dfaContainer">
            <div className="dfaTitleContainer">
                <div className="dfaTitle">DFA Something</div>
            </div>
            <div className="imgContainer">
                <ImgContainer/>
            </div>
            <div className="stateContainer">
            <StateContainer/>
                State Container
            </div>
            <div className="inputContainer">
                <InputController />
            </div>
        </div>
    )
}
//<link rel="stylesheet" href="/css/video-react.css" />
/*<Player
      src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
    />*/
export default DFA;