import React, { useState, useContext } from "react";

// const url = "";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [selectedCountry, setSelectedCountry] = useState("");

  const onDrpChange = (e) => {
    setSelectedCountry(e.value);
  };

  return (
    <AppContext.Provider value={{ onDrpChange, selectedCountry }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
