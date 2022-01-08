import React, { useEffect, useState } from "react";
import Select from "react-select";
import useFetch from "./useFetch";
import { useGlobalContext } from "./context";

// const countriesUrl = "https://covid19.mathdro.id/api/countries";

const TitleBar = () => {
  const { onDrpChange, fetchedCountryData, isCountriesLoading } =
    useGlobalContext();
  const defaultOption = { value: "global", label: "Global" };
  // const { isLoading, error, data } = useFetch(countriesUrl);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    if (!isCountriesLoading) {
      const newCountries = fetchedCountryData.countries.map((item) => {
        return { value: item.iso2, label: item.name };
      });
      newCountries.unshift({ value: "global", label: "Global" });
      setCountries(newCountries);
    }
  }, [isCountriesLoading]);

  if (isCountriesLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="title-bar">
      <h1>Covid19 Daily Tracker</h1>
      <Select
        defaultValue={defaultOption}
        onChange={onDrpChange}
        options={countries}
        className="dropdown"
      ></Select>
    </div>
  );
};

export default TitleBar;
