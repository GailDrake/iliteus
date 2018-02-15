import React from 'react';

const Banner = ({ children, title }) => {
  return (
    <div className="banner">
      <div className="banner--title">
        {title}
      </div>
      <div className="banner--subtitle">
        <p>{children}</p>
      </div>
    </div>
  )
}

export default Banner;