import React, { Component } from 'react';
import Link from 'gatsby-link';
import SideMenu from '../SideMenu';

class Navbar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { links } = this.props;
        return (
            <nav className="navigation">
                <Link to="/frc" className="navigation__logo"></Link>
                <ul>
                    {links.map((link, index) => {
                        console.log(link.url);

    return (
      <nav className="navigation">
        <Link to="/frc" className="navigation__logo"></Link>
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