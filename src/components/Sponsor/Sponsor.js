import React from 'react';

const Sponsor = ({ children, image, url, name }) => {
  return (
    <div className="sponsor">
      <div class="sponsor__image">
        <a href={url}>
          <img src={image} alt={name} />
        </a>
      </div>
      <div class="sponsor__text">
        <span>{children}</span>
      </div>
    </div>
  );
}

export default Sponsor;