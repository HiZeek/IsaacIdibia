import React from 'react';
import Frontend from '../layout/Frontend';
import WordPress from '../layout/WordPress';
import "../style/Skills.css";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
        <h2 className="section-title">Skills</h2>
        <span className="section-subtitle">My technical level</span>
        <div className="skills-container container grid">
            <Frontend />
            <WordPress />
        </div>
    </section>
  )
}

export default Skills;