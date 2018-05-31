import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Navbar from '../components/Navbar';
import Overbar from '../components/overbar';
import Footer from '../components/footer';

// import less here - once, for the whole app
import './../config/main.less';

const links = [
  { name: "Summer Camps", url: "/outreach/summer-camps" },
  { name: "FIRST Lego League", url: "/outreach/fll" },
  { name: "Hosted Events", url: "/outreach/hosted-events" },
  { name: "Home", url: "/outreach/" }
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
