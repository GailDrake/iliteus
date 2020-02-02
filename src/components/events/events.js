import React, { Component } from 'react';
import Googlemap from '../../IconComponents/Googlemap';
import Link from 'gatsby-link';

class Events extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, eventLink, date, image } = this.props;
    const getEventLinks = () => {
      return eventLink.substring(0, 4) === 'http'
        ?
        <li>
          <a href={eventLink} className="event__url" target="_blank" rel="noopener noreferrer">
            Learn More
          </a>
        </li>
        :
        <li>
          <Link to={eventLink} className="event__url">
            Learn More
        </Link>
        </li>
    };
    const path = image == 'images/RoverRuckus.jpg' ? 'event__image event__secondImage' : 'event__image';
    return (
      <div className="event">
        <div className="event__image-holder">
          <img className={path} src={require(`../../assets/${image}`)} />
        </div>
        <div className="event__details">
          <h3 className="event__header">{name}</h3>
          <p>{date}</p>
          <p>15000 Graduation Dr, Haymarket, VA 20169</p>
        </div>
        <div className="event__footer">
          <hr className="event__divider" />
          <div className="event__links">
            {getEventLinks()}
            <a className="event__location" href="https://www.google.com/maps/dir/''/battlefield+high+school/@38.8449798,-77.7005067,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x89b668be1850b531:0x54b85e4d7455f560!2m2!1d-77.6304667!2d38.8450007" target="_blank" rel="noopener noreferrer">
              Google Map
              </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Events;