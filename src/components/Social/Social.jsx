import React from "react";
import twitter from "../../assets/twitter.png";
import youtube from "../../assets/youtube.png";
import "./social.css";

const Social = () => {
  return (
    <section className="social">
      <div className="social__icons">
        <a href="">
          {" "}
          <img src={twitter} alt="twitter icon" />
        </a>
        <a href="">
          <img src={youtube} alt="youtube icon" />
        </a>
      </div>
    </section>
  );
};

export default Social;
