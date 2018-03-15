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
          <span className="sidemenu__close" onClick={() => this.closeSideMenu()}>&times;</span>
          <div className="sidemenu__list">
            <div class="sidemenu__droptitle" onClick={() => this.dropDown()}>
              <a href="#">FRC Robotics</a><span>&#9660;</span>
            </div>
            <br />
            <br />
            <div class="sidemenu__droptitle" onClick="">
              <a href="#">FTC Robotics</a><span>&#9660;</span>
            </div>
            <br />
            <br />
            <div class="sidemenu__droptitle" onClick="">
              <a href="#">Hosted Events</a><span>&#9660;</span>
            </div>
            <br />
            <br />
            <div class="sidemenu__droptitle" onClick="">
              <a href="#">Outreach</a><span>&#9660;</span>
            </div>
          </div>
        </div>
      </div >
    );
  }
}

export default SideMenu;