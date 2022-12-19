import React, { useEffect, useState } from "react";
import PortfolioItems from "./PortfolioItems";
import { projectsData, projectsDataNav } from "../data/PortfolioData";

const PortfolioWork = () => {
  const [item, setItem] = useState({ name: "all" });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if(item.name === "all") {
        setProjects(projectsData)
    } else {
        const newProjects = projectsData.filter((project) => (
            project.category.toLowerCase() === item.name
        ))
        setProjects(newProjects)
    }
  }, [item]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent.toLowerCase() });
    setActive(index);
  }
  
  return (
    <div>
      <div className="portfolio-filters">
        {projectsDataNav.map((item, index) => (
          <span onClick={(e) => {handleClick(e, index);}} className={`${active === index ? "active-portfolio" : ""} portfolio-item`} key={index}>
            {item.name}
          </span>
        ))}
      </div>
      <div className="portfolio-container container grid">
        {projects.map((item) => (
          <PortfolioItems item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default PortfolioWork;
