import React, { useEffect, useRef, useState } from "react";
import { Line, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { MatrixController, MatrixElement } from "chartjs-chart-matrix";
import ApexCharts from "apexcharts";
import ReactApexChart from "react-apexcharts";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  MatrixController,
  MatrixElement
);

const lineData = {
  labels: ["1 Week", "1 Month", "3 Month"],
  datasets: [
    {
      label: "Industry A",
      data: [2.5, 5.1, 8.7],
      borderColor: "rgba(75, 192, 192, 1)",
      backgroundColor: "rgba(75, 192, 192, 0.2)",
    },
    {
      label: "Industry B",
      data: [-1.2, -0.8, 1.2],
      borderColor: "rgba(255, 99, 132, 1)",
      backgroundColor: "rgba(255, 99, 132, 0.2)",
    },
    {
      label: "Industry C",
      data: [3.3, 2.9, 6.5],
      borderColor: "rgba(153, 102, 255, 1)",
      backgroundColor: "rgba(153, 102, 255, 0.2)",
    },
  ],
};

const heatmapData = {
  datasets: [
    {
      label: "Industry Rank",
      data: [
        { x: 0, y: 0, v: 3 },
        { x: 1, y: 0, v: 2 },
        { x: 2, y: 0, v: 1 },
        { x: 0, y: 1, v: 2 },
        { x: 1, y: 1, v: 1 },
        { x: 2, y: 1, v: 3 },
        { x: 0, y: 2, v: 1 },
        { x: 1, y: 2, v: 3 },
        { x: 2, y: 2, v: 2 },
      ],
      backgroundColor: function (context) {
        const value = context.dataset.data[context.dataIndex].v;
        const alpha = (value - 1) / 2; // Normalize alpha based on value
        return `rgba(75, 192, 192, ${alpha})`;
      },
      borderWidth: 1,
      width: () => 50,
      height: () => 50,
    },
  ],
};

