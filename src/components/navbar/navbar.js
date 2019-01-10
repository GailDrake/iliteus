import React, { Component } from 'react';
import Link from 'gatsby-link';
import SideMenu from '../SideMenu';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.current = "";
  }

  currentCheck = (url) => {
    if (url.includes("about")) {
      this.current = "about";
    }
    else if (url.includes("media")) {
      this.current = "media";
    }
    else if (url.includes("team")) {
      this.current = "team";
    }
    else if (url.includes("competition")) {
      this.current = "competition";
    }
    else if (url.includes("Fll")) {
      this.current = "Fll"
    }
    else if (url.includes("SummerCamps")) {
      this.current = "SummerCamps";
    }
    else if (url.includes("sponsors")) {
      this.current = "sponsors";
    }
    else if (url.includes("getinvolved")) {
      this.current = "getinvolved";
    }
    else {
      this.current = "";
    }
  }

  render() {
    var url = window.location.href;
    this.currentCheck(url);
    const { links } = this.props;
    const getLinks = links.map((link, index) => {
      let filePath = `/${link.section}/${link.file}`;
      if (link.file == this.current) {
        return (
          <li key={index}><Link to={filePath} className={`navigation__list-item navbar--underlined`}>{link.name}</Link></li>
        );
      }
      else {
        return (
          <li key={index}><Link to={filePath} className={`navigation__list-item`}>{link.name}</Link></li>
        );
      }
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
