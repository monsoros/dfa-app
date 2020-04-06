import React, { useState } from 'react';
import InputController from './InputController';
import Safe from './Safe.js';
import State from './State'

function DFA() {
    let [shareState, setShareState] = useState([])
    let [password, setpassword] = useState(["0","1","2","0"])

    const updateChange = (shareValue) => {
        
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
        if(shareValue.length>3){
            if(shareValue[shareValue.length -4]===password[0]&&shareValue[shareValue.length-3]===password[1]&&shareValue[shareValue.length-2]===password[2]){
                check[0]="green"
                check[1]="green"
                check[2]="green"
                if(shareValue[shareValue.length -1]==="1"||shareValue[shareValue.length -1]==="2"||shareValue[shareValue.length -1]==="3"){
                    setpassword([password[0],password[1],password[2],"0"])
                    shareValue[shareValue.length -1]="9"
                    shareValue[shareValue.length -2]="9"
                }
                if(shareValue[shareValue.length -1]==="0"){
                    setpassword([password[0],password[1],password[2],"1"])

                }
            }
        }
        setShareState(shareValue)
        
    }
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
export default DFA;