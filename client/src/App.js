import "./App.css";
import Aboutus from "./componenets/Aboutus";
import { Toaster } from "react-hot-toast";

import Form2 from "./componenets/Form2";
import Login from "./componenets/Login";
import Signup from "./componenets/Signup";
import Premium from "./pages/Premium";
import Portfolios from "./pages/Portfolios";
import ViewPortfolio from "./pages/ViewPortfolio";
import { Route, Routes } from "react-router-dom";
import ForgotPassword from "./pages/ForgotPassword";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <Toaster
        toastOptions={{
          // Define default options
          className: "",
          duration: 3000,
          style: {
            background: "#363636",
            color: "#fff",
          },

          // Default options for specific types
          success: {
            duration: 3000,
            theme: {
              primary: "green",
              secondary: "black",
            },
          },
        }}
      />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/form" element={<Form2 />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/profiliqs" element={<Portfolios />} />
        <Route path="/go-premium" element={<Premium />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/view-portfolio" element={<ViewPortfolio />} />
        {/* <Route path="/profiliq/undefined" element={<PageNotFound />} /> */}
      </Routes>
    </>
  );
}

export default App;
