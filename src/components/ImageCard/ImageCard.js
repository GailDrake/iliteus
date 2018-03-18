import React from 'react';

const ImageCard = ({ children, image }) =>
  <div className="imageCard">
    <div className="imageCard__image-container">
      <img src={image} alt="" class="imageCard__image" />
    </div>
    <div className="imageCard__content">
      <p className="imageCard__desc">{children}</p>
    </div>
  </div>

export default ImageCard;