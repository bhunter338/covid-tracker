import React from "react";
import Select from "react-select";
const TitleBar = () => {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  return (
    <div className="title-bar">
      <h1>Covid19 Daily Tracker</h1>
      <Select options={options} className="dropdown"></Select>
    </div>
  );
};

export default TitleBar;
