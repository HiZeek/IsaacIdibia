import React, { useEffect } from "react";
import PortfolioWork from "../layout/PortfolioWork";
import "../style/Portfolio.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Portfolio = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="portfolio section" id="portfolio">
      <h2 data-aos="fade-up" className="section-title">
        Portfolio
      </h2>
      <span data-aos="fade-up" className="section-subtitle">
        My recent works
      </span>
      <PortfolioWork />
    </section>
  );
};

export default Portfolio;
