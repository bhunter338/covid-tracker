import React, { useState, useContext, useEffect } from "react";
import useFetch from "./useFetch";

// const url = "";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [fetchedData, setfetchedData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const url =
    selectedCountry === "global" || selectedCountry === ""
      ? "https://covid19.mathdro.id/api"
      : `https://covid19.mathdro.id/api/countries/${selectedCountry}`;

  useEffect(() => {
    FetchApi(url);
  }, [selectedCountry]);

  const FetchApi = async (url) => {
    console.log("fetchApi");

    setIsLoading(true);

    const response = await fetch(url);
    const data = await response.json();

    console.log(isLoading);
    setfetchedData(data);
    setIsLoading(false);
  };

  const onDrpChange = (e) => {
    setSelectedCountry(e.value === undefined ? e.label : e.value);
  };
  console.log(fetchedData);
  return (
    <AppContext.Provider
      value={{ onDrpChange, selectedCountry, fetchedData, isLoading }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
