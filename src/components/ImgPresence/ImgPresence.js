import React, { Component } from 'react';
import Link from 'gatsby-link';

class ImgPresence extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, description, image } = this.props;
    const path = image == 'images/RoverRuckus.jpg' ? 'event__image event__secondImage' : 'event__image';
    return (
        <div className="event">
          <div className="event__image-holder">
            <img className={path} src={require(`../../assets/${image}`)} />
          </div>
          <div className="event__details">
            <h3 className="event__header">{name}</h3>
            <p>{description}</p>
          </div>
        </div>
    );
  }
}

export default ImgPresence;