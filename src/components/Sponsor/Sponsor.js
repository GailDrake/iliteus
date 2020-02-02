import React from 'react';
import Link from 'gatsby-link';

const Sponsor = ({ children, large, image, url, name }) => {
  const renderedImage = require(`../../assets/images/sponsors/${image}`);
  return (
    <div className="sponsor">
      <div className="sponsor__image-holder">
        <a href={url} className="sponsor__image" target="_blank" rel="noopener noreferrer">
          <img src={renderedImage} alt={name} />
        </a>
      </div>
      <div className="sponsor__text">
        <span>{children}</span>
      </div>
    </div>
  );
}

export default Sponsor;