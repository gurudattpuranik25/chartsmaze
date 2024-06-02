import React from "react";
import "../Settings/settings.css";

const Sort = () => {
  return (
    <>
      <section className="sort__section">
        <div className="sort__settings">
          <section className="sort__option">
            <div className="sort__labels">
              <label htmlFor="">Sort by : </label>
              <select name="" id="">
                <option value="">RS Rating</option>
              </select>
            </div>
            <div className="sort__order">
              <p>Order : </p>
              <input type="radio" name="order1" id="order1Asce" />
              <label htmlFor="order1Asce">Asce</label>
              <input type="radio" name="order1" id="order1Desc" />
              <label htmlFor="order1Desc">Desc</label>
            </div>
          </section>
          <section className="sort__option">
            <div className="sort__labels">
              <label htmlFor="">Sort by : </label>
              <select name="" id="">
                <option value="">RS Rating</option>
              </select>
            </div>
            <div className="sort__order">
              <p>Order : </p>
              <input type="radio" name="order2" id="order2Asce" />
              <label htmlFor="order2Asce">Asce</label>
              <input type="radio" name="order2" id="order2Desc" />
              <label htmlFor="order2Desc">Desc</label>
            </div>
          </section>
          <section className="sort__option">
            <div className="sort__labels">
              <label htmlFor="">Sort by : </label>
              <select name="" id="">
                <option value="">RS Rating</option>
              </select>
            </div>
            <div className="sort__order">
              <p>Order : </p>
              <input type="radio" name="order3" id="order3Asce" />
              <label htmlFor="order3Asce">Asce</label>
              <input type="radio" name="order3" id="order3Desc" />
              <label htmlFor="order3Desc">Desc</label>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Sort;
