import React from "react";
import Card from "./Card";
import contents from "./cardContents";

const CardContainer = () => {
  var options = {
    weekday: "short",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  contents.forEach((item) => {
    item.date = new Date().toLocaleDateString("en-us", options);
  });
  return (
    <div className="cards-container">
      {contents.map((item) => {
        return <Card key={item.id} {...item}></Card>;
      })}
    </div>
  );
};

export default CardContainer;
