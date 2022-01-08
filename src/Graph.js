import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { Chart } from "react-chartjs-2";
import { useGlobalContext } from "./context";
import useFetch from "./useFetch";

const dailyUrl = "https://covid19.mathdro.id/api/daily";

const Graph = () => {
  const { fetchedData, isLoading, selectedCountry } = useGlobalContext();
  // const [chartData, setChartData] = useState([]);

  const data = [
    { name: "Infected", value: !isLoading ? fetchedData.confirmed.value : 0 },
    { name: "Recovered", value: !isLoading ? fetchedData.recovered.value : 0 },
    { name: "Deaths", value: !isLoading ? fetchedData.deaths.value : 0 },
  ];

  const chartData = {
    labels: data.map((item) => item.name),
    datasets: [
      {
        data: data.map((item) => item.value),
        backgroundColor: ["#269e3a", "#26629e", "#c91212"],
      },
    ],
  };

  console.log(isLoading, chartData);
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <Bar
        data={chartData}
        options={{ plugins: { legend: { display: false } } }}
      ></Bar>
    </div>
  );
};

export default Graph;
