import React from 'react';

const Banner = ({ children, title }) => {
  return (
    <div className="banner">
      <div className="banner__title">
        {title}
      </div>
      <div className="banner__subtitle">
        <h2>{children}</h2>
      </div>
    </div>
  )
}

export default Banner;