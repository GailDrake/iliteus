import React, { Component } from "react"
import Link from "gatsby-link"

class SideMenu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sidemenu: false,
    }
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
    const sidemenuSlide = this.state.sidemenu ? "sidemenu--slide" : ""
    const backgroundFade = this.state.sidemenu ? "sidemenu--fade" : ""

    return (
      <div className="sidemenu">
        <span className="sidemenu__burger">
          <div
            onClick={() => this.openSideMenu()}
            onKeyPress={this.handleKeyPress}
            role="button"
            tabIndex={0}
          >
            <svg width="30" height="30">
              <path d="M0,5 30,5" stroke="#fff" strokeWidth="5" />
              <path d="M0,14 30,14" stroke="#fff" strokeWidth="5" />
              <path d="M0,23 30,23" stroke="#fff" strokeWidth="5" />
            </svg>
          </div>
        </span>

        <div
          className={`sidemenu__background ${backgroundFade}`}
          onClick={() => this.closeSideMenu()}
          onKeyPress={this.handleKeyPress}
          role="button"
          tabIndex={0}
        ></div>
        <div className={`sidemenu__nav ${sidemenuSlide}`}>
          <span
            className="sidemenu__close"
            onClick={() => this.closeSideMenu()}
            onKeyPress={this.handleKeyPress}
            role="button"
            tabIndex={0}
          >
            &times;
          </span>
          <div className="sidemenu__list">
            <p className="sidemenu__heading">
              <span>About ILITE</span>
            </p>
            <div className="sidemenu__sublinks">
              <Link onClick={() => this.closeSideMenu()} to="/ilite/team">
                <span>Team</span>
              </Link>
              <Link onClick={() => this.closeSideMenu()} to="/ilite/media">
                <span>Media</span>
              </Link>
              <Link onClick={() => this.closeSideMenu()} to="/ilite/calendar">
                <span>Calendar</span>
              </Link>
              <Link onClick={() => this.closeSideMenu()} to="/ilite/history">
                <span>History</span>
              </Link>
              <Link onClick={() => this.closeSideMenu()} to="/ilite/mission">
                <span>Mission</span>
              </Link>
            </div>
            <p className="sidemenu__heading">
              <span>Outreach</span>
            </p>
            <div className="sidemenu__sublinks">
              <Link
                onClick={() => this.closeSideMenu()}
                to="/outreach/hostevents"
              >
                <span>Hosted Events</span>
              </Link>
              <Link
                onClick={() => this.closeSideMenu()}
                to="/outreach/summercamp"
              >
                <span>Summer Camps</span>
              </Link>
            </div>
            <Link
              onClick={() => this.closeSideMenu()}
              to="/sponsors"
              className="sidemenu__link"
            >
              <span>Sponsors</span>
            </Link>
            <Link
              onClick={() => this.closeSideMenu()}
              to="/getinvolved"
              className="sidemenu__link"
            >
              <span>Get Involved</span>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default SideMenu
