import React from "react";
import "./cards.css";
import cardImg_1 from "../../assets/cardImg_1.png";
import cardImage1 from "../../assets/cardImage1.png";
import cardImage2 from "../../assets/cardImage2.png";
import cardImage3 from "../../assets/cardImage3.png";
import { Link } from "react-router-dom";

const Cards = () => {
  return (
    <div>
      <p id="card__title">
        What makes us <span>DIFFERENT</span> from others?
      </p>
      <section className="cards">
        <div className="card__container">
          <div className="card">
            <div className="card__front">
              <img src={cardImage1} className="card__image" alt="" />
              <h1 id="first__heading">SCANNERS</h1>
              <p className="card__text">
                Simplify Technical Analysis based screening and identify setups
                of your interest under 10 minutes
              </p>
            </div>
            <div className="card__back">
              {/* <img src={cardImage_1} className="card__image" alt="" /> */}
              <div className="card__background bg__one">
                <div className="card__links">
                  <Link className="link">Horizontal Resistance</Link>

                  <Link className="link">Tight Setup</Link>

                  <Link className="link">Volume Footprint</Link>

                  <Link className="link">Shakeout</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card__container">
          <div className="card">
            <div className="card__front">
              <img src={cardImage2} className="card__image" alt="" />
              <h1 id="second__heading">MARKET ANALYTICS</h1>
              <p className="card__text">
                Find strong sectors/industry and identify leaders in them
              </p>
            </div>
            <div className="card__back">
              {/* <img src={cardImage_1} className="card__image" alt="" /> */}
              <div className="card__background bg__two">
                <div className="card__links">
                  <Link className="link">Industry Analysis</Link>

                  <Link className="link">Market Breadth</Link>

                  <Link className="link">Top Gainers</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card__container">
          <div className="card">
            <div className="card__front">
              <img src={cardImage3} className="card__image" alt="" />
              <h1 id="third__heading">CREATE WATCHLIST</h1>
              <p className="card__text">
                Manage your watchlist and priotise stocks setups by analysing
                all parameters at one place in our website
              </p>
            </div>
            <div className="card__back">
              {/* <img src={cardImage_1} className="card__image" alt="" /> */}
              <div className="card__background bg__three">
                <div className="card__links">
                  <Link className="link">Create Watchlist</Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="card">
          <img src={cardImage_2} className="card__image" alt="" />
          <p className="card__text">
            Market breadth & industry-wise ranking for analyzing sector strength
          </p>
          <p className="card__btn">Checkout</p>
        </div>
        <div className="card">
          <img src={cardImage_3} className="card__image" alt="" />
          <p className="card__text">
            Hassle free transfer of names to trading view in a single click
          </p>
          <p className="card__btn">Checkout</p>
        </div> */}
      </section>
    </div>
  );
};

export default Cards;
