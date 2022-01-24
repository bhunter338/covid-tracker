import React, { useState, useContext, useEffect } from "react";
import useFetch from "./useFetch";

// const url = "";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [fetchedData, setfetchedData] = useState({});
  const [fetchedCountryData, setfetchedCountryData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isCountriesLoading, setIsCountriesLoading] = useState(true);
  const [fetchedDailyData, setfetchedDailyData] = useState({});
  const [isDailyLoading, setIsDailyLoading] = useState(true);

  // const url =
  //   selectedCountry === "World" || selectedCountry === ""
  //     ? "https://covid19.mathdro.id/api"
  //     : `https://covid19.mathdro.id/api/countries/${selectedCountry}`;
  const url =
    "https://covid19dataapi.herokuapp.com/api/covidData/" +
    (selectedCountry === "" ? "World" : selectedCountry);

  const countriesUrl =
    "https://covid19dataapi.herokuapp.com/api/covidData/countries";

  const dailyUrl = "https://covid19.mathdro.id/api/daily";

  useEffect(() => {
    FetchApi(url);

    if (selectedCountry === "World" || selectedCountry === "") {
      FetchDaily(dailyUrl);
    }
  }, [selectedCountry]);

  useEffect(() => {
    FetchCountries(countriesUrl); //fetch only on initial render
  }, []);

  const FetchApi = async (url) => {
    setIsLoading(true);
    console.log("url " + url);
    const response = await fetch(url);
    const data = await response.json();

    setfetchedData(data);
    setIsLoading(false);
  };

  const FetchDaily = async (url) => {
    setIsDailyLoading(true);
    const response = await fetch(url);
    const data = await response.json();

    setfetchedDailyData(data);
    setIsDailyLoading(false);
  };

  const FetchCountries = async (url) => {
    setIsCountriesLoading(true);
    const response = await fetch(url);
    const data = await response.json();

    setfetchedCountryData(data);
    setIsCountriesLoading(false);
  };

  const onDrpChange = (e) => {
    console.log(e.value, e.label);
    setSelectedCountry(e.value === undefined ? e.label : e.value);
  };
  return (
    <AppContext.Provider
      value={{
        onDrpChange,
        selectedCountry,
        fetchedData,
        isLoading,
        fetchedCountryData,
        isCountriesLoading,
        fetchedDailyData,
        isDailyLoading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
