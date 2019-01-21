import React, { Component } from 'react';
import Link from 'gatsby-link';

class Overbar extends Component {
  constructor(props) {
    super(props);
    this.ilite = "";
    this.frc = "";
    this.outreach = "";
  }

  sectionCheck = (url) => {
    if (url.includes("frc")) {
      this.ilite = "";
      this.frc = "overbar--underlined";
      this.outreach = "";
    }
    else if (url.includes("outreach")) {
      this.ilite = "";
      this.frc = "";
      this.outreach = "overbar--underlined";
    }
    else if (url.includes("ilite")) {
      this.ilite = "overbar--underlined";
      this.frc = "";
      this.outreach = "";
    }
    else {
      this.ilite = "";
      this.frc = "";
      this.outreach = "";
    }
  }

  render() {
    const url = window && window.location && window.location.href;
    if (url) {
      this.sectionCheck(window.location.href);
    }
    return (
      <nav>
        <ul className="overbar__list">
          <li><Link to="/ilite" className={`overbar__list-item ${this.ilite}`}>About ILITE</Link></li>
          <li><Link to="/frc" className={`overbar__list-item ${this.frc}`}>FRC Robotics</Link></li>
          <li><a href="http://www.ilite.info" className="overbar__list-item" target="_blank">STEAM Expo</a></li>
          <li><Link to="/outreach" className={`overbar__list-item ${this.outreach}`}>Outreach</Link></li>
        </ul>
      </nav>
    );
  }
}

export default Overbar;