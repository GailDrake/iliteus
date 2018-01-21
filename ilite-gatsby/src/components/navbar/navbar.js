import React from 'react';
import Link from 'gatsby-link';
import './navbar.less';

const Navbar = () =>
  <nav className = "navigation">
    <p>ILITE Robotics</p>
    <ul>
      <li><Link to = "/" className = "list-item">Home</Link></li>
      <li><Link to = "/about" className = "list-item">About</Link></li>
    </ul>
  </nav>

export default Navbar;