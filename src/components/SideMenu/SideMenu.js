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

  dropDown = () => {

  }

  render() {
    const sidemenu = this.state.sidemenu ? "250px" : "0px";

    return (
      <div className="sidemenu" >
        <span className="sidemenu__burger">
          <a href="#" onClick={() => this.openSideMenu()}>
            <svg width="30" height="30">
              <path d="M0,5 30,5" stroke="#000" strokeWidth="5" />
              <path d="M0,14 30,14" stroke="#000" strokeWidth="5" />
              <path d="M0,23 30,23" stroke="#000" strokeWidth="5" />
            </svg>
          </a>
        </span>

        <div id="sidemenu__menu" className="sidemenu__nav" style={{ width: sidemenu }}>
          <div className="sidemenu__top">
            <a href="#" className="sidemenu__close" onClick={() => this.closeSideMenu()}>&times;</a>
          </div>
          <div className="sidemenu__list">
            <a href="#" className="sidemenu__dropdown-title" onClick={() => this.dropDown()}>FRC Robotics</a>
            <br />
            <br />
            <a href="#">FTC Robotics</a>
            <br />
            <br />
            <a href="#">Hosted Events</a>
            <br />
            <br />
            <a href="#">Outreach</a>
          </div>
        </div>
      </div>
    );
  }
}

export default SideMenu;