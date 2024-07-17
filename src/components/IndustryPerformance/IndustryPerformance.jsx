import React from "react";
import ReactApexChart from "react-apexcharts";

const IndustryPerformance = () => {
  const series = [
    {
      name: "Performance",
      data: [-7, -5, 8, 23], // Replace with your actual performance data
    },
  ];

  const options = {
    chart: {
      type: "bar",
      height: 350,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        colors: {
          ranges: [
            {
              from: -100,
              to: 0,
              color: "#FF0000",
            },
            {
              from: 0,
              to: 1000,
              color: "#00A62E",
            },
          ],
        },
        columnWidth: "50%",
      },
    },
    dataLabels: {
      enabled: true,
      style: {
        colors: ["#000000"],
      },
      formatter: (val) => {
        return val.toFixed(0) + "%";
      },
    },
    yaxis: {
      title: {
        text: "Industry Performance",
      },
      labels: {
        formatter: (y) => {
          return y.toFixed(0) + "%";
        },
      },
    },
    xaxis: {
      categories: ["1D", "1W", "1M", "3M"],
      title: {
        text: "Time Frame",
      },
    },
    grid: {
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    fill: {
      type: "solid",
    },
    stroke: {
      colors: ["transparent"],
      width: 2,
    },
  };

  return (
    <div>
      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        height={350}
      />
    </div>
  );
};

export default IndustryPerformance;
