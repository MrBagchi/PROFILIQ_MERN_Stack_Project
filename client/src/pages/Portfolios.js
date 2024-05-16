import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import Button from "react-bootstrap/Button";
import Layout from "../Layouts/Layout";
import "boxicons/css/boxicons.min.css";

import axios from "axios";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";
import "../images/Main.css";
import male from "../images/male.jpg";
import female from "../images/female.jpg";
import { useAuth } from "../contexts/auth";
// import PageNotFound from "./PageNotFound";

function Portfolios() {
  const [portfolios, setPortfolios] = useState([]);
  const [auth, setAuth] = useAuth();
  const getPortfolios = async (e) => {
    try {
      // console.log(!auth.user.role);
      const { data } = await axios.get(
        "http://localhost:8000/api/v1/portfolio/get-portfolios"
      );
      // console.log(data);
      if (data.success) {
        setPortfolios(data.portfolios);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPortfolios();
  }, []);

  return (
    <Layout title={"Profiliq - Users"}>
      <div className="card-container">
        <h2 style={{ marginTop: "20px" }}>Profiliqs</h2>
        <div className="con">
          {portfolios.map((p) => (
            <Card className="w-96" key={p.email}>
              <CardHeader floated={false} className="h-80">
                <img
                  src={p.gender === "Male" ? male : female}
                  alt="profilepicture"
                />
              </CardHeader>
              <CardBody className="text-center">
                <Typography variant="h4" color="blue-gray" className="mb-2">
                  {p.firstName} {p.lastName}
                </Typography>
                <Typography
                  color="blue-gray"
                  className="font-medium"
                  textGradient
                >
                  Interesetd in {p.domain}
                </Typography>
                <Typography color="gray">{p.description}</Typography>

                <Typography color="gray">Email: {p.email}</Typography>
                <Typography color="gray">Contact: {p.contact}</Typography>
              </CardBody>
              <CardFooter className="flex justify-center gap-7 pt-2">
                <Tooltip content="Follow">
                  <Typography variant="lead" color="red" textGradient>
                    <Link to={`${p.githuburl}`}>
                      <i className="bx bxl-github bx-lg" />
                    </Link>
                  </Typography>
                </Tooltip>
                <Tooltip content="Follow">
                  <Typography variant="lead" color="purple" textGradient>
                    <Link to={`${p.linkedinurl}`}>
                      <i className="bx bxl-linkedin bx-lg" />
                    </Link>
                  </Typography>
                </Tooltip>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default Portfolios;
