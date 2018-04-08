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
    name: 'District Competition',
    url: '/hosted-events/districts'
  },
  {
    name: 'Previous District Competition',
    url: '/hosted-events/predistricts'
  },
  {
    name: 'Steam Expo',
    url: 'https://haymakersteamexpo.org'
  },
  {
    name: 'Home',
    url: '/hosted-events/'
  },
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

    <Overbar theme="hosted-events" />
    <Navbar links={links} />
    <div>{children()}</div>
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper;
