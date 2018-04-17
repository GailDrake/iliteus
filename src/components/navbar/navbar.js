import React, { Component } from 'react';
import Link from 'gatsby-link';
import SideMenu from '../SideMenu';

class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { links } = this.props;
    const getLinks = links.map((link, index) => {
      console.log(link.url);

      return link.url.substring(0, 4) === 'http'
        ?
        <li key={index}>
          <a href={link.url} className="navigation__list-item">
            {link.name}
          </a>
        </li>
        :
        <li key={index}>
          <Link to={link.url} className="navigation__list-item">
            {link.name}
          </Link>
        </li>
    });

    return (
      <nav className="navigation">
        <Link to="/frc" className="navigation__logo"></Link>
        <ul>
          {getLinks}
        </ul>
        <div className="navigation__sidemenu">
          <SideMenu />
        </div>
      </nav>
    );
  }
}

export default Navbar;
