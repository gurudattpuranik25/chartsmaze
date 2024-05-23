import React, { useRef } from "react";
import chart1 from "../../assets/chart1.png";
import chart2 from "../../assets/chart2.png";
import chart3 from "../../assets/chart3.png";
import chart4 from "../../assets/chart4.png";
import upArrow from "../../assets/up-arrow.png";
import Cards from "../Cards/Cards";
import Testimonials from "../Testimonials/Testimonials";
import Social from "../Social/Social";
import FAQ from "../FAQ/FAQ";
import "./home.css";

const Home = () => {
  const exploreBtnRef = useRef(null);
  const faqBtnRef = useRef(null);
  const backBtnRef = useRef(null);

  const scrollToCards = () => {
    exploreBtnRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToFAQs = () => {
    faqBtnRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToHero = () => {
    backBtnRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="home__page">
      <div ref={backBtnRef} className="hero__section">
        <section className="hero__details">
          <h1 id="hero__text">
            Find stock setups with <br />
            <div className="inner__tags">
              <span>
                HORIZONTAL RESISTANCE
                <br /> TIGHT CONSOLIDATION
                <br /> SHAKE OUTS
                <br /> VOLUME FOOTPRINT
                <br /> HORIZONTAL RESISTANCE
                <br /> TIGHT CONSOLIDATION
                <br /> SHAKE OUTS
                <br /> VOLUME FOOTPRINT
              </span>{" "}
            </div>
            <br />
            in a few minutes
          </h1>
          <div className="call__to__action__btns">
            <button id="hero__btn" onClick={scrollToCards}>
              Explore More
            </button>
            <button id="hero__btn" onClick={scrollToFAQs}>
              FAQs
            </button>
          </div>

          {/* <p id="help__text">
            Follow us on{" "}
            <span>
              <img src={twitter} className="logo" alt="twitter logo" />
            </span>{" "}
            & <img src={youtube} className="logo" alt="youtube logo" /> for
            latest updates{" "}
          </p> */}
          <p id="help__text">
            Explore your favorite setups and quickly evaluate their sector
            strength <br /> before adding to your watchlist
          </p>
        </section>
        <div className="charts">
          <img src={chart1} className="hero__chart" alt="chart" />
          <img src={chart2} className="hero__chart" alt="chart" />
          <img src={chart3} className="hero__chart" alt="chart" />
          <img src={chart4} className="hero__chart" alt="chart" />
          {/*<span>
          <img src={chart_2} id="hero__chart" alt="chart" />
          <img src={chart_3} id="hero__chart" alt="chart" />
          <img src={chart} id="hero__chart" alt="chart" />
          <img src={chart_2} id="hero__chart" alt="chart" />
          <img src={chart_3} id="hero__chart" alt="chart" />
          </span>*/}
        </div>
        {/* <img src={chart} id="hero__chart" alt="chart" /> */}
      </div>
      <div ref={exploreBtnRef} className="cards__section">
        <Cards />
      </div>
      <div className="testimonials__section">
        <Testimonials />
      </div>
      <div ref={faqBtnRef} className="faq__section">
        <FAQ />
        <img
          src={upArrow}
          id="up__arrow"
          alt="up arrow"
          onClick={scrollToHero}
        />
      </div>
      <div className="social__section">
        <Social />
      </div>
    </section>
  );
};

export default Home;
