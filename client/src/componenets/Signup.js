import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Layout from "../Layouts/Layout";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";
export default function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log({ name, email, password, answer });

      const res = await axios.post("http://localhost:8000/api/v1/auth/signup", {
        name,
        email,
        password,
        answer,
      });
      console.log(res);
      if (res.status === 201) {
        toast.success(res.data.message);
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout title={"Profilq - Create your account"}>
      <section className="h-screen bg-grey">
        <div className="h-full">
          {/* <!-- Left column container with background--> */}
          <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
            <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
              <img
                src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="w-full"
                alt="Sampleimage"
              />
            </div>

            <Card className="w-96">
              <CardHeader
                variant="gradient"
                color="blue"
                className="mb-4 grid h-28 place-items-center"
              >
                <Typography variant="h3" color="white">
                  Sign Up
                </Typography>
              </CardHeader>
              <CardBody className="flex flex-col gap-4">
                <Input
                  label="Name"
                  size="lg"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <Input
                  label="Email"
                  size="lg"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                  label="Password"
                  size="lg"
                  type="password"
                  value={password}
                  onChange={(e) => setPass(e.target.value)}
                />
                <Input
                  size="lg"
                  type="text"
                  label="What's your Pet Name?"
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                />
                <div className="-ml-2.5">
                  <Checkbox label="Remember Me" />
                </div>
              </CardBody>
              <CardFooter className="pt-0">
                <Button
                  variant="gradient"
                  color="blue"
                  fullWidth
                  onClick={handleSubmit}
                >
                  Sign Up
                </Button>
                <Typography
                  variant="small"
                  className="mt-6 flex justify-center"
                >
                  Already have an account?
                  <Typography
                    as="a"
                    href="/login"
                    variant="small"
                    color="blue"
                    className="ml-1 font-bold"
                  >
                    Sign up
                  </Typography>
                </Typography>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
}
