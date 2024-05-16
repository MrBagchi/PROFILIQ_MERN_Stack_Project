import React from "react";
import "./home.css";
import { useNavigate } from "react-router-dom";
import Layout from "../Layouts/Layout";
const Home = () => {
  const navigate = useNavigate();
  return (
    <Layout title={"Profiliq - Get Started"}>
      {/* <div className="container"> */}
      <section className="one">
        <div className="hero">
          {/* <nav>
            <img
              src="C:\Users\KIIT\Desktop\DAA project\profiliq-logos_black.png"
              className="logo"
            />
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="readmore.html">How it works</a>
              </li>
              <li>
                <a href="yas.html">About us</a>
              </li>
              <li>
                <a href="/profiliq">Profiliq</a>
              </li>
            </ul>
            <div>
              <a href="/login" className="btn">
                Log in
              </a>
            </div>
          </nav> */}
          <div className="content">
            <h1 className="anim">Exhibit your work with a online portfolio</h1>
            <p className="anim">
              From intuitive design features to built-in marketing tools,
              discover the complete solution for building a portfolio that
              stands out online.
            </p>
            <button onClick={() => navigate("/signup")} className="btn anim">
              Get Started
            </button>
          </div>
          <img
            src="C:\Users\KIIT\Desktop\DAA project\WhatsApp_Image_2023-10-11_at_22.09.15-removebg-preview.png"
            className="feature-img anim"
          />
        </div>
      </section>
      <section className="two">
        <h1>Second Page</h1>
      </section>
      <section className="three">
        <h1>Third Page</h1>
      </section>
      <section className="four">
        <h1>Fourth Page</h1>
      </section>
      {/* </div> */}
    </Layout>
  );
};

export default Home;
