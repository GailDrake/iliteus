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
      iliteDropdown: this.state.iliteDropdown ? false : true,
      outreachDropdown: false,
    })
  }

  toggleOutreachDropdown = () => {
    this.setState({
      outreachDropdown: this.state.outreachDropdown ? false : true,
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
        : ""

    return (
      <nav className="navigation">
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
        <Link
          to="/"
          className="navigation__logo"
          onClick={() => this.closeAllDropdowns()}
          onKeyPress={this.handleKeyPress}
        />
        <ul className="navigation__list">
          <li>
            <div
              onClick={() => this.closeAllDropdowns()}
              onKeyPress={this.handleKeyPress}
              role="button"
              tabIndex={0}
            >
              <Link
                to="/getinvolved"
                activeClassName="navigation--underlined"
                className="navigation__list-item"
              >
                Get Involved
              </Link>
            </div>
          </li>
          <li>
            <div
              onClick={() => this.closeAllDropdowns()}
              onKeyPress={this.handleKeyPress}
              role="button"
              tabIndex={0}
            >
              <Link
                to="/sponsors"
                activeClassName="navigation--underlined"
                className="navigation__list-item"
              >
                Sponsors
              </Link>
            </div>
          </li>
          <li>
            <div
              onClick={() => this.toggleOutreachDropdown()}
              onKeyPress={this.handleKeyPress}
              role="button"
              tabIndex={0}
            >
              <Dropdown
                title="Outreach"
                links={outreachLinks}
                extended={this.state.outreachDropdown}
              />
            </div>
          </li>
          <li>
            <div
              onClick={() => this.toggleIliteDropdown()}
              onKeyPress={this.handleKeyPress}
              toggleExtended={this.toggleIliteDropdown}
              role="button"
              tabIndex={0}
            >
              <Dropdown
                title="About ILITE"
                links={iliteLinks}
                extended={this.state.iliteDropdown}
                toggleExtended={this.toggleIliteDropdown}
                onfocusout={()=>console.log("Focus out!")}
              />
            </div>
          </li>
        </ul>
        <div className="navigation__sidemenu">
          <SideMenu />
        </div>
      </nav>
    )
  }
}

export default Navbar