const pieData = {
  labels: ["Stock A", "Stock B", "Stock C"],
  datasets: [
    {
      label: "Number of Stocks",
      data: [50, 30, 20],
      backgroundColor: [
        "rgba(75, 192, 192, 0.6)",
        "rgba(255, 99, 132, 0.6)",
        "rgba(153, 102, 255, 0.6)",
      ],
      borderColor: [
        "rgba(75, 192, 192, 1)",
        "rgba(255, 99, 132, 1)",
        "rgba(153, 102, 255, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

function Bar() {
  const heatmapRef = useRef(null);
  let heatmapChart = useRef(null);

  //   const generateLargeDataSet = () => {
  //     const cities = [
  //       "New Delhi",
  //       "Kolkata",
  //       "Mumbai",
  //       "Ahmedabad",
  //       "Bangaluru",
  //       "Pune",
  //       "Chennai",
  //       "Jaipur",
  //       "Surat",
  //       "Hyderabad",
  //       "Lucknow",
  //       "Indore",
  //       "Kanpur",
  //       "Nagpur",
  //       "Patna",
  //       "Vadodara",
  //       "Ghaziabad",
  //       "Ludhiana",
  //       "Agra",
  //       "Nashik",
  //       "Faridabad",
  //       "Meerut",
  //       "Rajkot",
  //       "Kalyan",
  //       "Vasai-Virar",
  //       "Varanasi",
  //       "Srinagar",
  //       "Aurangabad",
  //       "Dhanbad",
  //       "Amritsar",
  //       "Navi Mumbai",
  //       "Allahabad",
  //       "Ranchi",
  //       "Haora",
  //       "Coimbatore",
  //       "Jabalpur",
  //       "Gwalior",
  //       "Vijayawada",
  //       "Jodhpur",
  //       "Madurai",
  //       "Raipur",
  //       "Kota",
  //       "Guwahati",
  //       "Chandigarh",
  //       "Solapur",
  //       "Hubballi-Dharwad",
  //       "Tiruchirappalli",
  //       "Bareilly",
  //       "Moradabad",
  //       "Mysore",
  //       "Tiruppur",
  //       "Gurgaon",
  //       "Aligarh",
  //       "Jalandhar",
  //       "Bhubaneswar",
  //       "Salem",
  //       "Mira-Bhayandar",
  //       "Warangal",
  //       "Thiruvananthapuram",
  //       "Guntur",
  //       "Bhiwandi",
  //       "Saharanpur",
  //       "Gorakhpur",
  //       "Bikaner",
  //       "Amravati",
  //       "Noida",
  //       "Jamshedpur",
  //       "Bhilai Nagar",
  //       "Cuttack",
  //       "Firozabad",
  //       "Kochi",
  //       "Bhavnagar",
  //       "Dehradun",
  //       "Durgapur",
  //       "Asansol",
  //       "Nanded-Waghala",
  //       "Ajmer",
  //       "Jamnagar",
  //       "Ujjain",
  //       "Sangli",
  //       "Loni",
  //       "Jhansi",
  //       "Pondicherry",
  //       "Nellore",
  //       "Jammu",
  //       "Belagavi",
  //       "Raurkela",
  //       "Mangaluru",
  //       "Tirunelveli",
  //       "Malegaon",
  //       "Gaya",
  //       "Tirupati",
  //       "Udaipur",
  //       "Karnal",
  //       "Nizamabad",
  //       "Parbhani",
  //       "Tumkur",
  //       "Hisar",
  //       "Ozhukarai",
  //       "Bidhannagar",
  //       "Panihati",
  //       "Darbhanga",
  //       "Sikar",
  //       "Silchar",
  //       "Siliguri",
  //       "Gandhinagar",
  //       "Mangalore",
  //       "Erode",
  //       "Belgaum",
  //       "Ambattur",
  //       "Tiruvottiyur",
  //       "Avadi",
  //       "Kadapa",
  //       "Kamarhati",
  //       "Bilaspur",
  //       "Bharatpur",
  //       "Gopalpur",
  //       "Cuddalore",
  //       "Ganganagar",
  //       "Durg-Bhilainagar",
  //       "Rourkela Industrial Township",
  //       "Ulhasnagar",
  //       "Berhampur",
  //     ];

  //     return cities.slice(0, 130).map((city, index) => ({
  //       x: city,
  //       y: Math.floor(Math.random() * 200) + 10, // Random value between 10 and 200
  //     }));
  //   };

  const generateRankedDataSet = () => {
    const ranks = Array.from({ length: 50 }, (_, i) => 50 - i); // Ranks from 130 to 1
    return ranks.map((rank, index) => ({
      x: `Rank ${index + 1}`,
      y: rank,
    }));
  };

  const series = [
    {
      data: generateRankedDataSet(),
    },
  ];

  const options = {
    legend: {
      show: false,
    },
    // chart: {
    //   height: 1000,
    //   type: "treemap",
    // },
    title: {
      text: "Basic Treemap",
    },
    colors: ["#3B93A5"],
  };

  useEffect(() => {
    if (heatmapRef.current) {
      const ctx = heatmapRef.current.getContext("2d");

      if (heatmapChart.current) {
        heatmapChart.current.destroy();
      }

      heatmapChart.current = new ChartJS(ctx, {
        type: "matrix",
        data: heatmapData,
        options: {
          scales: {
            x: {
              type: "linear",
              min: 0,
              max: 2,
              ticks: {
                stepSize: 1,
                callback: (value) =>
                  ["1 Week Rank", "1 Month Rank", "3 Month Rank"][value],
              },
            },
            y: {
              type: "linear",
              min: 0,
              max: 2,
              ticks: {
                stepSize: 1,
                callback: (value) => ["Stock A", "Stock B", "Stock C"][value],
              },
            },
          },
          plugins: {
            tooltip: {
              callbacks: {
                label: function (context) {
                  const value = context.dataset.data[context.dataIndex].v;
                  return `Rank: ${value}`;
                },
              },
            },
          },
        },
      });

      return () => {
        if (heatmapChart.current) {
          heatmapChart.current.destroy();
        }
      };
    }
  }, []);

  return (
    <div className="App">
      <h1>Stock Performance Dashboard</h1>
      <div style={{ width: "600px", margin: "0 auto" }}>
        <h2>Performance Over Time</h2>
        <Line data={lineData} />
      </div>
      <div style={{ width: "600px", margin: "0 auto", marginTop: "50px" }}>
        <h2>Industry Rank Heatmap</h2>
        <canvas ref={heatmapRef}></canvas>
      </div>
      <div
        style={{
          width: "90%",
          height: "500px",
          margin: "0 auto",
          marginTop: "50px",
        }}
      >
        <h2>Industry Rank Heatmap</h2>
        <div id="chart">
          <ReactApexChart
            options={options}
            series={series}
            type="treemap"
            height={500}
          />
        </div>{" "}
      </div>
      <div style={{ width: "600px", margin: "0 auto", marginTop: "50px" }}>
        <h2>Number of Stocks Distribution</h2>
        <Pie data={pieData} />
      </div>
    </div>
  );
}

export default Bar;
