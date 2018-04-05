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
      let filePath = `/${link.section}/${link.file}`;
      return (
        <li key={index}><Link to={filePath} className="navigation__list-item">{link.name}</Link></li>
      );
    });

    return (
      <nav className="navigation">
        <Link to="/" className="navigation__logo"></Link>
        <ul>
          {getLinks}
        </ul>
        <div className="navigation__sidemenu">
          <SideMenu />
        </div>
      </nav >
    );
  }
}

export default Navbar;
