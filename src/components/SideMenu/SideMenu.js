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

  dropDown2 = () => {
    const toggle = this.state.dropdown2 ? false : true;
    this.setState({
      dropdown2: toggle
    })
  }

  dropDown3 = () => {
    const toggle = this.state.dropdown3 ? false : true;
    this.setState({
      dropdown3: toggle
    })
  }

  render() {
    const sidemenu = this.state.sidemenu ? "250px" : "0px";
    const dropdown1 = this.state.dropdown1 ? "block" : "none";
    const dropdown2 = this.state.dropdown2 ? "block" : "none";
    const dropdown3 = this.state.dropdown3 ? "block" : "none";

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
            <div class="sidemenu__droptitle" onClick={() => this.dropDown1()}>
              <a href="#">FRC Robotics</a><span>&#9660;</span>
            </div>
            <div class="sidemenu__dropcontent" style={{ display: dropdown1 }}>
              <a href="#">Link</a>
              <a href="#">Link</a>
              <a href="#">Link</a>
            </div>
            <br />
            <br />
            <div class="sidemenu__droptitle" onClick={() => this.dropDown2()}>
              <a href="#">Hosted Events</a><span>&#9660;</span>
            </div>
            <div class="sidemenu__dropcontent" style={{ display: dropdown2 }}>
              <a href="#">Link</a>
              <a href="#">Link</a>
              <a href="#">Link</a>
            </div>
            <br />
            <br />
            <div class="sidemenu__droptitle" onClick={() => this.dropDown3()}>
              <a href="#">Outreach</a><span>&#9660;</span>
            </div>
            <div class="sidemenu__dropcontent" style={{ display: dropdown3 }}>
              <a href="#">Link</a>
              <a href="#">Link</a>
              <a href="#">Link</a>
            </div>
          </div>
        </div>
      </div >
    );
  }
}

export default SideMenu;