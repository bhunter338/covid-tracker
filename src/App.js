import logo from "./logo.svg";
import Panel from "./Panel";
import { useGlobalContext } from "./context";
import useFetch from "./useFetch";
import React, { useState, useEffect } from "react";

function App() {
  // const { selectedCountry, setfetchedData } = useGlobalContext();
  // const url =
  //   selectedCountry === "global" || selectedCountry === ""
  //     ? "https://covid19.mathdro.id/api"
  //     : `https://covid19.mathdro.id/api/countries/${selectedCountry}`;

  // const [newData, setnewData] = useState(useFetch(url));

  // console.log(newData);
  // useEffect(() => {
  //   setfetchedData(newData);
  // }, [selectedCountry]);

  return <Panel></Panel>;
}

export default App;
