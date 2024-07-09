// useState() = Re-renders the componetn when the state value changes.

// useRef() = "use Reference" does not cause re-renders when irs value changes.
//             when you want a component to "remember" some information,
//             but you don't what that information to trigger new renders.

//             1. Accessing/ Interacting with DOM elements
//             2. Handling Focus, Animations, and Transitions
//             3. Managing Timers and Intervals

import React,{useEffect, useRef} from "react";

function MyComponent(){

    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);

    useEffect(()=> {
        console.log("COMPONENT RENDERED");
        console.log(inputRef1)
    });

    function handleNumber1(){

        inputRef1.current.style.backgroundColor = "yellow"        
        inputRef2.current.style.backgroundColor = ""        
        inputRef3.current.style.backgroundColor = ""        
        // inputRef é um objeto com só uma propriedade
    }
    function handleNumber2(){

        inputRef1.current.style.backgroundColor = ""        
        inputRef2.current.style.backgroundColor = "yellow"        
        inputRef3.current.style.backgroundColor = ""        
    }
    function handleNumber3(){

        inputRef1.current.style.backgroundColor = ""        
        inputRef2.current.style.backgroundColor = ""        
        inputRef3.current.style.backgroundColor = "yellow"        
    }

    return(
        <div>
            <button onClick={handleNumber1}>
                click me!
            </button>
            <input ref={inputRef1}/>

            <button onClick={handleNumber2}>
                click me!
            </button> 
            <input ref={inputRef2}/>

            <button onClick={handleNumber3}>
                click me!
            </button> 
            <input ref={inputRef3}/>
        </div>
        );
}

export default MyComponent;