import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import Navbar from "../components/Navbar";
import Overbar from "../components/overbar";
import Footer from "../components/footer";
import Logo from "../components/logo";
import Favi from "../assets/icons/favicon.ico";


// import less here - once, for the whole app
import "./../config/main.less";

const links = [
  {
    name: "Competition",
    section: "frc",
    file: "competition"
  },
  {
    name: "Team",
    section: "frc",
    file: "team"
  },
  {
    name: "Media",
    section: "frc",
    file: "media"
  },
  {
    name: "About",
    section: "frc",
    file: "about"
  }
];

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

    <Logo />
    <Overbar theme="frc" />
    <Navbar links={links} />
    <div>{children()}</div>
    <Footer />
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
