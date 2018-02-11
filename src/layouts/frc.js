import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import FRCNavbar from '../components/navbar';
import Overbar from '../components/overbar';

// import less here - once, for the whole app
import './../config/main.less';

const links = [
  {
    name: "Get Involved",
    section: "frc",
    file: "getinvolved",
  },
  {
    name: "Competition",
    section: "frc",
    file: "competition",
  },
  {
    name: "Team",
    section: "frc",
    file: "team",
  },
  {
    name: "Media",
    section: "frc",
    file: "media",
  },
  {
    name: "About",
    section: "frc",
    file: "about",
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

    <FRCNavbar links={links} />
    <Overbar theme="hosted-events" />
    <div>
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper;
