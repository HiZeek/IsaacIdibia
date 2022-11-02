import React from "react";
import "../style/Portfolio.css";

const Portfolio = () => {
  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section-title">Portfolio</h2>
      <span className="section-subtitle">My recent works</span>
      <div className="portfolio-container container grid">
        <article className="portfolio-item">
            <div className="portfolio-item-img"></div>
            <h3>Title</h3>
            <a href="www.google.com" className=""></a>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
