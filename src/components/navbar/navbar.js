import React, { Component } from "react";
import NavLink from "gatsby-link";
import SideMenu from "../SideMenu";
import Dropdown from '../Dropdown';

const iliteLinks = [
  {
    name: "Team",
    section: "ilite",
    file: "team"
  },
  {
    name: "Media",
    section: "ilite",
    file: "media"
  },
  {
    name: "Calendar",
    section: "ilite",
    file: "calendar"
  },
  {
    name: "History",
    section: "ilite",
    file: "competition"
  },
  {
    name: "Mission",
    section: "ilite",
    file: "mission"
  }
];

const outreachLinks = [
  {
    name: "Hosted Events",
    section: "outreach",
    file: "hostedevents"
  },
  {
    name: "Summer Camps",
    section: "outreach",
    file: "summercamps"
  }
]

const Navbar = props => {
  return (
    <nav className="navigation">
      <NavLink to="/" className="navigation__logo" />
      <ul className="navigation__list">
        <li>
          <Dropdown title="About ILITE" links={iliteLinks} />
        </li>
        <li>
          <Dropdown title="Outreach" links={outreachLinks} />
        </li>
        <li>
          <NavLink
            to="/sponsors"
            activeClassName="navigation--underlined"
            className="navigation__list-item"
          >
            Sponsors
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/getinvolved"
            activeClassName="navigation--underlined"
            className="navigation__list-item"
          >
            Get Involved
          </NavLink>
        </li>
      </ul>
      <div className="navigation__sidemenu">
        <SideMenu />
      </div>
    </nav>
  );
};

export default Navbar;
