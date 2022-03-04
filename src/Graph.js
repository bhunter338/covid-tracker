import React, { useEffect, useState } from "react";
import { Bar, Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { Chart } from "react-chartjs-2";
import { useGlobalContext } from "./context";
import useFetch from "./useFetch";

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
    { name: "Infected", value: !isLoading ? fetchedData.totalConfirmed : 0 },
    { name: "Recovered", value: !isLoading ? fetchedData.totalRecovered : 0 },
    { name: "Deaths", value: !isLoading ? fetchedData.totalDeaths : 0 },
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

  console.log(isLoading, chartData);

  if (isLoading || isDailyLoading) {
    return <h1>Loading...</h1>;
  }
  // else if (!(selectedCountry === "World" || selectedCountry === "")) {
  //   return (
  //     <div className="graph">
  //       <Bar
  //         data={chartData}
  //         // height={"50%"}
  //         options={{
  //           responsive: true,
  //           plugins: { legend: { display: false } },
  //           maintainAspectRatio: false,
  //         }}
  //       ></Bar>
  //     </div>
  //   );
  // }
  else {
    lineData = {
      labels: fetchedDailyData.map((item) => item.date.split("T")[0]),
      datasets: [
        {
          label: "Active Cases",
          data: fetchedDailyData.map((item) => item.activeCases),
          fill: true,
          backgroundColor: "#269e3a",
        },
      ],
    };
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
