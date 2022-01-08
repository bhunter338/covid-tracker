import React, { useEffect, useState } from "react";
import { Bar, Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { Chart } from "react-chartjs-2";
import { useGlobalContext } from "./context";
import useFetch from "./useFetch";

const dailyUrl = "https://covid19.mathdro.id/api/daily";

const Graph = () => {
  const {
    fetchedData,
    isLoading,
    selectedCountry,
    fetchedDailyData,
    isDailyLoading,
  } = useGlobalContext();
  // const [chartData, setChartData] = useState([]);
  console.log(fetchedDailyData, isDailyLoading);
  const data = [
    { name: "Infected", value: !isLoading ? fetchedData.confirmed.value : 0 },
    { name: "Recovered", value: !isLoading ? fetchedData.recovered.value : 0 },
    { name: "Deaths", value: !isLoading ? fetchedData.deaths.value : 0 },
  ];
  var lineData = {};

  const chartData = {
    labels: data.map((item) => item.name),
    datasets: [
      {
        data: data.map((item) => item.value),
        backgroundColor: ["#269e3a", "#26629e", "#c91212"],
      },
    ],
  };

  if (
    (selectedCountry === "global" || selectedCountry === "") &&
    !isDailyLoading
  ) {
    lineData = {
      labels: fetchedDailyData.map((item) => item.reportDate),
      datasets: [
        {
          label: "Infected",
          data: fetchedDailyData.map((item) => item.totalConfirmed),
          fill: false,
          backgroundColor: "#269e3a",
        },
        {
          label: "Deaths",
          data: fetchedDailyData.map((item) => item.deaths.total),
          fill: true,
          backgroundColor: "#c91212",
        },
      ],
    };
  }

  console.log(isLoading, chartData);

  if (isLoading || isDailyLoading) {
    return <h1>Loading...</h1>;
  } else if (!(selectedCountry === "global" || selectedCountry === "")) {
    return (
      <div className="graph">
        <Bar
          data={chartData}
          // height={"50%"}
          options={{
            responsive: true,
            plugins: { legend: { display: false } },
            maintainAspectRatio: false,
          }}
        ></Bar>
      </div>
    );
  } else {
    return (
      <div className="graph">
        <Line
          data={lineData}
          // height={"50%"}
          options={{ maintainAspectRatio: false, responsive: true }}
        ></Line>
      </div>
    );
  }
};

export default Graph;
