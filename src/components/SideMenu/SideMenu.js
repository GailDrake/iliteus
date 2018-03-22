import React, { Component } from 'react';
import Link from 'gatsby-link';

class SideMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidemenu: false,
      dropdown1: false,
      dropdown2: false,
      dropdown3: false,
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

  dropDown1 = () => {
    const toggle = this.state.dropdown1 ? false : true;
    this.setState({
      dropdown1: toggle
    })
  }

  render() {
    const sidemenu = this.state.sidemenu ? "250px" : "0px";
    const dropdown1 = this.state.dropdown1 ? "279px" : "0px";

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

        <div className="sidemenu__nav" style={{ width: sidemenu }}>
          <span className="sidemenu__close" onClick={() => this.closeSideMenu()}>&times;</span>
          <div className="sidemenu__list">
            <div className="sidemenu__droptitle" onClick={() => this.dropDown1()}>
              <span className="sidemenu--title">FRC Robotics</span><span className="sidemenu--arrow">&#9660;</span>
            </div>
            <div className="sidemenu__dropcontent" style={{ height: dropdown1 }}>
              <Link onClick={() => this.closeSideMenu()} to="/frc">Home</Link>
              <Link onClick={() => this.closeSideMenu()} to="/frc/about">About</Link>
              <Link onClick={() => this.closeSideMenu()} to="/frc/media">Media</Link>
              <Link onClick={() => this.closeSideMenu()} to="/frc/team">Team</Link>
              <Link onClick={() => this.closeSideMenu()} to="/frc/competition">Competition</Link>
              <Link onClick={() => this.closeSideMenu()} to="/frc/getinvolved">Get Involved</Link>
            </div>
            <br />
            <br />
            <div className="sidemenu__droptitle">
              <a href="http://irocoffseason.org/" target="_blank" onClick={() => this.closeSideMenu()}>IROC</a>
            </div>
            <br />
            <br />
            <div className="sidemenu__droptitle">
              <a href="http://www.haymakerstemexpo.org/" target="_blank" onClick={() => this.closeSideMenu()}>STEAM Expo</a>
            </div>
          </div>
        </div>
      </div >
    );
  }
}

export default SideMenu;