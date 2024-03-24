import React, { useState, createContext } from "react";

// usesContext and VlobalState import on the component here use it state
export const GlobalState = createContext(); // Create the context

// wrap this function name on app component
export const MyState = ({ children }) => {
  const [count, setCount] = useState(0);
  const [user , setUser] = useState({
     name :"",
     email :"",
     password :""
  })

  const value = {
    count, setCount,
    user , setUser
  };

  return (
    <GlobalState.Provider value={value}>{children}</GlobalState.Provider>
  );
};