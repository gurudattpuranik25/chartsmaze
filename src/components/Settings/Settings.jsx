import React, { useState } from "react";
import filter from "../../assets/filter.png";
import sort from "../../assets/sorting.png";
import "./settings.css";
import Filter from "../Filter/Filter";
import Sort from "../Sort/Sort";

const Settings = () => {
  const [isFilterActive, setIsFilterActive] = useState(true);

  const toggleActiveButton = (label) => {
    label === "filter" ? setIsFilterActive(true) : setIsFilterActive(false);
  };

  return (
    <div className="filter__page">
      <div className="filter__section">
        <section className="section__one">
          <div
            className={`filter__btn ${isFilterActive ? "active" : ""} `}
            onClick={() => toggleActiveButton("filter")}
          >
            <img className="filter__icons" src={filter} alt="filter icon" />
            <p>Filters</p>
          </div>
          <div
            className={`filter__btn ${isFilterActive ? "" : "active"} `}
            onClick={() => toggleActiveButton("sort")}
          >
            <img className="filter__icons" src={sort} alt="sort icon" />
            <p>Sort</p>
          </div>
        </section>
        <section className="partition"></section>
        <section className="section__two">
          {isFilterActive ? <Filter /> : <Sort />}
          <div className="action__btn">
            <button>Save</button>
            <button>Reset</button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Settings;
