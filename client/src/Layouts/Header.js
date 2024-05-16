import "../pages/header.css";
// import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/auth";
import { toast } from "react-hot-toast";

import swal from "sweetalert";

import { Button } from "@material-tailwind/react";
export default function Header() {
  const navigate = useNavigate();
  const [auth, setAuth] = useAuth();
  const handleLogout = () => {
    swal({
      title: "Are you sure you want to logout?",
      text: "You will be logged out of the system.",
      icon: "warning",
      buttons: ["No", "Yes"],
    }).then((value) => {
      if (value) {
        setAuth({
          ...auth,
          user: null,
          token: "",
        });
        localStorage.removeItem("portfolio");
        localStorage.removeItem("auth");
        toast.success("Logged out Successfully!");

        window.location.href = "/";
      }
    });
  };

  return (
    <div className="body">
      <section className="one">
        <div className="hero">
          <nav className="nav">
            <img src={logo} class="logo" />
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="howitworks.html">Whatweare</a>
              </li>
              <li>
                <a href="aboutus.html">About us</a>
              </li>
              <li>
                <a href="/profiliqs">Profiliq</a>
              </li>
              <li>
                <a href="/go-premium">Go premium</a>
              </li>
            </ul>
            <div>
              <a href="#" class="btn">
                Log in
              </a>
            </div>
          </nav>
        </div>
      </section>
          
    </div>
  );
}
