import React from 'react';
import Banner from '../../components/banner';
<<<<<<< HEAD
import PropTypes from 'prop-types';
=======
>>>>>>> origin/nicholas-template

const Container = ({ division, title, subtitle, children }) => {
  return (
    <div className={`container ${division}`}>
      <Banner title={title}>{subtitle}</Banner>
      <div className="container__bar"></div>
      <div className="container__content">
        {children}
      </div>
    </div>
  );
};

export default Container;