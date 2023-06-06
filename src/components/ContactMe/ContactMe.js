import React from "react";
import "./contactStyle.css";
import github from "./images/github.png";
import linkedin from "./images/linkedin.png";
import phone from "./images/phone.png";

const ContactMe = () => {
  return (
    <div className="mainContact">
      <h1>Here are the best ways to contact me...</h1>
      <div className="contactContainer">
        <div className="indContact">
          <a href="https://github.com/amartrain1">
            <img className="contactImg" src={github}></img>
          </a>
          <p>amartrain1</p>
        </div>
        <div className="indContact">
          <a href="https://www.linkedin.com/in/alexander-martrain-103668270/">
            <img className="contactImg" src={linkedin}></img>
          </a>
          <p></p>
        </div>
        <div className="indContact">
          <img className="contactImg" src={phone}></img>
          <p>(985) 302-9953</p>
        </div>
      </div>
      <h1>...or use this nonfunctional email form!</h1>
      <div className="formContainer">
        <form>
          <div className="inputParent">
            <label className="formEle" for="name">
              Name
            </label>
            <input
              className="formEle textBox"
              type="text"
              id="name"
              name="name"
              placeholder="Your name..."
            ></input>
          </div>
          <div className="inputParent">
            <label className="formEle" for="email">
              Email
            </label>
            <input
              className="formEle textBox"
              type="text"
              id="email"
              name="email"
              placeholder="Your email..."
            ></input>
          </div>
          <div className="inputParent">
            <label className="formEle" for="message">
              Message
            </label>
            <textarea
              className="formEle textBox"
              id="message"
              name="message"
              placeholder="Write your message here..."
            ></textarea>
          </div>
          <div className="inputParent">
            <input
              className="submit"
              type="submit"
              value="Submit"
            ></input>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
