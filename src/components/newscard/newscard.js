import React from 'react';
import Link from 'gatsby-link';
// import ilitelogo from '../../assets/images/logos/ilite-logo.png';

const NewsCard = ({ image, title, children }) => {
  return (
    <div className="news-card">
      <div className="news-card__image-holder">
        <img src={image} className="news-card__image" />
      </div>
      <div className="news-card__text-box">
        <h3 className="news-card__title">{title}</h3>
        <p className="news-card__text">{children}</p>
      </div>
    </div>
  )
}
export default NewsCard;