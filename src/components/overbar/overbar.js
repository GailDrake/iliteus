import React from 'react';
import Link from 'gatsby-link';

const Overbar = ({ theme }) => {
  return (
    <nav>
      <ul className={`overbar__list ${theme}`}>
        <li><Link to="/frc" className="overbar__list-item">FRC Robotics</Link></li>
        <li><a href="http://irocoffseason.org" className="overbar__list-item">IROC Offseason</a></li>
        <li><a href="http://www.haymakerstemexpo.org" className="overbar__list-item">STEAM Expo</a></li>
        <li><Link to="/outreach" className="overbar__list-item">Outreach</Link></li>
      </ul>
    </nav>
  )
}

export default Overbar;