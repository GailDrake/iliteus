import React from 'react';

const Footer = () =>
  <div className="className">
    <div className="footer">
      <div className="footer__info">
        <div className="col">
          <h5 className="footer__header">CONTACT US</h5><a className="footer__link" href="mailto:gddrake@gmail.com">drakegd@pwcs.edu</a>
          <p className="footer__text">Coach Gail Drake</p>
          <p className="footer__text">(571)261-4726</p>
        </div>
        <div className="col">
          <h5 className="footer__header">LOCATION</h5><a className="footer__link" href="/about/contactus.php"><i className="fa fa-map-marker"></i> Map &amp; Directions</a>
          <p className="footer__text">ILITE Robotics</p>
          <p className="footer__text">15000 Graduation Drive</p>
          <p className="footer__text">Haymarket, VA 20169</p>
        </div>
        <div className="col">
          <h5 className="footer__header">CALENDAR</h5><a className="footer__link" href="/getinvolved/whereisilite.php"><i className="fa fa-calendar-o"></i> Team Events &amp; Schedule</a>
        </div>
        <div className="col">
          <h5 className="footer__header">GET CONNECTED</h5><a className="footer__social" href="https://www.facebook.com/iliterobotics/" target="_blank"><i className="fa fa-facebook"></i></a> <a className="footer__social" href="https://www.twitter.com/team1885" target="_blank"><i className="fa fa-twitter"></i></a> <a className="footer__social" href="https://www.youtube.com/channel/UCCWs22DHGwRloB613zOJ9UA" target="_blank"><i className="fa fa-youtube"></i></a> <a className="footer__social" href="https://www.instagram.com/team1885" target="_blank"><i className="fa fa-instagram"></i></a>
        </div>
      </div>
    </div>
    <div className="footer__copyright">
      <p>&copy; 2017 ILITE. All rights reserved.</p>
    </div>
  </div>

export default Footer;
