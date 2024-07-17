import React from "react";
import ReactApexChart from "react-apexcharts";

const IndustryRank = () => {
  const series = [
    {
      name: "Rank",
      data: [
        { x: "1D", y: 10 }, // Replace with your actual rank data
        { x: "1W", y: 50 },
        { x: "1M", y: 75 },
        { x: "3M", y: 120 },
      ],
    },
  ];

  const options = {
    chart: {
      type: "scatter",
      height: 350,
      toolbar: {
        show: false,
      },
      background: "transparent",
    },
    xaxis: {
      categories: ["1D", "1W", "1M", "3M"],
      title: {
        text: "Time Frame",
      },
    },
    yaxis: {
      title: {
        text: "Industry Rank",
      },
      min: 1,
      max: 150,
      reversed: true,
      tickAmount: 3,
      labels: {
        formatter: (value) => {
          if (value === 1) return "1";
          if (value === 50) return "50";
          if (value === 100) return "100";
          if (value === 150) return "150";
          return value.toFixed(0);
        },
      },
    },
    grid: {
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    markers: {
      size: 10,
      colors: ["#000000"],
      strokeWidth: 0,
    },
    fill: {
      type: "solid",
    },
    dataLabels: {
      enabled: false,
    },
    tooltip: {
      x: {
        show: true,
        formatter: (value) => value,
      },
      y: {
        show: true,
        formatter: (value) => value.toFixed(0),
      },
    },
  };

  return (
    <div>
      <div id="chart" style={{ position: "relative" }}>
        <div
          style={{
            position: "absolute",
            top: "8%",
            left: "12%",
            width: "85%",
            height: "72%",
            background: "linear-gradient(to top, #FF0000, #FFC670, #00A62E)",
            zIndex: -1,
          }}
        ></div>
        <ReactApexChart
          options={options}
          series={series}
          type="scatter"
          height={350}
        />
      </div>
    </div>
  );
};

export default IndustryRank;
