import React, { useState, useEffect } from "react";
import Card from "./Card";
import cardContents from "./cardContents";
import { useGlobalContext } from "./context";
import useFetch from "./useFetch";

const url = "https://covid19.mathdro.id/api";
const CardContainer = () => {
  const {} = useGlobalContext();
  const { isLoading, error, data } = useFetch(url);
  const [contents, setContents] = useState([]);

  useEffect(() => {
    console.log(data);
    console.log("isloading" + isLoading);
    console.log(error);
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
            break;
          case 6:
            var num = data.deaths.value
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            return { ...item, number: num };
            break;
          default:
            return { ...item };
        }
      });
      console.log(newContents);
      setContents(newContents);
    }
  }, [isLoading]);

  var options = {
    weekday: "short",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  if (isLoading) {
    return <div>Loading...</div>;
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
