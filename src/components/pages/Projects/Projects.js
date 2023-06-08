import React, { useEffect } from "react";
import "./projectsStyle.css";
import dungeon from "./images/DungeonGame-Screenshot.png";
import movie from "./images/MovieNight-Screenshot.png";

const Projects = () => {
  useEffect(() => {
    document.title = 'Portfolio | Projects'
  })
  return (
    <div className="mainProjects">
      <div className="openClose projectEle">
      <i>Here are some of my projects...</i>
      </div>
      <div className="projects">
        <div className="indProject projectEle">
          <a href="https://dungeon-crawler-d.herokuapp.com/">
            <img
              className="projectImg aSize"
              src={dungeon}
              alt="movie search app"
            ></img>
          </a>
          <div className="projectTitle projectEle">
            <h2>OG Dungeon Crawler</h2>
          </div>
          <p className="projectDesc projectEle">
            OG Dungeon Crawler is an early NES themed RPG where you are a
            character moving through dungeon levels.
          </p>
        </div>
        <div className="indProject projectEle">
          <a href="https://lkrum.github.io/Movie-Night/">
            <img
              className="projectImg aSize"
              src={movie}
              alt="movie search app"
            ></img>
          </a>
          <div className="projectTitle projectEle">
            <h2>Movie Night</h2>
          </div>
          <p className="projectDesc projectEle">
            Movie Night is your go-to app to find any movie you want, based off
            title or genre.
          </p>
        </div>
      </div>
      <div className="openClose projectEle">
        <i>...and there are many more to come!</i>
      </div>
    </div>
  );
};

export default Projects;
