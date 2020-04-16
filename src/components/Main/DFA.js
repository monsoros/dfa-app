import React, { useState, useRef } from 'react';
import InputController from './InputController';
import Safe from './Safe.js';
import State from './State'

function DFA() {
    const [shareState, setShareState] = useState([])
    const [check, setCheck] = useState(["white", "white", "white"])
    const mode = useRef(0)
    const password = useRef(["0", "1", "2"])

    const pressType = useRef()
    const updatePressType = (type) => pressType.current = type
    /* 0 = Only Input
       1 = Undo
       2 = Reset 

    // To see if its input, undo or reset
    useEffect(() => {
        console.log(password)
        updateChange()
    })*/

    const updateChange = (shareValue) => {
        if (pressType.current === 2) {
            mode.current = 0
            setCheck(["white", "white", "white"])
            setShareState(shareValue)
            
        }
        else {
            if (mode.current === 0) {
                if (mode.current === 0 && shareValue.length > 0) {
                    if (shareValue[shareValue.length - 1] === password.current[0]) {
                        setCheck(["green", "white", "white"])
                        mode.current = 1
                    }
                    else {
                        setCheck(["red", "white", "white"])
                        mode.current = 4
                    }
                }
            }
            else if (mode.current === 1) {
                if (shareValue.length > 1 && shareValue[shareValue.length - 2] === password.current[0] && shareValue[shareValue.length - 1] === password.current[1]) {
                    setCheck(["green", "green", "white"])
                    mode.current = 2
                }
                else {
                    setCheck(["red", "white", "white"])
                    mode.current = 4
                }
            }
            else if (mode.current === 2) {
                if (shareValue.length > 2 && shareValue[shareValue.length - 3] === password.current[0] && shareValue[shareValue.length - 2] === password.current[1] && shareValue[shareValue.length - 1] === password.current[2]) {
                    setCheck(["green", "green", "green"])
                    mode.current = 3
                }
                else {
                    setCheck(["red", "white", "white"])
                    mode.current = 4
                }
            }
            else if (mode.current === 3) {
                if (shareValue[shareValue.length - 1] === "1" || shareValue[shareValue.length - 1] === "2" || shareValue[shareValue.length - 1] === "3") {
                    mode.current = 99
                    shareValue[shareValue.length - 1] = "9"
                    shareValue[shareValue.length - 2] = "9"
                }
                else if (shareValue[shareValue.length - 1] === "0") {
                    mode.current = 7
                }
            }
            else if (mode.current === 4) {
                if (shareValue[shareValue.length - 1] === password.current[0]) {
                    setCheck(["green", "white", "white"])
                    mode.current = 1
                }
                else {
                    setCheck(["red", "red", "white"])
                    mode.current = 5
                }
            }
            else if (mode.current === 5) {

                if (shareValue[shareValue.length - 1] === password.current[0]) {
                    setCheck(["green", "white", "white"])
                    mode.current = 1
                }
                else {
                    setCheck(["red", "red", "red"])
                    mode.current = 6
                }
            }
            else if (mode.current === 6) {
                setCheck(["red", "red", "red"])
            }
            else if (mode.current === 99) {
                setCheck(["green", "green", "green"])
            }
            else {
                mode.current++
                if (mode.current === 10) {
                    mode.current = 0
                    let newPassword = [shareValue[shareValue.length - 3], shareValue[shareValue.length - 2], shareValue[shareValue.length - 1]]
                    //updatePassword(newPassword)
                    password.current = newPassword
                }
                setCheck(["white", "white", "white"])
            }
            setShareState(shareValue)
        }
    }

    return (
        <div className="dfaContainer">
            {/*<div className="dfaTitleContainer">
                <div className="dfaTitle">Safe - Deterministic Finite Automata</div>
            </div>*/}
            <div className="imgContainer">
                <Safe shareValue={shareState} password={password.current} check={check} />
            </div>
            <div className="stateContainer">
                <State shareValue={shareState} password={password.current} mode={mode.current} />
            </div>
            <div className="inputContainer">
                <InputController shareValue={shareState} updateChange={updateChange} updatePressType={updatePressType} />
            </div>
            <div className="tipContainer">
                Tips!
            </div>
        </div>
    )
}
export default DFA;