import React from "react";
import "./testimonials.css";
import twitter_1 from "../../assets/twitter_1.png";
import twitter_2 from "../../assets/twitter_2.png";
import twitter_3 from "../../assets/twitter_3.png";
import twitter_4 from "../../assets/twitter_4.png";
import twitter_5 from "../../assets/twitter_5.png";
import twitter_6 from "../../assets/twitter_6.png";
import twitter_7 from "../../assets/twitter_7.png";
import twitter_8 from "../../assets/twitter_8.png";

const Testimonials = () => {
  return (
    <div className="testimonials__background">
      <p id="heading">Testimonials</p>
      <section className="testimonials">
        <img src={twitter_2} alt="twitter comments" />
        <img src={twitter_5} alt="twitter comments" />
        <img src={twitter_6} alt="twitter comments" />
        <img src={twitter_3} alt="twitter comments" />
        <img src={twitter_1} alt="twitter comments" />
        <img src={twitter_7} alt="twitter comments" />
        {/* <img src={twitter_4} alt="" /> */}
        {/* <img src={twitter_8} alt="" /> */}
      </section>
    </div>
  );
};

export default Testimonials;
