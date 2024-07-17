import React from "react";
import Tree from "react-d3-tree";
import "./flowchart.css";

const treeData = {
  name: "Macro-Sector",
  children: [
    {
      name: "Sector 1",
      children: [
        { name: "Industry 1-1" },
        { name: "Industry 1-2" },
        { name: "Industry 1-3" },
      ],
    },
    {
      name: "Sector 2",
      children: [{ name: "Industry 2-1" }, { name: "Industry 2-2" }],
    },
    {
      name: "Sector 1",
      children: [
        { name: "Industry 1-1" },
        { name: "Industry 1-2" },
        { name: "Industry 1-3" },
      ],
    },
    {
      name: "Sector 2",
      children: [{ name: "Industry 2-1" }, { name: "Industry 2-2" }],
    },
    {
      name: "Sector 1",
      children: [
        { name: "Industry 1-1" },
        { name: "Industry 1-2" },
        { name: "Industry 1-3" },
      ],
    },
    {
      name: "Sector 2",
      children: [{ name: "Industry 2-1" }, { name: "Industry 2-2" }],
    },
    {
      name: "Sector 1",
      children: [
        { name: "Industry 1-1" },
        { name: "Industry 1-2" },
        { name: "Industry 1-3" },
      ],
    },
    {
      name: "Sector 2",
      children: [{ name: "Industry 2-1" }, { name: "Industry 2-2" }],
    },
    {
      name: "Sector 1",
      children: [
        { name: "Industry 1-1" },
        { name: "Industry 1-2" },
        { name: "Industry 1-3" },
      ],
    },
    {
      name: "Sector 2",
      children: [{ name: "Industry 2-1" }, { name: "Industry 2-2" }],
    },

    // Add more sectors and industries as needed
  ],
};

const containerStyles = {
  width: "100%",
  height: "100%",
};

const Flowchart = () => (
  <div className="map">
    <div className="map1" style={containerStyles}>
      <div className="one">
        <Tree
          data={treeData}
          orientation="vertical"
          depthFactor={-200}
          // zoomable={false}
          // draggable={false}
          collapsible={true}
          shouldCollapseNeighborNodes={true}
        />
      </div>
    </div>
    <div className="map2" style={containerStyles}>
      <Tree
        data={treeData}
        orientation="vertical"
        depthFactor={200}
        // zoomable={false}
        // draggable={false}
        collapsible={true}
        pathClassFunc={() => "depth-factor"}
        shouldCollapseNeighborNodes={true}
      />
    </div>
  </div>
);

export default Flowchart;
