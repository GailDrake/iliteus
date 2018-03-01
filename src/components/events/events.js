import React from 'react';

const Events = ({ name, eventLink, date, image }) =>
  <div className="event">
    <div>
      <img className="event__image" src={require(`../../assets/${image}`)} />
    </div>
    <div className="event__details">
      <h3 className="event__header">{name}</h3>
      <p>{date}</p>
      15000 Graduation Dr, Haymarket, VA 20169
      </div>
    <hr className="event__divider" />
    <div className="event__links">
      <a className="event__url" href="http://www.irocoffseason.org">Learn More</a>
      <a className="event__location" href="https://www.google.com/maps/dir/''/battlefield+high+school/@38.8449798,-77.7005067,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x89b668be1850b531:0x54b85e4d7455f560!2m2!1d-77.6304667!2d38.8450007">Google Map</a>
    </div>
  </div>

export default Events;