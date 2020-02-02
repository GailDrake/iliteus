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
    file: "hostedevents",
  },
  {
    name: "Summer Camps",
    section: "outreach",
    file: "summercamps",
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
    console.log(this.state.iliteDropdown + " " + this.state.outreachDropdown)
    const backgroundOpen =
      this.state.iliteDropdown || this.state.outreachDropdown
        ? "dropdown__background--open"
        : ""

    return (
      <nav className="navigation">
        <div
          className={`dropdown__background--main ${backgroundOpen}`}
          onClick={() => this.closeAllDropdowns()}
        ></div>
        <div
          className={`dropdown__background--nav ${backgroundOpen}`}
          onClick={() => this.closeAllDropdowns()}
        ></div>
        <Link
          to="/"
          className="navigation__logo"
          onClick={() => this.closeAllDropdowns()}
        />
        <ul className="navigation__list">
          <li onClick={() => this.closeAllDropdowns()}>
            <Link
              to="/getinvolved"
              activeClassName="navigation--underlined"
              className="navigation__list-item"
            >
              Get Involved
            </Link>
          </li>
          <li onClick={() => this.closeAllDropdowns()}>
            <Link
              to="/sponsors"
              activeClassName="navigation--underlined"
              className="navigation__list-item"
            >
              Sponsors
            </Link>
          </li>
          <li onClick={() => this.toggleOutreachDropdown()}>
            <Dropdown
              title="Outreach"
              links={outreachLinks}
              extended={this.state.outreachDropdown}
            />
          </li>
          <li onClick={() => this.toggleIliteDropdown()}>
            <Dropdown
              title="About ILITE"
              links={iliteLinks}
              extended={this.state.iliteDropdown}
            />
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
