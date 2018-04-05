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
    const sidemenu = this.state.sidemenu ? "translateX(-250px)" : "translateX(0px)";
    const background = this.state.sidemenu ? "block" : "none";

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

        <div className="sidemenu__background" onClick={() => this.closeSideMenu()} style={{ display: background }}></div>
        <div className="sidemenu__nav" style={{ transform: sidemenu }}>
          <span className="sidemenu__close" onClick={() => this.closeSideMenu()}>&times;</span>
          <div className="sidemenu__list">
            <Link onClick={() => this.closeSideMenu()} to="/frc" className="sidemenu--link title">FRC Robotics</Link>
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
            <a href="http://irocoffseason.org/" onClick={() => this.closeSideMenu()} className="sidemenu--link">IROC</a>
            <br />
            <br />
            <a href="http://www.haymakerstemexpo.org/" onClick={() => this.closeSideMenu()} className="sidemenu--link">STEAM Expo</a>
          </div>
        </div>
      </div>
    );
  }
}

export default SideMenu;