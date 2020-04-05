import React, { useState } from 'react';
import InputController from './InputController';
import Safe from './Safe.js';
import State from './State'

function DFA() {
    let [shareState, setShareState] = useState([])

    const updateChange = (shareValue) => {
        setShareState(shareValue)
        if(shareValue[shareValue.length -1]===password[0]){
            check[0]="green"
        }
        if(shareValue.length>1){
            console.log(shareValue)
            if(shareValue[shareValue.length -2]===password[0]&&shareValue[shareValue.length-1]===password[1]){
                check[0]="green"
                check[1]="green"
            }
        }
        if(shareValue.length>2){
            if(shareValue[shareValue.length -3]===password[0]&&shareValue[shareValue.length-2]===password[1]&&shareValue[shareValue.length-1]===password[2]){
                check[0]="green"
                check[1]="green"
                check[2]="green"
            }
        }
        
    }
    var password=["0","1","2"]
    var check=["white","white","white"]
    

    return(
        <div className="dfaContainer">
            <div className="dfaTitleContainer">
                <div className="dfaTitle">DFA Something</div>
            </div>
            <div className="imgContainer">
                <Safe shareValue={ shareState } password={password} check={check}/>
            </div>
            <div className="stateContainer">
                <State shareValue={ shareState } />
            </div>
            <div className="inputContainer">
                <InputController shareValue={ shareState } updateChange={ updateChange }  />
            </div>
            <div className="tipContainer">
                Tips!
            </div>
        </div>
    )
}
//<link rel="stylesheet" href="/css/video-react.css" />
/*<Player
      src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
    />*/
export default DFA;