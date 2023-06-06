import React from "react";
import "./headerStyle.css";

//! have active class ready

const Header = ({ pageName, handlePageChange }) => {
  return (
    <div className="mainHeaderNav">
      <header>
        <h1>Alexander Martrain</h1>
      </header>
      <nav>
        <ul>
          <li>
            <a
              href="#about"
              onClick={() => handlePageChange("About")}
              className={pageName === "About" ? "active" : ""}
            >
              About Me
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={() => handlePageChange("Projects")}
              className={pageName === "Projects" ? "active" : ""}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={() => handlePageChange("Contact")}
              className={pageName === "Contact" ? "active" : ""}
            >
              Contact Me
            </a>
          </li>
          <li>
            <a
              href="#resume"
              onClick={() => handlePageChange("Resume")}
              className={pageName === "Resume" ? "active" : ""}
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
