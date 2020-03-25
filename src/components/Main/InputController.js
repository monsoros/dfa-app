import React, {useState} from 'react';

function InputController() {
    let inputLang = ['0', '1', '2', '3']
    let password = []
    let [inputStack, setStack] = useState([])

    const addInput = (event) => {
        setStack([...inputStack, event.target.value])
    }
    const check =()=>{
    }

    return(
        <div className="inputControllerContainer">
            <div className="displayBar">
                <div className="inputLabel">Input Language</div>
                <div className="displayInput">{
                    inputStack.length === 0 ? <i>Your input language display here</i> : 
                    <div>{
                        inputStack.length <=3 ?
                        inputStack
                        :
                        <i>Error</i>
                    }</div>
                }</div>
            </div>
            <div className="inputBar">
                <ul>
                    {
                        inputLang.map((item, index) => {
                            return <li><button onClick={addInput} value={inputLang[index]}>{ inputLang[index] }</button></li>
                        })
                    }
                    <li><button onClick={() => setStack(inputStack.filter((item, index) => index !== inputStack.length-1))}>Undo</button></li>
                    <li><button onClick={() => setStack(inputStack => [])}>Reset</button></li>
                </ul>
            </div>
        </div>
    )
}

export default InputController;