import React from "react";
import Data from "../layout/Data";
import ScrollDown from "../layout/ScrollDown";
import Social from "../layout/Social";
import "../style/Hero.css";

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home-container container grid">
        <div className="home-content grid">
          <Social />
          <div className="home-img"></div>
          <Data />
        </div>
        <ScrollDown />
      </div>
    </section>
  );
};

export default Home;
