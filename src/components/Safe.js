import React, { useState, useEffect } from 'react';

function Safe(props) {
    let [animate, setAnimate] = useState("0")

    useEffect(() => {
        if(props.shareValue) {
            changeAnimate()
        }
    })

    const changeAnimate = () => {
        let inputStr = props.shareValue
        let pathNo = ""
        if (inputStr.length === 0) {
            pathNo = "0"
        } else if (inputStr.length === 1) {
            pathNo = "0" + inputStr[inputStr.length-1]
        } else {
            pathNo = inputStr[inputStr.length-2] + inputStr[inputStr.length-1]
        }
        setAnimate(pathNo)
    }

    return (
        <div className="safeContainer">
            <div className="animateContainer">
                <img width={300} src={require("../public/safe_animation/" + animate + ".gif")} alt="safe"></img>
            </div>
            <div className="passwordContainer">
                <div className="pwLabel">PASSWORD</div>
                <div className="pwNumContainer">
                    <div className="pwNum">0</div>
                    <div className="pwNum">1</div>
                    <div className="pwNum">2</div>
                </div>
            </div>
        </div>
    )
}

export default Safe;