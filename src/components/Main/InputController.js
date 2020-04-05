import React, {useState, useEffect} from 'react';

function InputController(props) {
    let inputLang = ['0', '1', '2', '3']
    let [inputStack, setStack] = useState([])

    useEffect(() => {
        props.updateChange(inputStack)
    })

    const updateInput = (event) => {
        setStack([...inputStack, event.target.value])
    }
 
    return(
        <div className="inputControllerContainer">
            <div className="displayBar">
                <div className="inputLabel">Input Language</div>
                <div className="displayInput">{
                    inputStack.length === 0 ? <i>Your input language display here</i> : 
                        inputStack
                }</div>
            </div>
            <div className="inputBar">
                <ul>
                    {
                        inputLang.map((item, index) => {
                            return <li><button className="inputButt" onClick={updateInput} value={inputLang[index]}>{ inputLang[index] }</button></li>
                        })
                    }
                    <li>
                        <button className="undoButt" onClick={() => setStack(inputStack.filter((item, index) => index !== inputStack.length-1))}>
                            <img width={20} src={require("../../public/icon/undo.png")} alt="undo"></img>
                        </button>
                    </li>
                    <li>
                        <button className="reButt" onClick={() => setStack(inputStack => [])}>
                            <img width={20} src={require("../../public/icon/restart.png")} alt="restart"></img>
                            <div className="labelRe">Restart</div>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default InputController;