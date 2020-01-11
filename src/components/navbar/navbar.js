import React, { Component } from "react";
import NavLink from "gatsby-link";
import SideMenu from "../SideMenu";

const Navbar = props => {
  return (
    <nav className="navigation">
      <NavLink to="/" className="navigation__logo" />
      <ul className="navigation__list">
        <li>
          {/* Future 'About ILITE' dropdown */}
        </li>
        <li>
          {/* Future 'Outreach' dropdown */}
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
