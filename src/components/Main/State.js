import React, { useEffect } from 'react';

function State(props) {
    // This works when state changed
    useEffect(() => {
        if(props.shareValue) {
            changeState()
        }
    })
    const changeState = () => {
        /*let inputStr = props.shareValue
        let pathNo = ""
        if (inputStr.length === 0) {
            pathNo = "0"
        } 
        else if (inputStr.length === 1) {
            pathNo = "0" + inputStr[inputStr.length - 1]
        } 
        else if (inputStr.length === 2) {
            pathNo = inputStr[inputStr.length - 2] + inputStr[inputStr.length - 1];
        } 
        else {
            if (inputStr[inputStr.length - 1] === inputStr[inputStr.length - 2] && inputStr[inputStr.length - 2] === inputStr[inputStr.length - 3]) {
                if (inputStr.length %2===1) { 
                    pathNo = inputStr[inputStr.length - 2] + inputStr[inputStr.length - 1];  
                }
                else{
                    pathNo = inputStr[inputStr.length - 2] + inputStr[inputStr.length - 1];
                    pathNo = pathNo+"_2";
                }

            }
            else{
                pathNo = inputStr[inputStr.length - 2] + inputStr[inputStr.length - 1];
            }
        }

        setAnimate(pathNo);*/
    }

    return (
        <div className="stateDivContainer">
            <img className="stateIMG" src={require("../../public/state/"+props.password[0]+props.password[1]+props.password[2]+"/"+props.mode+".jpg")} ></img>
        </div>
    )
}

export default State;
