import React from "react";
import '../style/Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container container">
        <h1 className="footer-title">Isaac</h1>
        <ul className="footer-list">
          <li>
            <a href="#about" className="footer-link">
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer-link">
              Projects
            </a>
          </li>
        </ul>
        <div className="footer-social">
          <a
            href="https://github.com/HiZeek"
            className="footer-social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i class="bx bxl-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/isaac-idibia/"
            className="footer-social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i class="bx bxl-linkedin"></i>
          </a>
          <a
            href="https://twitter.com/IsaacIdibia"
            className="footer-social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i class="bx bxl-twitter"></i>
          </a>
        </div>
        <span className="footer-copy">
            &#169; Isaac Idibia. All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
