"use client"
import React, { useState, createContext } from "react";

// usesContext and VlobalState import on the component here use it state
export const GlobalState = createContext(); // Create the context

// wrap this function name on app component
export const MyState = ({ children }) => {
  const [reload, setReload] = useState(false);


  const value = {
    reload, setReload
  };

  return (
    <GlobalState.Provider value={value}>{children}</GlobalState.Provider>
  );
};