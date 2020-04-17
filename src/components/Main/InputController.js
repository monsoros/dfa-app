import React, {useState, useEffect, useRef} from 'react';

function InputController(props) {
    let inputLang = ['0', '1', '2', '3']
    let [inputStack, setStack] = useState([])
    let [type, setType] = useState()
    const updateChange = useRef(props.updateChange)
    const updatePressType = useRef(props.updatePressType)

    useEffect(() => {
        updateChange.current(inputStack)
        updatePressType.current(type)
    }, [inputStack, type])

    const updateInput = (event) => {
        setStack([...inputStack, event.target.value])
        setType(0)
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
                        <button id="resetButton" className="reButt" onClick={() => {setStack(inputStack => []); setType(2) }}>
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