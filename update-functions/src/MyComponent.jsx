// updater function = A function passed as an argument to setState() usually
//                    ex. setYear(arrow function)
//                    Allow for safe updates based on the previous state
//                    Used with multiple state updates and asynchronous functions
//                    Good practice to use updater functions

import React, {useState} from "react";

function MyComponent(){

    const [count, setCount] = useState(0);

    function Decrement(){
      setCount(c => c - 1);
    }
    function Reset(){
      setCount(0);
    }
    function Increment(){
      setCount(c => c + 1);
    }

    return(<div>

    <h1>Counter: {count}</h1>
    <button onClick={Decrement}>Decrement</button>
    <button onClick={Reset}>Reset</button>
    <button onClick={Increment}>Increment</button>

    </div>)
}

export default MyComponent