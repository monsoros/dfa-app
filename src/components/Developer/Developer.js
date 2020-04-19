import React from 'react';

function Developer() {
    return(
        <div className="devContainer">
            <h1><b>Developers</b></h1>
            <div className="liDevContainer">
                <div className="devProf">
                    <img src={require("../../public/devs/gene.jpg")} alt="gene.jpg" className="devPic"></img>
                    <div className="devName">
                        <p>Jiraphat Lertpipitkul</p>
                        <p>60010140</p>
                    </div>
                </div>
                <div className="devProf">
                    <img src={require("../../public/devs/tua.png")} alt="tua.png" className="devPic"></img>
                    <div className="devName">
                        <p>Jirayu Aowcharoen</p>
                        <p>60010154</p>
                    </div>
                </div>
                <div className="devProf">
                    <img src={require("../../public/devs/tontey.jpeg")} alt="tontey.jpg" className="devPic"></img>
                    <div className="devName">
                        <p>Pitawat Chaivutinun</p>
                        <p>60010714</p>
                    </div>
                </div>
                <div className="devProf">
                    <img src={require("../../public/devs/pose.jpg")} alt="pose.jpg" className="devPic"></img>
                    <div className="devName">
                        <p>Sedsakol Kamolchote</p>
                        <p>60011008</p>
                    </div>
                </div>
                <div className="devProf">
                    <img src={require("../../public/devs/mon.jpg")} alt="mon.jpg" className="devPic"></img>
                    <div className="devName">
                        <p>Soros Seingpairod</p>
                        <p>60011121</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Developer;