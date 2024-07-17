import React from "react";
import IndustryPerformance from "../IndustryPerformance/IndustryPerformance";
import IndustryRank from "../IndustryRank/IndustryRank";
import "./industry.css";

const Industry = () => {
  return (
    <div className="industry__page">
      <section className="industry__info">
        <div className="industry__name">
          <p className="heading__tags">Industry</p>
          <div className="info__tags">PUMPS</div>
        </div>
        <div className="number__of__stocks">
          <p className="heading__tags">Number of Stocks</p>
          <div className="info__tags">5</div>
        </div>
        <div className="market__cap">
          <p className="heading__tags">Group Market Cap(Cr.)</p>
          <div className="info__tags">45645</div>
        </div>
      </section>
      <section className="industry__graphs">
        <div class="chart">
          <IndustryPerformance />
        </div>
        <div class="chart">
          <IndustryRank />
        </div>
      </section>
    </div>
  );
};

export default Industry;
