import React, {useState} from 'react';
import '../css/simple-counter.css';
import Button from "./UI/button/button";
function SimpleCounter() {
    const [num, setNum] = useState(0);
    const [text, setText] = useState('')
    function plus() {
        setNum(num + 1)
    }
    function minus() {
        setNum(num - 1)
    }
    return(
            <div className="simple-counter">
                <div className="number">
                    {text} {num}
                </div>
                <div className="buttons-wrapper">
                    <input
                        type="text"
                        onChange={ event => setText(event.target.value) }
                        className="text-state"
                        placeholder="Введите текст"
                    />
                    <Button onClick={plus}> + </Button>
                    <Button onClick={minus}> - </Button>
                </div>
            </div>
    );
}
export default SimpleCounter;