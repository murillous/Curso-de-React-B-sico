import React, {useState} from "react";

function MyColorApp(){

    const [color, setColor] = useState("#000000")

    function handleColorChange(event){
        setColor(event.target.value)
    }
    
    return(
        <div className="corpo">
            <div className="color-pick-container">
                
                <h1>Color Picker</h1>
                <div className="color-pick-display" style={{backgroundColor: color}}>
                    The selected Color:<br/>{color}
                </div>
                <h3>Select a color</h3>
                <input type="color" value={color} onChange={handleColorChange}/>
                
            </div>
        </div>
    );
}

export default MyColorApp