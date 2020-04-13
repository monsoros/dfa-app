import React, { useEffect } from 'react';

function State(props) {
    // This works when state changed
    useEffect(() => {
        if(props.shareValue) {
            // Do something here...
        }
    })

    return (
        <div className="stateDivContainer">
            <img className="stateIMG" src={require("../../public/state/TestState.jpg")} alt="state"></img>
        </div>
    )
}

export default State;