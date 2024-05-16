import React from "react";
import "./Aboutus.css";
import img1 from "./imgs/1.jpg";
import img2 from "./imgs/2.jpg";
import img3 from "./imgs/3.jpeg";
import img4 from "./imgs/4.png";

export default function Aboutus() {
  return (
    <div>
      <div className="heading">
        <h1>About Us</h1>
        <p>
          Welcome to PROFILIQ - Your Personal Portfolio Builder!
          <br />
          Why choose us?
        </p>
      </div>
      <div className="container">
        <section className="about">
          <div className="about-image">
            <img src={img1} />
          </div>
          <div className="about-content">
            <h2>
              <b>*User-Friendly:*</b>{" "}
            </h2>
            <p>
              Our platform is designed with simplicity in mind. You don't need
              to be a tech guru to create a stunning portfolio. Just follow our
              easy steps.
            </p>
            <a href="readmore.html" className="read-more">
              Read More
            </a>
          </div>
        </section>
      </div>
      <div className="container">
        <section className="about">
          <div className="about-content">
            <h2>
              <b>*Customization:*</b>{" "}
            </h2>
            <p>
              Personalize your portfolio to match your style. Choose from a
              variety of templates and layouts to make it truly yours.
            </p>
            <a href="readmore.html" className="read-more">
              Read More
            </a>
          </div>
          <div className="about-image2">
            <img src={img2} />
          </div>
        </section>
      </div>
      <div className="container">
        <section className="about">
          <div className="about-image">
            <img src={img3} />
          </div>
          <div className="about-content">
            <h2>
              <b>*Credential Submission:*</b>{" "}
            </h2>
            <p>
              Share your name, description, GitHub profile, LinkedIn profile,
              and attach your CV to start building your portfolio.
            </p>
            <a href="readmore.html" className="read-more">
              Read More
            </a>
          </div>
        </section>
      </div>
      <div className="container">
        <section className="about">
          <div className="about-content">
            <h2>
              <b>*Showcase Your Work:*</b>{" "}
            </h2>
            <p>
              {" "}
              Display your projects with ease. Upload your project files and
              project thumbnails effortlessly.
            </p>
            <a href="readmore.html" className="read-more">
              Read More
            </a>
          </div>
          <div className="about-image2">
            <img src={img4} />
          </div>
        </section>
      </div>
    </div>
  );
}
