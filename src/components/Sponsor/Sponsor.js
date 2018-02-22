import React from 'react';
import Link from 'gatsby-link';

const Sponsor = ({ children, image, url, name }) => {
  return (
    <div className="sponsor">
      <div className="sponsor__image-holder">
        <a href={url} className="sponsor__image">
          <img src={image} alt={name} />
        </a>
      </div>
      <div className="sponsor__text">
        <span>{children}</span>
      </div>
    </div>
  );
}

export default Sponsor;