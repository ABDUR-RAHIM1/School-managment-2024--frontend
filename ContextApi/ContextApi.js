"use client"
import React, { useState, createContext } from "react";

export const GlobalState = createContext(); 
 
export const MyState = ({ children }) => {
  const [reload, setReload] = useState(false);
  const [editValue, setEditValue] = useState({})

  const value = {
    reload, setReload,
    editValue, setEditValue
  };

  return (
    <GlobalState.Provider value={value}>{children}</GlobalState.Provider>
  );
};