import React, {useState} from "react";

function MyComponent(){

    const [fruits, setFruits] = useState(["Apple","Orange","Banana"]);

    function addNewFruit(){
        
        let newFruit = document.getElementById("newFruit").value
        document.getElementById("newFruit").value = ""

        setFruits(f => [...f,newFruit])
    }

    function removeFruit(index){

        setFruits(fruits.filter((_,i) => i !== index))
    }

    return(<div>
        <h1>List of Food</h1>
        <ul>
            {fruits.map((fruits, index) => 
            <li key={index} onClick={() => removeFruit(index)}>
                {fruits}
            </li>)}
        </ul>
        <input type="text" id="newFruit" />
        <button id="submit" onClick={addNewFruit}>Add new fruit</button>
    </div>);
}
export default MyComponent;