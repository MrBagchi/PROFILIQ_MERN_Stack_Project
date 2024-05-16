import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
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
import Layout from "../Layouts/Layout";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [answer, setAnswer] = useState("");
  const [newPassword, setPass] = useState("");
  const [confirmPassword, setCpass] = useState("");
  // const [auth, setAuth] = useAuth();
  const navigate = useNavigate();
  // const location = useLocation();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:8000/api/v1/auth/forgotpassword",
        {
          email,
          answer,
          newPassword,
          confirmPassword,
        }
      );
      console.log(res.data.success, res.data.message);
      if (res && res.data.success) {
        await toast.success(res.data.message);
        // window.location.href = "/login";
      } else {
        toast.error(res.data.message);
      }
      // console.log(email, password);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout title={"Profiliq- Forgot Password"}>
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

            {/* <!-- Right column container --> */}
            <div className=" custom-margin w-full max-w-xs mr-40 mt-9">
              <Card className="w-96">
                <CardHeader
                  variant="gradient"
                  color="blue"
                  className="mb-4 grid h-28 place-items-center"
                >
                  <Typography variant="h3" color="white">
                    Forgot Password?
                  </Typography>
                </CardHeader>
                <CardBody className="flex flex-col gap-4">
                  <Input
                    label="Email"
                    size="lg"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Input
                    label="What's you pet name?"
                    size="lg"
                    type="password"
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                  />
                  <Input
                    label="New Password"
                    size="lg"
                    type="password"
                    value={newPassword}
                    onChange={(e) => setPass(e.target.value)}
                  />
                  <Input
                    label="Confirm Password"
                    size="lg"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setCpass(e.target.value)}
                  />
                </CardBody>
                <CardFooter className="pt-0">
                  <Button
                    variant="gradient"
                    color="blue"
                    fullWidth
                    onClick={handleSubmit}
                  >
                    Change Password
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
