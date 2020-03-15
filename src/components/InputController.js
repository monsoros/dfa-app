import React, {useState} from 'react';

function InputController() {
    let inputLang = ['A', 'B', 'C', 'D', 'E']
    let [inputStack, setStack] = useState([])

    return(
        <div className="inputControllerContainer">
            <div className="displayBar">
                <div className="inputLabel">Input Language</div>
                <div className="displayInput">{
                    inputStack.length == 0 ? <i>Your input language display here</i> : inputStack 
                }</div>
            </div>
            <div className="inputBar">
                <ul>
                    <li><button onClick={() => setStack(inputStack => [inputStack, inputLang[0]])}>Input A</button></li>
                    <li><button onClick={() => setStack(inputStack => [inputStack, inputLang[1]])}>Input B</button></li>
                    <li><button onClick={() => setStack(inputStack => [inputStack, inputLang[2]])}>Input C</button></li>
                    <li><button onClick={() => setStack(inputStack => [inputStack, inputLang[3]])}>Input D</button></li>
                    <li><button onClick={() => setStack(inputStack => [inputStack, inputLang[4]])}>Input E</button></li>
                    <li><button onClick={() => setStack(inputStack => [])}>Reset</button></li>
                </ul>
            </div>
        </div>
    )
}

export default InputController;