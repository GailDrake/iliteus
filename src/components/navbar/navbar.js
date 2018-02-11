import React, { Component } from 'react';
import Link from 'gatsby-link';

class FRCNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    };
  }

  render() {
    const { links } = this.props;
    const getLinks = () => {
      return links.map((link, index) => {
        let filePath = `/${links.section}/${link.file}`;
        return (
          <li key={index}><Link to={filePath} className="list-item">{links.name}</Link></li>
        );
      });
    };

    return (
      <nav className="navigation">
        <Link to="/frc/" className="logo"></Link>
        <ul>
          {getLinks()}
        </ul>
        <div id="burger" onClick={() => this.setState({ clicked: !clicked })}></div>
      </nav>
    );
  }
}

export default FRCNavbar;
