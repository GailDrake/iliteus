import React, { Component } from 'react';
import NavLink from 'react-router-dom/NavLink';

class Dropdown extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const title = this.props.title;
    const extended = this.props.extended ? "show" : "";
    const { links } = this.props;

    return (
      <div className="dropdown">
        <a className="dropdown__button">{title}                               <i className={`fa fa-caret-down`}></i></a>
        <div className={`dropdown__content ${extended}`}>
          {links.map(link => {
            let filePath = `/${link.section}/${link.file}`;

            return (
              <NavLink
                to={filePath}
                className="dropdown__item"
                activeClassName="dropdown__item--active"
              >
                {link.name}
              </NavLink>
            );
          })}
        </div>
      </div >
    );
  }
}

export default Dropdown;