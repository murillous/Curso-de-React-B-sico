import React, {useContext }from "react";
import { userContext } from "./ComponentA.jsx";


function ComponentD(){

    const value = useContext(userContext);

    return(
        <div className="box">
            <h1>Component D</h1>
            <h2>{`bye, ${value}`}</h2>
        </div>
    );
}

export default ComponentD