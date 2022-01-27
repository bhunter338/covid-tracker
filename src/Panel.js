import React from "react";
import TitleBar from "./TitleBar";
import CardContainer from "./CardContainer";
import Graph from "./Graph";
import Footer from "./Footer";

const Panel = () => {
  return (
    <main>
      <TitleBar></TitleBar>
      <CardContainer></CardContainer>
      <Graph></Graph>
      <Footer></Footer>
    </main>
  );
};

export default Panel;
