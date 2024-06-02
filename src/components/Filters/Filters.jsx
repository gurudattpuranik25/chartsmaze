import React from "react";
import filter from "../../assets/filter.png";
import sort from "../../assets/sorting.png";
import "./filters.css";

const Filters = () => {
  return (
    <div className="filter__page">
      <div className="filter__section">
        <section className="section__one">
          <div className="filter__btn active">
            <img className="filter__icons" src={filter} alt="filter icon" />
            <p>Filters</p>
          </div>
          <div className="filter__btn">
            <img className="filter__icons" src={sort} alt="sort icon" />
            <p>Sort</p>
          </div>
        </section>
        <section className="partition"></section>
        <section className="section__two">
          <section className="filter__settings">
            <button className="toggle__btn">Technical Filters</button>
            <select name="" id="">
              <option value="">Load saved filters</option>
            </select>
          </section>
          <section className="filter__options">
            <div className="option">
              <div className="label">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Moving Averages</label>
              </div>
              <div className="input">
                <input type="text" />
              </div>
            </div>
            <div className="option">
              <div className="label">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Moving Averages</label>
              </div>
              <div className="input">
                <input type="text" />
              </div>
            </div>
            <div className="option">
              <div className="label">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Moving Averages</label>
              </div>
              <div className="input">
                <input type="text" />
              </div>
            </div>
            <div className="option">
              <div className="label">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Moving Averages</label>
              </div>
              <div className="input">
                <input type="text" />
              </div>
            </div>
            <div className="option">
              <div className="label">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Moving Averages</label>
              </div>
              <div className="input">
                <input type="text" />
              </div>
            </div>
            <div className="option">
              <div className="label">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Moving Averages</label>
              </div>
              <div className="input">
                <input type="text" />
              </div>
            </div>
            <div className="option">
              <div className="label">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Moving Averages</label>
              </div>
              <div className="input">
                <input type="text" />
              </div>
            </div>
            <div className="option">
              <div className="label">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Moving Averages</label>
              </div>
              <div className="input">
                <input type="text" />
              </div>
            </div>
            <div className="option">
              <div className="label">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Moving Averages</label>
              </div>
              <div className="input">
                <input type="text" />
              </div>
            </div>
            <div className="option">
              <div className="label">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Moving Averages</label>
              </div>
              <div className="input">
                <input type="text" />
              </div>
            </div>
            <div className="option">
              <div className="label">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Moving Averages</label>
              </div>
              <div className="input">
                <input type="text" />
              </div>
            </div>
            <div className="option">
              <div className="label">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Moving Averages</label>
              </div>
              <div className="input">
                <input type="text" />
              </div>
            </div>
            <div className="option">
              <div className="label">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Moving Averages</label>
              </div>
              <div className="input">
                <input type="text" />
              </div>
            </div>
            <div className="option">
              <div className="label">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Moving Averages</label>
              </div>
              <div className="input">
                <input type="text" />
              </div>
            </div>
            <div className="option">
              <div className="label">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Moving Averages</label>
              </div>
              <div className="input">
                <input type="text" />
              </div>
            </div>
            <div className="option">
              <div className="label">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Moving Averages</label>
              </div>
              <div className="input">
                <input type="text" />
              </div>
            </div>
            <div className="option">
              <div className="label">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Moving Averages</label>
              </div>
              <div className="input">
                <input type="text" />
              </div>
            </div>
            <div className="option">
              <div className="label">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Moving Averages</label>
              </div>
              <div className="input">
                <input type="text" />
              </div>
            </div>
          </section>
          <section className="action__btn">
            <button>Save</button>
            <button>Reset</button>
          </section>
        </section>
      </div>
    </div>
  );
};

export default Filters;
