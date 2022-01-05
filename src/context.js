import React, { useState, useContext } from "react";

// const url = "";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const bindCardData = (data) => {};

  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
