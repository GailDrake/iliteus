import React, { Component } from 'react';
import Link from 'gatsby-link';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    };
  }

  toggle = () => {
    const value = this.state.clicked ? false : true;
    this.setState({
      clicked: value
    })
  }

  render() {
    const { links } = this.props;
<<<<<<< HEAD
    const getLinks = () => {
      return links.map((link, index) => {
        let filePath = `/${links.section}/${link.file}`;
        return (
          <li key={index}><Link to={filePath} className="list-item">{links.name}</Link></li>
        );
      });
    };
=======

    const getLinks = links.map((link, index) => {
      let filePath = `/${link.section}/${link.file}`;
      return (
        <li key={index}><Link to={filePath} className="list-item">{link.name}</Link></li>
      );
    });
>>>>>>> master

    return (
      <nav className="navigation">
        <Link to="/frc/" className="logo"></Link>
        <ul>
          {getLinks}
        </ul>
        <div id="burger" onClick={this.toggle}></div>
      </nav >
    );
  }
}

export default Navbar;
