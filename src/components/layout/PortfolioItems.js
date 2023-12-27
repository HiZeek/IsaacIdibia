import React from "react";

const PortfolioItems = ({ item }) => {
  return (
    <div data-aos={item.animation} className="portfolio-card">
      <img src={item.image} alt="Portfolio Works" className="portfolio-img" />
      <h3 className="portfolio-title">{item.title}</h3>
      <p className="portfolio-desc">{item.desc}</p>
      <a
        href={item.url}
        className="portfolio-btn"
        target="_blank"
        rel="noreferrer"
      >
        View <i className="bx bx-right-arrow-alt portfolio-btn-icon"></i>
      </a>
    </div>
  );
};

export default PortfolioItems;
