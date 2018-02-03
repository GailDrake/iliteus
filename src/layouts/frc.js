import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import FRCNavbar from '../components/frc/navbar';
import Overbar from '../components/general/overbar';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="ILITE"
      meta={[
        { name: 'description', content: 'ILITE' },
        { name: 'keywords', content: 'Inspring Leaders in Technology and Engineering' },
      ]}
    />
    <Overbar theme="hosted-events"/>
    <FRCNavbar/>
    <div
      style={{
        margin: '0 auto',
        maxWidth: '100vw',
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper;