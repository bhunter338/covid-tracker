import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { Chart } from "react-chartjs-2";

const Graph = () => {
  const data = [
    { name: "Ev", price: 300 },
    { name: "Araba", price: 500 },
    { name: "Ütü", price: 200 },
  ];
  const chartData = {
    labels: data.map((item) => item.name),
    datasets: [{ data: data.map((item) => item.price) }],
  };
  return (
    <div>
      <Bar data={chartData}></Bar>
    </div>
  );
};

export default Graph;
