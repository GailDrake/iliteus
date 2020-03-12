import React from 'react';

const NewsCard = ({ image, title, children }) => {
  return (
    <div className="news-card">
      <div className="news-card__image-holder">
        <img src={require(`../../assets/${image}`)} className="news-card__image" alt="Newscard" />
      </div>
      <div className="news-card__text-box">
        <h3 className="news-card__title">{title}</h3>
        <p className="news-card__text">{children}</p>
      </div>
    </div>
  )
}
export default NewsCard;