import React from "react";

const Card = ({ id, title, number, date, definition }) => {
  return (
    <div className={`card card${id}`}>
      <h3>{title}</h3>
      <h2>{number}</h2>
      <h4>{date}</h4>
      <h3 className="def">{definition}</h3>
    </div>
  );
};

export default Card;
