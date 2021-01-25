import React, { useContext } from 'react';

export default function CounterContexComp(){

    const initialValue = useContext(initialValue);

    const [count, setCount] = useState(initialValue);

    return (
        <div className="c-counter">
            <p>Contador : {count}</p>
            <button className="c-counter__button" onClick={() => setCount(count + 1)}>+</button>
            <button className="c-counter__button" onClick={() => setCount(count - 1)}>-</button>
            <button className="c-counter__button" onClick={() => setCount(count * 2)}>*</button>
            <button className="c-counter__button" onClick={() => setCount(count / 2)}>/</button>
            <button className="c-counter__button" onClick={() => setCount(0)}>RESET</button>
        </div>
    ) 
}