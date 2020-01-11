import React, { Component } from 'react';
import NavLink from 'react-router-dom/NavLink';

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdown: false
    };
  }

  toggleDropdown = () => {
    this.setState({
      dropdown: this.state.dropdown ? false : true
    })
  }

  render() {
    const title = this.props.title;
    const { links } = this.props;

    const dropdownMenu = this.state.dropdown ? "show" : "";
    const dropdownCaret = this.state.dropdown ? "fa-caret-up" : "fa-caret-down";
    const backgroundOpen = this.state.dropdown ? "dropdown__background--open" : "";

    return (
      <div className="dropdown">
        <div className={`dropdown__background ${backgroundOpen}`} onClick={() => this.toggleDropdown()}></div>
        <a onClick={() => this.toggleDropdown()} className="dropdown__button">{title}                               <i className={`fa ${dropdownCaret}`}></i></a>
        <div className={`dropdown__content ${dropdownMenu}`}>
          {links.map(link => {
            let filePath = `/${link.section}/${link.file}`;

            return (
              <NavLink
                to={filePath}
                className="dropdown__item"
                activeClassName="dropdown__item--active"
                onClick={() => this.toggleDropdown()}
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