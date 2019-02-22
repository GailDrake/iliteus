import React, { Component } from "react";
import NavLink from "gatsby-link";
import SideMenu from "../SideMenu";

const Navbar = props => {
  const { links } = props;
  return (
    <nav className="navigation">
      <NavLink to="/" className="navigation__logo" />
      <ul>
        {links.map((link, index) => {
          let filePath = `/${link.section}/${link.file}`;
          return (
            <li key={index}>
              <NavLink
                to={filePath}
                className={`navigation__list-item`}
                activeClassName="navbar--underlined"
                exact
              >
                {link.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
      <div className="navigation__sidemenu">
        <SideMenu />
      </div>
    </nav>
  );
};

export default Navbar;
