import React from 'react';
import './event.less';

const Event = () =>
  <div>
    <div class="one_third animate" data-anim-delay="250" data-anim-type="fadeInUp">
      <div class="home__img-holder">
        <div class="home__img e1" />
      </div>
      <div class="addes">
        <em>
          <a
            href="https://www.google.com/maps/dir/''/battlefield+high+school/@38.8449798,-77.7005067,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x89b668be1850b531:0x54b85e4d7455f560!2m2!1d-77.6304667!2d38.8450007">
            <i class="fa fa-map-marker" />
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

export default Event;