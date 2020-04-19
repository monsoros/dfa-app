import React, { useState, useRef, useEffect } from 'react';
import InputController from './InputController';
import Safe from './Safe.js';
import State from './State';

import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import 'animate.css';

function DFA() {
    const [shareState, setShareState] = useState([])
    const [check, setCheck] = useState(["white", "white", "white"])
    const mode = useRef(0)
    const password = useRef(["0", "1", "2"])
    const [pressType, setPressType] = useState()
    const updatePressType = (type) => setPressType(type)

    useEffect(() => {
        if (pressType === 2) {
            mode.current = 0
            setCheck(["white", "white", "white"])
            setShareState([])
        }
    }, [pressType])

    const updateChange = (shareValue, ptype) => {
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
            setShareState(shareValue)
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
            setShareState(shareValue)
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
            setShareState(shareValue)
        }
        else if (mode.current === 3) {
            if (shareValue[shareValue.length - 1] === "1" || shareValue[shareValue.length - 1] === "2" || shareValue[shareValue.length - 1] === "3") {
                mode.current = 99
            }
            else if (shareValue[shareValue.length - 1] === "0") {
                mode.current = 7
            }
            setShareState(shareValue)
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
            setShareState(shareValue)
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
            setShareState(shareValue)
        }
        else if (mode.current === 6) {
            setCheck(["red", "red", "red"])
            setShareState(shareValue)
            if (ptype === 0) {
                store.addNotification({
                    title: 'You are in trap state.',
                    message: 'Click restart to start over.',
                    type: 'warning',                         
                    container: 'top-right',                
                    animationIn: ["animated", "fadeIn"],     
                    animationOut: ["animated", "fadeOut"], 
                    dismiss: {
                      duration: 5000 
                    }
                })
            }
        }
        else if (mode.current === 99) {
            setCheck(["green", "green", "green"])
            if (ptype === 0) {
                store.addNotification({
                    title: 'You are in final state.',
                    message: 'Click restart to start over.',
                    type: 'default',                         
                    container: 'top-right',                
                    animationIn: ["animated", "fadeIn"],     
                    animationOut: ["animated", "fadeOut"],   
                    dismiss: {
                    duration: 5000 
                    }
                })
            }
        }
        else {
            mode.current++
            if (mode.current === 10) {
                mode.current = 0
                let newPassword = [shareValue[shareValue.length - 3], shareValue[shareValue.length - 2], shareValue[shareValue.length - 1]]
                password.current = newPassword
            }
            setCheck(["white", "white", "white"])
            setShareState(shareValue)
        }
    }
    return (
        <div className="dfaContainer">
            <div className="imgContainer">
                <Safe shareValue={shareState} password={password.current} check={check} mode={mode.current}/>
            </div>
            <div className="stateContainer">
                <State shareValue={shareState} password={password.current} mode={mode.current} />
            </div>
            <div className="inputContainer">
                <InputController shareValue={shareState} updateChange={updateChange} updatePressType={updatePressType} />
            </div>
            <div className="tipContainer">
                <div>Toosafe  is the responsive website simulate the vault by using the DFA model as a password detection. The objective is to apply DFA in real-world problems, so we can look at the whole picture of DFA more clearly.</div>
            </div>
        </div>
    )
}
export default DFA;