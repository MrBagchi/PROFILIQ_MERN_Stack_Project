import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Helmet } from "react-helmet";
import { Toaster } from "react-hot-toast";
const Layout = ({ children, title, description, keywords }) => {
  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Helmet>
      <Header />
      <main style={{ minHeight: "70vh" }}>
        <Toaster />
        {children}
        <Footer />
      </main>
    </div>
  );
};

Layout.defaultProps = {
  title: "Profiliq - Get Started",
  description: "mern stack project",
  keywords: "mern,react,node,mongodb",
};

export default Layout;
