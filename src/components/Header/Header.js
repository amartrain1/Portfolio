import React from "react";
import "./style.css";

const Header = () => {
  return (
    <div className="headerNav">
      <header>
        <h1>Alexander Martrain</h1>
      </header>
      <nav>
        <ul>
          <li><a href='#about'>About Me</a></li>
          <li><a href='#projects'>Projects</a></li>
          <li><a href='#contact'>Contact Me</a></li>
          <li><a href='#resume'>Resume</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
