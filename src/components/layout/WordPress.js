import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const WordPress = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="skills-content" data-aos="zoom-out-up">
      <h3 className="skills-title">WordPress Designer</h3>
      <div className="skills-box">
        <div className="skills-group">
          <div className="skills-data">
            <i class="bx bx-badge-check"></i>
            <div>
              <h3 className="skills-name">Website Design</h3>
              <span className="skills-level">Expert</span>
            </div>
          </div>
          <div className="skills-data">
            <i class="bx bx-badge-check"></i>
            <div>
              <h3 className="skills-name">Customization</h3>
              <span className="skills-level">Expert</span>
            </div>
          </div>
          <div className="skills-data">
            <i class="bx bx-badge-check"></i>
            <div>
              <h3 className="skills-name">Content Upload</h3>
              <span className="skills-level">Expert</span>
            </div>
          </div>
        </div>
        <div className="skills-group">
          <div className="skills-data">
            <i class="bx bx-badge-check"></i>
            <div>
              <h3 className="skills-name">Bug Fix</h3>
              <span className="skills-level">Expert</span>
            </div>
          </div>
          <div className="skills-data">
            <i class="bx bx-badge-check"></i>
            <div>
              <h3 className="skills-name">Installations</h3>
              <span className="skills-level">Expert</span>
            </div>
          </div>
          <div className="skills-data">
            <i class="bx bx-badge-check"></i>
            <div>
              <h3 className="skills-name">Troubleshooting</h3>
              <span className="skills-level">Expert</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WordPress;
