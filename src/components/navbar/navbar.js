import React, { Component } from "react"
import { Link } from "gatsby"
import SideMenu from "../SideMenu"
import Dropdown from "../Dropdown"

const iliteLinks = [
  {
    name: "Team",
    section: "ilite",
    file: "team",
  },
  {
    name: "Media",
    section: "ilite",
    file: "media",
  },
  {
    name: "Calendar",
    section: "ilite",
    file: "calendar",
  },
  {
    name: "History",
    section: "ilite",
    file: "history",
  },
  {
    name: "Mission",
    section: "ilite",
    file: "mission",
  },
]

const outreachLinks = [
  {
    name: "Hosted Events",
    section: "outreach",
    file: "hostevents",
  },
  {
    name: "Summer Camps",
    section: "outreach",
    file: "summercamp",
  },
  {
    name: "STEAM Expo",
    section: "external",
    file: "https://drakegd.wixsite.com/steamexpo"
  },
  {
    name: "Week 1",
    section: "external",
    file: "https://www.ilite.info"
  },
  {
    name: "IROC",
    section: "external",
    file: "http://irocoffseason.org/"
  }
]

class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      iliteDropdown: false,
      outreachDropdown: false,
    }
  }

  toggleIliteDropdown = () => {
    this.setState({
      iliteDropdown: !this.state.iliteDropdown,
      outreachDropdown: false,
    })
  }

  toggleOutreachDropdown = () => {
    this.setState({
      outreachDropdown: !this.state.outreachDropdown,
      iliteDropdown: false,
    })
  }

  closeAllDropdowns = () => {
    this.setState({
      iliteDropdown: false,
      outreachDropdown: false,
    })
  }

  render() {
    const backgroundOpen =
      this.state.iliteDropdown || this.state.outreachDropdown
        ? "dropdown__background--open"
        : "";

    return (
      <nav className="navigation" tabIndex={-1}>
        <Link
          to="/"
          className="navigation__logo navigation__focus-item--outer"
          onClick={() => this.closeAllDropdowns()}
          onKeyPress={this.handleKeyPress}
          tabIndex={0}
        >
          <div className="navigation__focus-item--inner" tabIndex={-1}></div>
        </Link>
        <div className="navigation__list">
          <ul>
            <li>
              <div
                onClick={() => this.toggleIliteDropdown()}
                onMouseEnter={() => this.toggleIliteDropdown()}
                onMouseLeave={() => this.closeAllDropdowns()}
                onKeyPress={(event) => {
                  const keyCode = event.key || event.keyCode;
                  if (keyCode === "Enter" || keyCode === 13) {
                    this.toggleIliteDropdown();
                  }
                }}
                onFocusOut={() => this.toggleIliteDropdown()}
                role="button"
                tabIndex={0}
                className="navigation__focus-item--outer">
                <div className="navigation__focus-item--inner" tabIndex={-1}>
                  <Dropdown
                    title="About ILITE"
                    links={iliteLinks}
                    extended={this.state.iliteDropdown}
                  />
                </div>
              </div>
            </li>
            <li>
              <div
                onClick={() => this.toggleOutreachDropdown()}
                onMouseEnter={() => this.toggleOutreachDropdown()}
                onMouseLeave={() => this.closeAllDropdowns()}
                onKeyPress={(event) => {
                  const keyCode = event.key || event.keyCode;
                  if (keyCode === "Enter" || keyCode === 13) {
                    this.toggleOutreachDropdown();
                  }
                }}
                role="button"
                tabIndex={0}
                className="navigation__focus-item--outer">
                <div className="navigation__focus-item--inner" id="navigation__outreachDropdown" tabIndex={-1}>
                  <Dropdown
                    title="Outreach"
                    links={outreachLinks}
                    extended={this.state.outreachDropdown}
                  />
                </div>
              </div>
            </li>
            <li>
              <Link
                to="/sponsors"
                activeClassName="navigation--underlined"
                className="navigation__list-item navigation__focus-item--outer"
                onClick={() => this.closeAllDropdowns()}
                tabIndex={0}
              >
                <span className="navigation__focus-item--inner" tabIndex={-1}>Sponsors</span>
              </Link>
            </li>
            <li>
              <Link
                to="/getinvolved"
                activeClassName="navigation--underlined"
                className="navigation__list-item navigation__focus-item--outer"
                onClick={() => this.closeAllDropdowns()}
                tabIndex={0}
              >
                <span className="navigation__focus-item--inner" tabIndex={-1}>Get Involved</span>
              </Link>
            </li>
          </ul>
        </div>
        <div
          className={`dropdown__background--main ${backgroundOpen}`}
          onClick={() => this.closeAllDropdowns()}
          role="button"
          tabIndex={0}
          onKeyPress={this.handleKeyPress}
        ></div>
        <div
          className={`dropdown__background--nav ${backgroundOpen}`}
          onClick={() => this.closeAllDropdowns()}
          role="button"
          tabIndex={0}
          onKeyPress={this.handleKeyPress}
        ></div>
        <div className="navigation__sidemenu">
          <SideMenu />
        </div>
      </nav >
    )
  }
}

export default Navbar
