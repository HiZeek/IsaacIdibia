import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Social = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div data-aos="fade-down" className="home-social">
      <a
        href="https://github.com/HiZeek"
        className="home-social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i class="uil uil-github-alt"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/isaac-idibia/"
        className="home-social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i class="uil uil-linkedin-alt"></i>
      </a>
      <a
        href="https://twitter.com/IsaacIdibia"
        className="home-social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i class="uil uil-twitter-alt"></i>
      </a>
    </div>
  );
};

export default Social;
