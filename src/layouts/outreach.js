import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Navbar from '../components/Navbar';
import Overbar from '../components/overbar';
import Footer from '../components/footer';

// import less here - once, for the whole app
import './../config/main.less';

const links = [
  {
    name: "Summer Camps",
    section: "outreach",
    file: "SummerCamps",
  },
  {
    name: "FLL",
    section: "outreach",
    file: "Fll",
  },
  {
    name: "Hosted Events",
    section: "outreach",
    file: "HostedEvents",
  },
  {
    name: "Home",
    section: "outreach",
    file: "",
  }
];

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="ILITE"
      meta={[
        { name: 'description', content: 'ILITE' },
        { name: 'keywords', content: 'Inspring Leaders in Technology and Engineering' },
        { name: 'viewport', content: 'width=device-width' },
      ]}
    />

    <Overbar theme="frc" />
    <Navbar links={links} />
    <div>{children()}</div>
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper;
