import React from "react";
import TitleBar from "./TitleBar";
import CardContainer from "./CardContainer";
import Graph from "./Graph";

const Panel = () => {
  return (
    <main>
      <TitleBar></TitleBar>
      <CardContainer></CardContainer>
      <Graph></Graph>
    </main>
  );
};

export default Panel;
