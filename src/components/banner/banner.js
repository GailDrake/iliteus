import React from "react";

const Banner = ({ children, title }) => {
  return (
    <div className="banner">
      <div className="banner__text">
        <div className="banner__title">{title}</div>
        <div className="banner__subtitle">
          <p>{children}</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
