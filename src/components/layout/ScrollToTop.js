import React from "react";
import "../style/ScrollToTop.css";

const ScrollToTop = () => {
  window.addEventListener("scroll", function () {
    const scrollUp = document.querySelector(".scroll");
    if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
    else {
        scrollUp.classList.remove("show-scroll");
    }
  });
  
  return (
    <a href="#home" className="scroll">
      <i className="uil uil-arrow-up scrollup-icon"></i>
    </a>
  );
};

export default ScrollToTop;
