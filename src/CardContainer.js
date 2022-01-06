import React, { useState, useEffect } from "react";
import Card from "./Card";
import cardContents from "./cardContents";
import { useGlobalContext } from "./context";
import useFetch from "./useFetch";

const CardContainer = () => {
  const { selectedCountry } = useGlobalContext();
  const url =
    selectedCountry === "global" || selectedCountry === ""
      ? "https://covid19.mathdro.id/api"
      : `https://covid19.mathdro.id/api/countries/${selectedCountry}`;

  const { isLoading, error, data } = useFetch(url);
  const [contents, setContents] = useState([]);
  console.log(url);

  useEffect(() => {
    if (!isLoading) {
      var newContents = cardContents.map((item) => {
        switch (item.id) {
          case 4:
            var num = data.confirmed.value
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            return { ...item, number: num };
          case 5:
            var num = data.recovered.value
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            return { ...item, number: num };
          case 6:
            var num = data.deaths.value
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            return { ...item, number: num };
          default:
            return { ...item };
        }
      });
      setContents(newContents);
    }
  }, [isLoading, selectedCountry]);

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
