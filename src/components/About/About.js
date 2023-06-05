import React from "react";
import "./aboutStyle.css";
import photo from "./pfp.png";

const About = () => {
  return (
    <div className="main">
      <div className="about">
        <div className="imgAndText aboutEle">
          <div className="hey aboutEle">Hey! I'm Alex!</div>
          <img className="picture aboutEle" src={photo} alt="me"></img>
        </div>
        <p className='aboutParagraph aboutEle'>
          I am a Full Stack Web Developer who specializes in front end and design. I have a keen eye for design and detail. I started programming in early 2023 when I attended University of Text at Austin's Full Stack Coding Bootcamp and discovered a new passion.
        </p>
        <p className='aboutParagraph aboutEle'>
          I spent most of my elementary and high school years playing trumpet, playing in my high school's marching and jazz band. When I wasn't playing music, I was playing video games. Once I graduated and went to college, I decided I would get involved with esports rather than music. I met many people through esports who were experienced in coding, and they motivated me to learn more about it. That pushed me to attend the bootcamp and now, I am here! Thank you for reading and feel free to look through my projects and resume, and feel more than free to contact me if you would like more info!
        </p>
      </div>
    </div>
  );
};

export default About;