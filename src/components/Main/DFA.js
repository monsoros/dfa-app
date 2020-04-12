import React, { useState } from 'react';
import InputController from './InputController';
import Safe from './Safe.js';
import State from './State'

function DFA() {
    let [shareState, setShareState] = useState([])
    let [mode, setMode] = useState(0)
    let [password, setpassword] = useState(["0", "1", "2"])
    let [check, setCheck] = useState(["white", "white", "white"])

    const updateChange = (shareValue) => {
        
        if (mode === 0) {
            if (shareValue[shareValue.length - 1] === password[0]) {
                setCheck(["green", "white", "white"])
            }
            else if (shareValue.length > 1) {
                if (shareValue[shareValue.length - 2] === password[0] && shareValue[shareValue.length - 1] === password[1]) {
                    setCheck(["green", "green", "white"])
                }
                if (shareValue.length > 2) {
                    if (shareValue[shareValue.length - 3] === password[0] && shareValue[shareValue.length - 2] === password[1] && shareValue[shareValue.length - 1] === password[2]) {
                        setCheck(["green", "green", "green"])
                        setMode(mode+1)
                        console.log(mode)
                    }
                    else if (shareValue[shareValue.length - 2] === password[0] && shareValue[shareValue.length - 1] === password[1]) {
                        setCheck(["green", "green", "white"])
                    }
                    else {
                        setCheck(["white", "white", "white"])
                    }
                }
                else {
                    setCheck(["white", "white", "white"])
                }
            }


            setShareState(shareValue)
        }
        else if (mode === 1) {
            setCheck(["green", "green","green"])

            if (shareValue[shareValue.length - 1] === "1" || shareValue[shareValue.length - 1] === "2" || shareValue[shareValue.length - 1] === "3") {
                setMode(6)
                shareValue[shareValue.length - 1] = "9"
                shareValue[shareValue.length - 2] = "9"
            }
            if (shareValue[shareValue.length - 1] === "0") {
                setMode(2)
            }
            setShareState(shareValue)

        }
        else if (mode === 6) {
            setCheck(["green", "green", "green"])
        }
        else {
            setMode(mode + 1)
            if (mode === 5) {
                setMode(0)
                setpassword([shareValue[shareValue.length - 3], shareValue[shareValue.length - 2], shareValue[shareValue.length - 1]])
            }
            setCheck(["white", "white", "white"])
            setShareState(shareValue)
        }
    }

    return (
        <div className="dfaContainer">
            <div className="dfaTitleContainer">
                <div className="dfaTitle">DFA Something</div>
            </div>
            <div className="imgContainer">
                <Safe shareValue={shareState} password={password} check={check} />
            </div>
            <div className="stateContainer">
                <State shareValue={shareState} />
            </div>
            <div className="inputContainer">
                <InputController shareValue={shareState} updateChange={updateChange} />
            </div>
            <div className="tipContainer">
                Tips!
            </div>
        </div>
    )
}
export default DFA;