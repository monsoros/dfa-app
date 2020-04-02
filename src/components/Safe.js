import React, { useState, useEffect } from 'react';
import GifPlayer from 'react-gif-player';

function Safe(props) {
    let [animate, setAnimate] = useState(props.shareValue)

    useEffect(() => {
        if(props.shareValue) {
            console.log(props.shareValue)
        }
    })

    return (
        <div className="safeContainer">
            <div className="animateContainer">
                <GifPlayer 
                    gif={require("../public/safe_animation/01.gif")}
                    autoplay={true}
                    onTogglePlay={false}
                    width={300} 
                />
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