import React, { useRef, useEffect, useState } from "react";
import * as d3 from "d3";

const RankDiff = ({ data }) => {
  const svgRef = useRef();
  const [initialRanks, setInitialRanks] = useState([]);
  const width = 1000;
  const height = 600;
  const margin = { top: 20, right: 50, bottom: 40, left: 250 };

  useEffect(() => {
    const svg = d3
      .select(svgRef.current)
      .attr("width", width)
      .attr("height", height);

    const x = d3.scaleLinear().range([margin.left, width - margin.right]);
    const y = d3
      .scaleBand()
      .range([margin.top, height - margin.bottom])
      .padding(0.05);

    // Updated custom color palette with dark and distinct colors
    const colorPalette = [
      "#003f5c", // Dark Blue
      "#2f4b7c", // Indigo
      "#665191", // Purple
      "#a05195", // Deep Magenta
      "#d45087", // Red-Pink
      "#f95d6a", // Coral
      "#ff7c43", // Orange
      "#ffa600", // Golden Yellow
      "#374c80", // Darker Indigo
      "#8e6c8a", // Muted Purple
    ];

    const color = d3.scaleOrdinal(colorPalette);

    // Calculate initial ranks from the first data set
    if (data.length > 0 && initialRanks.length === 0) {
      const initialData = data[0].map((d, i) => ({
        ...d,
        initialRank: i + 1,
      }));
      initialData.sort((a, b) => b.value - a.value);
      initialData.forEach((d, i) => {
        d.initialRank = i + 1;
      });
      setInitialRanks(initialData);
    }

    const updateChart = (currentData, dayIndex) => {
      // Merge initial ranks into current data
      const rankedData = currentData.map((d) => ({
        ...d,
        initialRank:
          initialRanks.find((r) => r.name === d.name)?.initialRank || 0,
      }));

      // Sort data based on value
      rankedData.sort((a, b) => b.value - a.value);

      // Calculate ranks dynamically
      rankedData.forEach((d, i) => {
        d.dynamicRank = i + 1;
      });

      // Keep only the top 7 ranked industries
      const top7Data = rankedData.slice(0, 7);

      // Update the scales
      x.domain([0, d3.max(top7Data, (d) => d.value || 0)]);
      y.domain(top7Data.map((d) => d.name));

      // Bind data to bars
      const bars = svg.selectAll(".bar").data(top7Data, (d) => d.name);

      // Exit old elements with smooth transition
      bars.exit().transition().duration(1000).style("opacity", 0).remove();

      // Enter new elements
      const newBars = bars
        .enter()
        .append("rect")
        .attr("class", "bar")
        .attr("x", margin.left)
        .attr("height", y.bandwidth())
        .attr("y", (d) => y(d.name))
        .attr("width", 0) // Start with width 0
        .style("fill", (d) => color(d.name))
        .style("opacity", 0);

      // Update existing elements and new elements together
      newBars
        .merge(bars)
        .transition()
        .duration(1000)
        .style("opacity", 1)
        .attr("y", (d) => y(d.name))
        .attr("width", (d) => Math.max(x(d.value) - margin.left, 0)) // Ensure width is non-negative
        .ease(d3.easeCubicInOut); // Use cubic easing for smoother motion

      // Bind data to value labels
      const valueLabels = svg.selectAll(".value").data(top7Data, (d) => d.name);

      // Exit old elements with smooth transition
      valueLabels
        .exit()
        .transition()
        .duration(1000)
        .style("opacity", 0)
        .remove();

      // Enter new elements
      const newValueLabels = valueLabels
        .enter()
        .append("text")
        .attr("class", "value")
        .attr("x", margin.left) // Start position at the left margin
        .attr("y", (d) => y(d.name) + y.bandwidth() / 2)
        .attr("dy", "0.35em")
        .style("fill", "white")
        .style("font-weight", "bold")
        .attr("text-anchor", "end")
        .style("opacity", 0);

      // Update existing elements and new elements together
      newValueLabels
        .merge(valueLabels)
        .transition()
        .duration(1000)
        .style("opacity", 1)
        .attr("x", (d) => Math.max(x(d.value) - 10, margin.left + 10)) // Position inside the bar
        .attr("y", (d) => y(d.name) + y.bandwidth() / 2)
        .tween("text", function (d) {
          const i = d3.interpolate(this.textContent, d.value);
          return function (t) {
            this.textContent = `${Math.round(i(t))}`; // Update value only
          };
        });

      // Bind data to rank labels
      const rankLabels = svg.selectAll(".rank").data(top7Data, (d) => d.name);

      // Exit old elements with smooth transition
      rankLabels
        .exit()
        .transition()
        .duration(1000)
        .style("opacity", 0)
        .remove();

      // Enter new elements
      const newRankLabels = rankLabels
        .enter()
        .append("text")
        .attr("class", "rank")
        .attr("x", margin.left) // Start position at the left margin
        .attr("y", (d) => y(d.name) + y.bandwidth() / 2)
        .attr("dy", "0.35em")
        .style("fill", "black")
        .style("font-weight", "bold")
        .attr("text-anchor", "start")
        .style("opacity", 0);

      // Update existing elements and new elements together
      newRankLabels
        .merge(rankLabels)
        .transition()
        .duration(1000)
        .style("opacity", 1)
        .attr("x", (d) => x(d.value) + 10) // Position just after the end of the bar
        .attr("y", (d) => y(d.name) + y.bandwidth() / 2)
        .tween("text", function (d) {
          const i = d3.interpolate(
            parseFloat(this.textContent.split("(")[0]) || 0,
            d.dynamicRank
          );
          return function (t) {
            this.textContent = `${Math.round(i(t))} (${d.initialRank})`; // Display dynamic and initial ranks
          };
        });

      // Bind data to y-axis labels
      const yLabels = svg.selectAll(".y-label").data(top7Data, (d) => d.name);

      // Exit old elements with smooth transition
      yLabels.exit().transition().duration(1000).style("opacity", 0).remove();

      // Enter new y-axis labels
      const newYLabels = yLabels
        .enter()
        .append("text")
        .attr("class", "y-label")
        .attr("x", margin.left - 10)
        .attr("y", (d) => y(d.name) + y.bandwidth() / 2)
        .attr("dy", "0.35em")
        .attr("text-anchor", "end")
        .style("fill", "black")
        .style("opacity", 0);

      // Update existing y-axis labels and new labels together
      newYLabels
        .merge(yLabels)
        .transition()
        .duration(1000)
        .style("opacity", 1)
        .attr("y", (d) => y(d.name) + y.bandwidth() / 2)
        .text((d) => d.name);

      // Day labels
      svg.selectAll(".day-label").remove(); // Remove old day labels

      svg
        .append("text")
        .attr("class", "day-label")
        .attr("x", width - margin.right)
        .attr("y", height - margin.bottom)
        .attr("text-anchor", "end")
        .style("font-size", "24px")
        .style("font-weight", "bold")
        .text(`Day ${dayIndex + 1}`);
    };

    // Only initialize chart if initialRanks is empty (which means it's the first load)
    if (initialRanks.length === 0 && data.length > 0) {
      const initialData = data[0];
      const ranks = initialData
        .map((d, i) => ({ ...d, initialRank: i + 1 })) // Assign initial rank
        .sort((a, b) => b.value - a.value) // Sort by value
        .map((d, i) => ({ ...d, initialRank: i + 1 })); // Update ranks after sorting
      setInitialRanks(ranks);
      updateChart(initialData, 0); // Show Day 1 initially
    } else {
      // If initialRanks is already set, just update the chart
      const index = data.length > 0 ? 0 : 0; // Use index 0 as default
      updateChart(data[index], index);
    }

    // Animation loop
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % data.length;
      updateChart(data[index], index);
    }, 1200); // Reduced interval to keep animation continuous

    return () => clearInterval(interval);
  }, [data, initialRanks]);

  return <svg ref={svgRef}></svg>;
};

export default RankDiff;
