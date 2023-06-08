import React, { useEffect } from "react";
import "./aboutStyle.css";
import photo from "./images/pfp.png";

const About = () => {
  useEffect(() => {
    document.title = 'Portfolio | About Me'
  })

  return (

      <div className="mainAbout">
        <div className="imgAndText aboutEle">
          <h2 className="hey aboutEle"><i>Hey! I'm Alex!</i></h2>
          <img className="picture aboutEle" src={photo} alt="me"></img>
        </div>
        <p className='aboutParagraph aboutEle'>
          I am a Full Stack Web Developer who specializes in front end and has a keen eye for design and detail. I started programming in early 2023 when I attended University of Texas Austin's Full Stack Coding Bootcamp and discovered a new passion.
        </p>
        <p className='aboutParagraph aboutEle'>
          I spent most of my elementary and high school years playing trumpet, playing in my high school's marching and jazz band. When I wasn't playing music, I was playing video games. Once I graduated and went to college, I decided I would pursue esports rather than music. I met many people through esports who were experienced in coding, and they motivated me to learn more about it. That pushed me to attend the bootcamp and now, I am here! Thank you for reading! Feel free to look through my projects and resume, and feel more than free to contact me if you would like more info!
        </p>
      </div>

  );
};

export default About;
