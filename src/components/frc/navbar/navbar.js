import React from 'react';
import Link from 'gatsby-link';
import './navbar.less';

const FRCNavbar = ({ url, img }) =>
  <nav className="navigation">
    <p>ILITE Robotics</p>
    <ul>
      <li><Link to="/frc/" className="list-item">Home</Link></li>
      <li><Link to="/frc/getinvolved" className="list-item">Get Involved</Link></li>
      <li><Link to="/frc/competition" className="list-item">Competition</Link></li>
      <li><Link to="/frc/team" className="list-item">Team</Link></li>
      <li><Link to="/frc/media" className="list-item">Media</Link></li>
      <li><Link to="/frc/about" className="list-item">About</Link></li>
    </ul>
  </nav>

export default FRCNavbar;