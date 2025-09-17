import { useState } from "react";
function Counter(){

    const [count,setCount] = useState(0)
    const reduceCount = ()=> {
        setCount(count-1);
    }
    const reset = ()=> setCount(0);
    const increseCount = ()=>{
        setCount(count+1);
    }
    return (
        <div>
            <div className="count-value">{count}</div>
            <div className="control">
                <button className="decrement" onClick={reduceCount}>Decrement</button>
                <button className="reset" onClick={reset}>Reset</button>
                <button className="increment" onClick={increseCount}>Increment</button>
            </div>
        </div>
    );
}

export default Counter