import React from 'react';

const Banner = ({ children, title }) => {
  return (
    <div className="banner">
<<<<<<< HEAD
      <div className="banner__title">
        {title}
      </div>
      <div className="banner__subtitle">
=======
      <div className="banner--title">
        {title}
      </div>
      <div className="banner--subtitle">
>>>>>>> origin/nicholas-template
        <p>{children}</p>
      </div>
    </div>
  )
}

export default Banner;