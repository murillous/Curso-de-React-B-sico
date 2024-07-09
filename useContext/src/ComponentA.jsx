import ComponentB from "./ComponentB.jsx";

import React, {createContext, useState,} from "react";

export const userContext = createContext();

function ComponentA(){

    const [user, setUser] = useState("Murilo")

    return(
        <div className="box">
            <h1>Component A</h1>
            <h2>{`Hello, ${user}`}</h2>
            <userContext.Provider value={user}>
                <ComponentB />
            </userContext.Provider>

        </div>
    );
}

export default ComponentA