import React, { Component } from 'react';
import Link from 'gatsby-link';

class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 0
    };
  }

  render() {
    const { content, tabs } = this.props;

    const getTabs = tabs.map((name, index) => {
      return (
        <li key={index}><div className="tabs__head-item" onClick={() => this.setState({ active: index })}>{name}</div></li>
      );
    });

    const getContent = () => {
      return (
        <div className="tabs__section">{content[this.state.active]}</div>
      );
    };

    return (
      <div className="tabs" >
        <ul className="tabs__head">
          {getTabs}
        </ul>
        <br />
        <div className="tabs__content">
          {getContent()}
        </div>
      </div>
    );
  }
}

export default Tabs;
