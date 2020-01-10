import React, { Component } from "react";
import NavLink from "gatsby-link";
import SideMenu from "../SideMenu";

const Navbar = props => {
  return (
    <nav className="navigation">
      <NavLink to="/" className="navigation__logo" />
      <ul className="navigation__list">
        <li>
          <NavLink
            to="/ilite"
            className="navigation__list-item"
            activeClassName="navigation--underlined"
          >
            About ILITE
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/frc"
            className="navigation__list-item"
            activeClassName="navigation--underlined"
          >
            FRC Robotics
          </NavLink>
        </li>
        <li>
          <a
            href="http://ilite.info"
            className="navigation__list-item"
            activeClassName="navigation--underlined"
            target="_blank"
          >
            STEAM Expo
          </a>
        </li>
        <li>
          <NavLink
            to="/outreach"
            activeClassName="navigation--underlined"
            className="navigation__list-item"
          >
            Outreach
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
