import React, { useRef, useEffect } from "react";
import * as d3 from "d3";

const ChartRace = ({ data }) => {
  const svgRef = useRef();
  const width = 1000;
  const height = 600;
  const margin = { top: 20, right: 30, bottom: 40, left: 250 };

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

    const color = d3.scaleOrdinal(d3.schemeCategory10);

    const updateChart = (data, dayIndex) => {
      // Compute ranks dynamically based on value
      const rankedData = data
        .map((d, i) => ({ ...d, rank: i + 1 })) // Assign initial rank
        .sort((a, b) => b.value - a.value) // Sort by value
        .map((d, i) => ({ ...d, rank: i + 1 })); // Update ranks after sorting

      // Update the scales
      x.domain([0, d3.max(rankedData, (d) => d.value)]);
      y.domain(rankedData.map((d) => d.name));

      // Bind data to bars
      const bars = svg.selectAll(".bar").data(rankedData, (d) => d.name);

      // Exit old elements not present in new data
      bars.exit().remove();

      // Enter new elements
      const newBars = bars
        .enter()
        .append("rect")
        .attr("class", "bar")
        .attr("x", margin.left)
        .attr("height", y.bandwidth())
        .attr("y", (d) => y(d.name))
        .attr("width", 0) // Start with width 0 for smooth transition
        .style("fill", (d) => color(d.name)); // Use color scale

      // Update existing elements and new elements together
      newBars
        .merge(bars)
        .transition()
        .duration(1000)
        .attr("y", (d) => y(d.name))
        .attr("width", (d) => x(d.value) - margin.left);

      // Bind data to value labels
      const valueLabels = svg
        .selectAll(".value")
        .data(rankedData, (d) => d.name);

      // Exit old elements not present in new data
      valueLabels.exit().remove();

      // Enter new elements
      const newValueLabels = valueLabels
        .enter()
        .append("text")
        .attr("class", "value")
        .attr("x", margin.left + 5)
        .attr("y", (d) => y(d.name) + y.bandwidth() / 2)
        .attr("dy", "0.35em")
        .style("fill", "white")
        .style("font-weight", "bold")
        .text((d) => `${d.value} (Rank: ${d.rank})`);

      // Update existing elements and new elements together
      newValueLabels
        .merge(valueLabels)
        .transition()
        .duration(1000)
        .attr("x", (d) => {
          const barWidth = x(d.value) - margin.left;
          return barWidth > 30 ? x(d.value) - 5 : x(d.value) + 5;
        })
        .attr("y", (d) => y(d.name) + y.bandwidth() / 2)
        .attr("text-anchor", (d) => {
          const barWidth = x(d.value) - margin.left;
          return barWidth > 30 ? "end" : "start";
        })
        .tween("text", function (d) {
          const i = d3.interpolate(this.textContent.split(" ")[0], d.value);
          return function (t) {
            this.textContent = `${Math.round(i(t))} (Rank: ${d.rank})`;
          };
        });

      // Bind data to y-axis labels
      const yLabels = svg.selectAll(".y-label").data(rankedData, (d) => d.name);

      // Exit old elements not present in new data
      yLabels.exit().remove();

      // Enter new elements
      const newYLabels = yLabels
        .enter()
        .append("text")
        .attr("class", "y-label")
        .attr("x", margin.left - 10)
        .attr("y", (d) => y(d.name) + y.bandwidth() / 2)
        .attr("dy", "0.35em")
        .attr("text-anchor", "end")
        .style("fill", "black")
        .text((d) => d.name);

      // Update existing elements and new elements together
      newYLabels
        .merge(yLabels)
        .transition()
        .duration(1000)
        .attr("y", (d) => y(d.name) + y.bandwidth() / 2);

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

    const initialData = data[0];
    updateChart(initialData, 0); // Show Day 1 initially

    // Animation loop
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % data.length;
      updateChart(data[index], index);
    }, 1200); // Reduced interval to keep animation continuous

    return () => clearInterval(interval);
  }, [data]);

  return <svg ref={svgRef}></svg>;
};

export default ChartRace;
