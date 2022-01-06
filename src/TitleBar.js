import React, { useEffect, useState } from "react";
import Select from "react-select";
import useFetch from "./useFetch";
import { useGlobalContext } from "./context";

const countriesUrl = "https://covid19.mathdro.id/api/countries";

const TitleBar = () => {
  const { onDrpChange } = useGlobalContext();
  const defaultOption = { value: "global", label: "Global" };
  const { isLoading, error, data } = useFetch(countriesUrl);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    if (!isLoading) {
      const newCountries = data.countries.map((item) => {
        return { value: item.iso2, label: item.name };
      });
      newCountries.unshift({ value: "global", label: "Global" });
      setCountries(newCountries);
    }
  }, [isLoading]);

  if (isLoading) {
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
