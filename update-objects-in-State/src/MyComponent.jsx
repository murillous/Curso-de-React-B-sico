import React, {useState} from "react";

function MyComponent(){

    const [car, setCar] = useState({year: 2024,
                                    make:"Ford",
                                    model:"Mustang"})
    
    function handleYearChange(event){
        setCar(c => ({...c, year: event.target.value}))
    }
    function handleMakeChange(event){
        setCar(c => ({...c, make: event.target.value}))
    }
    function handleModelChange(event){
        setCar(c => ({...c, model: event.target.value}))
    }
    
    return(<div>
        <h2>Your favorite car is: {car.year} {car.make} {car.model} </h2>

        <input type="number" value={car.year} onChange={handleYearChange}/><br />
        <input type="text" value={car.make} onChange={handleMakeChange}/><br />
        <input type="text" value={car.model} onChange={handleModelChange}/>

    </div>);
}
export default MyComponent