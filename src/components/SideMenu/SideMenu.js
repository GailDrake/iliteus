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
      sidemenu: true,
    })
  }

  closeSideMenu = () => {
    this.setState({
      sidemenu: false,
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
            <Link onClick={() => this.closeSideMenu()} to="/ilite" className="sidemenu__link"><span>About ILITE</span></Link>
            <div className="sidemenu__sublinks">
              <Link onClick={() => this.closeSideMenu()} to="/ilite/about"><span>About</span></Link>
              <Link onClick={() => this.closeSideMenu()} to="/ilite/sponsors"><span>Sponsors</span></Link>
              <Link onClick={() => this.closeSideMenu()} to="/ilite/getinvolved"><span>Get Involved</span></Link>
            </div>
            <Link onClick={() => this.closeSideMenu()} to="/frc" className="sidemenu__link"><span>FRC Robotics</span></Link>
            <div className="sidemenu__sublinks">
              <Link onClick={() => this.closeSideMenu()} to="/frc/team"><span>Team</span></Link>
              <Link onClick={() => this.closeSideMenu()} to="/frc/competition"><span>Competitions</span></Link>
              <Link onClick={() => this.closeSideMenu()} to="/frc/media"><span>Media</span></Link>
            </div>
            <Link onClick={() => this.closeSideMenu()} to="/outreach" className="sidemenu__link"><span>Outreach</span></Link>
            <div className="sidemenu__sublinks">
              <Link onClick={() => this.closeSideMenu()} to="/outreach/HostedEvents"><span>Hosted Events</span></Link>
              <Link onClick={() => this.closeSideMenu()} to="/outreach/FLL"><span>FLL</span></Link>
              <Link onClick={() => this.closeSideMenu()} to="/outreach/SummerCamps"><span>Summer Camps</span></Link>
            </div>
            <a href="http://www.ilite.info" onClick={() => this.closeSideMenu()} className="sidemenu__link"><span>Week 1 FRC Event</span></a>
          </div>
        </div>
      </div>
    );
  }
}

export default SideMenu;