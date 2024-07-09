import React, {useState} from "react";

function MyComponent(){

    const [name, setName] = useState("Guest");

    const [age, setAge] = useState(0);

    const [isTrue, setIsTrue] = useState(false);
    
    const updateName = () => {
        setName("Murilo")
    }
    
    const updateAge = () => {
        setAge(age + 1)
    }

    const updateBool = () => {
        setIsTrue(!isTrue)
    }

    return(
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>

            <p>Age: {age}</p>
            <button onClick={updateAge}>Set age</button>

            <p>Is estudent: {isTrue ? "Yes" : "No"}</p>
            <button onClick={updateBool}>Toggle status</button>

            <input value={""} />
        </div>
    );
}
export default MyComponent