import React, { Component } from 'react';
import Link from 'gatsby-link';

class SideMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidemenu: false,
    };
  }

  openSideMenu = () => {
    this.setState({
      sidemenu: true
    })
  }

  closeSideMenu = () => {
    this.setState({
      sidemenu: false
    })
  }

  render() {
    const sidemenuSlide = this.state.sidemenu ? "sidemenu--slide" : "";
    const backgroundFade = this.state.sidemenu ? "sidemenu--fade" : "";

    return (
      <div className="sidemenu" >
        <span className="sidemenu__burger">
          <div onClick={() => this.openSideMenu()}>
            <svg width="30" height="30">
              <path d="M0,5 30,5" stroke="#000" strokeWidth="5" />
              <path d="M0,14 30,14" stroke="#000" strokeWidth="5" />
              <path d="M0,23 30,23" stroke="#000" strokeWidth="5" />
            </svg>
          </div>
        </span>

        <div className={`sidemenu__background ${backgroundFade}`} onClick={() => this.closeSideMenu()}></div>
        <div className={`sidemenu__nav ${sidemenuSlide}`}>
          <span className="sidemenu__close" onClick={() => this.closeSideMenu()}>&times;</span>
          <div className="sidemenu__list">
            <Link onClick={() => this.closeSideMenu()} to="/frc" className="sidemenu__link title">FRC Robotics</Link>
            <div className="sidemenu__sublinks">
              <Link onClick={() => this.closeSideMenu()} to="/frc">Home</Link>
              <br />
              <Link onClick={() => this.closeSideMenu()} to="/frc/about">About</Link>
              <br />
              <Link onClick={() => this.closeSideMenu()} to="/frc/media">Media</Link>
              <br />
              <Link onClick={() => this.closeSideMenu()} to="/frc/team">Team</Link>
              <br />
              <Link onClick={() => this.closeSideMenu()} to="/frc/competition">Competition</Link>
              <br />
              <Link onClick={() => this.closeSideMenu()} to="/frc/getinvolved">Get Involved</Link>
            </div>
            <br />
            <br />
            <Link onClick={() => this.closeSideMenu()} to="/outreach" className="sidemenu__link title">Outreach</Link>
            <div className="sidemenu__sublinks">
              <Link onClick={() => this.closeSideMenu()} to="/outreach">Home</Link>
              <br />
              <Link onClick={() => this.closeSideMenu()} to="/outreach/FLL">FLL</Link>
              <br />
              <Link onClick={() => this.closeSideMenu()} to="/outreach/SummerCamps">Summer Camps</Link>
              <br />
              <a onClick={() => this.closeSideMenu()} href="http://www.haymakerstemexpo.org/">Steam Expo</a>
            </div>
            <br />
            <br />
            <a href="http://irocoffseason.org/" onClick={() => this.closeSideMenu()} className="sidemenu__link">IROC</a>
            <br />
            <br />
            <a href="http://www.haymakerstemexpo.org/" onClick={() => this.closeSideMenu()} className="sidemenu__link">STEAM Expo</a>
          </div>
        </div>
      </div>
    );
  }
}

export default SideMenu;