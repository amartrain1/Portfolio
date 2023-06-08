import React from "react";
import "./headerStyle.css";

// takes in pageName and handlePageChange in as props to assist the MainPage in changing pages
const Header = ({ pageName, handlePageChange }) => {
  return (
    <div className="mainHeaderNav">
      <header>
        <h1>Alexander Martrain</h1>
      </header>
      <div>
      <div className='quote'>"It's never too late to be what you might've been.” <br></br>- George Eliot</div>
      </div>
      <nav>
        <ul>
          <li>
            <a
              href="#about"
              // changes page name to About through the handlePageChange function
              onClick={() => handlePageChange("About")}
              className={pageName === "About" ? "active" : ""}
            >
              About Me
            </a>
          </li>
          <li>
            <a
              href="#projects"
              // changes page name to Projects through the handlePageChange function
              onClick={() => handlePageChange("Projects")}
              className={pageName === "Projects" ? "active" : ""}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              // changes page name to Contact through the handlePageChange function
              onClick={() => handlePageChange("Contact")}
              className={pageName === "Contact" ? "active" : ""}
            >
              Contact Me
            </a>
          </li>
          <li>
            <a
              href="#resume"
              // changes page name to Resume through the handlePageChange function
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
