import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Favi from "../assets/icons/favicon.ico";

// import less here - once, for the whole app
import "./../config/main.less";

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="ILITE"
      meta={[
        { name: "description", content: "ILITE" },
        {
          name: "keywords",
          content: "Inspring Leaders in Technology and Engineering"
        },
        { name: "viewport", content: "width=device-width" }
      ]}
      link={[{ rel: "shortcut icon", type: "image/png", href: `${Favi}` }]}
    />

    <Navbar />
    <div>{children()}</div>
    <Footer />
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper;
