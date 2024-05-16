import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/auth";
import { toast } from "react-hot-toast";
import axios from "axios";
import Layout from "../Layouts/Layout";
import "./home.css";
import image from "../images/male.jpg";
import { Button } from "@material-tailwind/react";

export default function HomePage() {
  const [auth, setAuth] = useAuth();

  const [check, setCheck] = useState(false);
  const navigate = useNavigate();

  const checkUserPortfilio = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:8000/api/v1/portfolio/check-portfolio/${auth.user.email}`
      );

      if (data.success) {
        setCheck(true);

        localStorage.setItem("portfolio", JSON.stringify(data));
      } else {
        setCheck(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkUserPortfilio();
  });

  return (
    <Layout title={"Profiliq - Get Started"}>
      <div className="content">
        <h1 className="anim">Exhibit your work with a online portfolio</h1>
        <p className="anim">
          From intuitive design features to built-in marketing tools, discover
          the complete solution for building a portfolio that stands out online.
        </p>
        {auth.user ? (
          <>
            {!check ? (
              <Button
                variant="text"
                color="blue"
                onClick={() => navigate("/form")}
                className="flex items-center gap-2"
              >
                Create Portfolio{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </Button>
            ) : (
              <>
                <Button
                  variant="text"
                  color="blue"
                  onClick={() => navigate("/view-portfolio")}
                  className="flex items-center gap-2"
                >
                  View Portfolio{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </Button>
                <Button
                  variant="text"
                  color="blue"
                  onClick={() => navigate("/view-portfolio")}
                  className="flex items-center gap-2"
                >
                  Delete Portfolio{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </Button>
              </>
            )}
          </>
        ) : (
          <Button
            variant="text"
            color="blue"
            onClick={() => navigate("/signup")}
            className="flex items-center gap-2"
          >
            Get Started{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </Button>
        )}
        {/* <img src={image} className="feature-img anim" /> */}
      </div>
    </Layout>
  );
}
