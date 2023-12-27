import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Frontend = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="skills-content" data-aos="zoom-out-up">
      <h3 className="skills-title">Frontend developer</h3>
      <div className="skills-box">
        <div className="skills-group">
          <div className="skills-data">
            <i class="bx bx-badge-check"></i>
            <div>
              <h3 className="skills-name">HTML</h3>
              <span className="skills-level">Expert</span>
            </div>
          </div>
          <div className="skills-data">
            <i class="bx bx-badge-check"></i>
            <div>
              <h3 className="skills-name">CSS</h3>
              <span className="skills-level">Advanced</span>
            </div>
          </div>
          <div className="skills-data">
            <i class="bx bx-badge-check"></i>
            <div>
              <h3 className="skills-name">JavaScript</h3>
              <span className="skills-level">Intermediate</span>
            </div>
          </div>
          <div className="skills-data">
            <i class="bx bx-badge-check"></i>
            <div>
              <h3 className="skills-name">Bootstrap</h3>
              <span className="skills-level">Intermediate</span>
            </div>
          </div>
          <div className="skills-data">
            <i class="bx bx-badge-check"></i>
            <div>
              <h3 className="skills-name">Tailwind</h3>
              <span className="skills-level">Intermediate</span>
            </div>
          </div>
          <div className="skills-data">
            <i class="bx bx-badge-check"></i>
            <div>
              <h3 className="skills-name">Git</h3>
              <span className="skills-level">Intermediate</span>
            </div>
          </div>
        </div>
        <div className="skills-group">
          <div className="skills-data">
            <i class="bx bx-badge-check"></i>
            <div>
              <h3 className="skills-name">GitHub</h3>
              <span className="skills-level">Intermediate</span>
            </div>
          </div>
          <div className="skills-data">
            <i class="bx bx-badge-check"></i>
            <div>
              <h3 className="skills-name">React JS</h3>
              <span className="skills-level">Intermediate</span>
            </div>
          </div>
          <div className="skills-data">
            <i class="bx bx-badge-check"></i>
            <div>
              <h3 className="skills-name">Redux</h3>
              <span className="skills-level">Intermediate</span>
            </div>
          </div>
          <div className="skills-data">
            <i class="bx bx-badge-check"></i>
            <div>
              <h3 className="skills-name">Next JS</h3>
              <span className="skills-level">Intermediate</span>
            </div>
          </div>
          <div className="skills-data">
            <i class="bx bx-badge-check"></i>
            <div>
              <h3 className="skills-name">TypeScript</h3>
              <span className="skills-level">Intermediate</span>
            </div>
          </div>
          <div className="skills-data">
            <i class="bx bx-badge-check"></i>
            <div>
              <h3 className="skills-name">Firebase</h3>
              <span className="skills-level">Intermediate</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontend;
