import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./ViewPortfolio.css";
import "boxicons/css/boxicons.min.css";
const ViewPortfolio = () => {
  const [port, setPort] = useState({});

  const getPortfolio = async () => {
    try {
      const data = localStorage.getItem("portfolio");
      if (data) {
        const parseData = JSON.parse(data);
        const newport = {
          ...port,
          portfolio: parseData.data,
        };
        setPort(newport.portfolio);
        console.log(port);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPortfolio();
  }, []);

  return (
    <div className="bd">
      <header className="header">
        <a href="www.google.com" className="logo">
          Portfolio
        </a>
        <i className="bx bx-menu" id="menu-icon" />
        <nav className="navbar">
          <a href="#about">About</a>
          <a href="#services">Details</a>
          <a href="#contactme">Contact</a>
        </nav>
      </header>
      <section className="home" id="home">
        <div className="home-content">
          <h3>Hello, its me</h3>
          <h1>{port.firstName}</h1>
          <h3>Interesetd in {port.domain}</h3>
          <h4>Email:{port.email}</h4>
          <div className="social-media">
            <Link to={`${port.githuburl}`}>
              <i className="bx bxl-github" />
            </Link>

            <Link to={`${port.linkedinurl}`}>
              <i className="bx bxl-linkedin" />
            </Link>
          </div>
        </div>
      </section>
      <section className="about" id="about">
        <div className="about-img">
          <img src=" hj" alt="Any image" />
        </div>

        <div className="about-content">
          <h2 className="heading">
            About <span>Me!</span>
          </h2>
          <h3>{port.domain}</h3>
          <p>
            Welcome to My Website!.
            <br /> {port.description}
          </p>
          <a
            href="./pdf/read more.pdf"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          >
            Read More!
          </a>
        </div>
      </section>
      <section className="services" id="services">
        <div className="heading">
          Additional<span> INFORMATION</span>
        </div>
        <div className="services-container">
          <div className="services-box">
            <ul>
              <h3>
                Full Name:
                <span>
                  {port.firstName} {port.lastName}
                </span>
              </h3>
              <h3>
                Gender:<span>{port.gender}</span>
              </h3>
              <h3>
                Work Experience:<span>{port.workExperience}</span>
              </h3>
              <h3>
                Degree:<span>{port.degree}</span>
              </h3>
              <h3>
                Institute:<span>{port.institute}</span>
              </h3>
              <h3>
                Contact:<span>{port.contact}</span>
              </h3>
            </ul>
          </div>
        </div>
      </section>
      <section className="contactme" id="contactme">
        <div className="heading">
          Contact <span>Me</span>
        </div>
        <form action="https://formspree.io/f/xvonnlnl" method="POST">
          <div className="input-box">
            <input type="text" name="name" id="name" placeholder="Your Name" />
            <input type="email" name="email" id="email" placeholder="Email" />
          </div>
          <div className="input-box">
            <input
              type="text"
              name="phnno."
              id="phnno."
              placeholder="Phone no."
            />
            <input
              type="text"
              name="email_subject"
              id="email_subject"
              placeholder="Email Subject"
            />
          </div>
          <textarea
            name="message"
            id="message"
            cols={10}
            rows={5}
            placeholder="How May I Help You"
            defaultValue={""}
          />
          <button
            type="submit"
            value="Send message"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          >
            Send
          </button>
        </form>
      </section>
      <footer className="footer">
        <div className="footer-text">
          <p>Copyright © ; 2023 by Profilq | All Rights Resevered</p>
        </div>
        <div className="footer-iconTop">
          <a href="#home">
            <i className="bx bx-up-arrow-alt" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default ViewPortfolio;
