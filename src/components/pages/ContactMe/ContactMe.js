import React, { useRef, useState, useEffect } from "react";
import "./contactStyle.css";
import github from "./images/githubDark.png";
import linkedin from "./images/linkedin.png";
import phone from "./images/phoneDark.png";
import emailjs from "@emailjs/browser";

const ContactMe = () => {
  useEffect(() => {
    document.title = 'Portfolio | Contact Me'  
  })

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mlymv7f",
        "template_4m825xl",
        form.current,
        "l_yVZmdwu1Qjov6PF"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const [inputValues, setInputValues] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValues((prevInputValues) => ({
      ...prevInputValues,
      [name]: value,
    }));
  };

  const [submit, setSubmit] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmit(true);
      setInputValues({
        user_name: "",
        user_email: "",
        message: "",
      });
    }, 1);
  };

  return (
    <div className="mainContact">
      <div className="topBottom">
        <i>Here are the best ways to contact me...</i>
      </div>
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
      <div className="topBottom">
        <i>...or use this email form!</i>
      </div>
      <div className="formContainer">
        <form ref={form} onSubmit={sendEmail}>
          <div className="inputParent">
            <label className="formEle" for="name">
              Name
            </label>
            <input
              className="formEle textBox"
              type="text"
              value={inputValues.user_name}
              onChange={handleInputChange}
              id="name"
              name="user_name"
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
              onChange={handleInputChange}
              value={inputValues.user_email}
              id="email"
              name="user_email"
              placeholder="Your email..."
            ></input>
          </div>
          <div className="inputParent">
            <label className="formEle" for="message">
              Message
            </label>
            <textarea
              className="formEle textBox"
              value={inputValues.message}
              onChange={handleInputChange}
              id="message"
              name="message"
              placeholder="Write your message here..."
            ></textarea>
          </div>
          <p className={!submit ? "hidden" : "popUp"}>
            <i>Thanks for your message! I'll get back to you soon!</i>
          </p>
          <div className="inputParent">
            <input
              className="submit"
              type="submit"
              value="Send"
              onClick={handleSubmit}
            ></input>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
