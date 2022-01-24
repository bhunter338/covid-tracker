import React, { useState, useEffect } from "react";
import Card from "./Card";
import cardContents from "./cardContents";
import { useGlobalContext } from "./context";
import useFetch from "./useFetch";

const CardContainer = () => {
  const { fetchedData, isLoading } = useGlobalContext();
  // const { isLoading, data } = fetchedData;
  // const url =
  //   selectedCountry === "global" || selectedCountry === ""
  //     ? "https://covid19.mathdro.id/api"
  //     : `https://covid19.mathdro.id/api/countries/${selectedCountry}`;

  // const { isLoading, error, data } = useFetch(url);
  const [contents, setContents] = useState([]);

  useEffect(() => {
    if (!isLoading && typeof isLoading !== "undefined") {
      var newContents = cardContents.map((item) => {
        switch (item.id) {
          case 1:
            var num = fetchedData.totalConfirmed
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            return { ...item, number: num };
          case 2:
            var num = fetchedData.totalRecovered
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            return { ...item, number: num };
          case 3:
            var num = fetchedData.totalDeaths
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            return { ...item, number: num };
          case 4:
            var num = fetchedData.activeCases
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            return { ...item, number: num };
          case 5:
            var num = fetchedData.serious
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            return { ...item, number: num };
          case 6:
            var num = fetchedData.casesPer1MPopulation
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            return { ...item, number: num };
          default:
            return { ...item };
        }
      });
      setContents(newContents);
    }
  }, [isLoading /*, selectedCountry*/]);

  var options = {
    weekday: "short",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="cards-container">
      {contents.map((item) => {
        return <Card key={item.id} {...item}></Card>;
      })}
    </div>
  );
};

export default CardContainer;
