import React from 'react';
import FontAwesome from 'react-fontawesome';
// import './event.less';

const Events = ({ name, eventLink, date }) =>
  <div className="event">
    <div className="event__img-holder">
      <img src='http://freenaturestock.s3.amazonaws.com/1136.jpg' className="event__img" />
    </div>
    <div className="event__content">
      <a className="event__location-link" href="https://www.google.com/maps/dir/''/battlefield+high+school/@38.8449798,-77.7005067,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x89b668be1850b531:0x54b85e4d7455f560!2m2!1d-77.6304667!2d38.8450007">
        <FontAwesome name="map-marker" />
        Google Map
      </a>
      <a href="http://www.irocoffseason.org" className="event__link">{name}</a>
      <br />
      <div className="event__details">
        <strong>{date}</strong>
        <br />
        15000 Graduation Dr, Haymarket, VA 20169
      </div>
    </div>
  </div>

const Reference = () =>
  <div className="event">
    <div className="one_third">
      <div className="home__img-holder">
        <div className="home__img e1" />
      </div>
      <div className="addes">
        <em>
          <a
            href="https://www.google.com/maps/dir/''/battlefield+high+school/@38.8449798,-77.7005067,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x89b668be1850b531:0x54b85e4d7455f560!2m2!1d-77.6304667!2d38.8450007">
            <i className="fa fa-map-marker" />
            Google Map
          </a>
        </em>
        <strong>
          <a href="http://www.irocoffseason.org">FTC Robotics NoVA Regional</a>
        </strong>
        <strong>December 2th, 2017</strong> 15000 Graduation Dr, Haymarket, VA 20169
      </div>
    </div>
  </div>

export default Events;
