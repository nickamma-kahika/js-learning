import React from "react";
import CounterContext from "../context/CounterContext";
import { useContext } from "react";

const CounterButton = () => {

    const counterContext = useContext(CounterContext)


    return (
        <div style={{display:'flex', }}>
            <button onClick={()=>counterContext.setCount(counterContext.count+1)}>Increment</button>
            <button onClick={()=>counterContext.setCount(counterContext.count-1)}>Decrement</button>
        </div>
    )
}

export default CounterButton