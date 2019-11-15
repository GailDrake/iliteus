import React from 'react';

const Banner = ({ children, title, bannerImage }) => {
  return (
    <div className="banner">
      <img src={require(`../../assets/images/frc/background/${bannerImage}`)} className="banner__image" />
      <div className="banner__text">
        <div className="banner__title">
          {title}
        </div>
        <div className="banner__subtitle">
          <p>{children}</p>
        </div>
      </div>
    </div>
  )
}

export default Banner;