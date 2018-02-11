import React from 'react';
import FontAwesome from 'react-fontawesome';
// import './event.less';

const Events = ({ name, eventLink, date }) =>
  <div>
    <div>
      <img src='http://freenaturestock.s3.amazonaws.com/1136.jpg' />
    </div>
    <div>
      <a href="https://www.google.com/maps/dir/''/battlefield+high+school/@38.8449798,-77.7005067,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x89b668be1850b531:0x54b85e4d7455f560!2m2!1d-77.6304667!2d38.8450007">Google Map</a>
      <a href="http://www.irocoffseason.org">{name}</a><br />
      <div>
        <strong>{date}</strong><br />
        15000 Graduation Dr, Haymarket, VA 20169
      </div>
    </div>
  </div>

export default Events;