import React, { useEffect } from "react";
import Frontend from "../layout/Frontend";
import WordPress from "../layout/WordPress";
import "../style/Skills.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Skills = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="skills section" id="skills">
      <h2 data-aos="fade-up" className="section-title">
        Skills
      </h2>
      <span data-aos="fade-up" className="section-subtitle">
        My technical level
      </span>
      <div className="skills-container container grid">
        <Frontend />
        <WordPress />
      </div>
    </section>
  );
};

export default Skills;
