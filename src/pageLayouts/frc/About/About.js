import React from 'react';
// import classnames from 'classnames';

const About = (props) => {
  return (
    <div className='about'>
      <h1>This is the about page</h1>
    </div>
  );
};

About.propTypes = {
  name: PropTypes.string.required
};

export default About;
