import React from 'react';

const Banner = ({ children }) =>
  <div className="head-image inner-page">
    <div className="head-image-content clear">
      <div className="home-image-wrap clear">
        <div className="home-image-inner-content">
          <div className="headline-title">
            <h1>{children}</h1>
          </div>
          <div className="head-image__subheader"></div>
        </div>
      </div>
    </div>
  </div>

export default Banner;