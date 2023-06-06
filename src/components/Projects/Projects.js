import React from "react";
import "./projectsStyle.css";
import dungeon from "./images/DungeonGame-Screenshot.png";
import movie from "./images/MovieNight-Screenshot.png";

const Projects = () => {
  return (
    <div className="main">
      <div className="title projectEle">
        <h1>Projects</h1>
      </div>
      <div className="projects">
        <div className="indProject projectEle">
          <a href="https://lkrum.github.io/Movie-Night/">
            <img
              className="projectImg"
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
              className="projectImg"
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
      <div className="closer projectEle">
        <i>...and much more to come!</i>
      </div>
    </div>
  );
};

export default Projects;
