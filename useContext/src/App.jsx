// useContext() = React Hook that allows you to share value 
//                between multiple levels of components 
//                without passing through each level

// PORVIDER COMPONENT
// 1. import {createContext} from 'react';
// 2. export const MyContext = createContext();
// 3. <Mycontext.Provider value={value}>
//          <Child />
//    <MyContext.Provider>

// CONSUMER COMPONENTS
// 1. import React, {useContext} from 'react';
//    import {MyContext} from './ComponentA';
//const value = useContext(MyContext);

import ComponentA from "./ComponentA"

function App() {

  return (
    <>
      <ComponentA />
    </>
  )
}

export default App
