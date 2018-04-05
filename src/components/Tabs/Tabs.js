<<<<<<< HEAD
import React from 'react';

export default class Tabs extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      activeTabIndex: this.props.defaultActiveTabIndex
    };
    this.handleTabClick = this.handleTabClick.bind(this);
  }

  handleTabClick(tabIndex) {
    this.setState({
      activeTabIndex: tabIndex === this.state.activeTabIndex ? this.props.defaultActiveTabIndex : tabIndex
    });
  }

  // Encapsulate <Tabs/> component API as props for <Tab/> children
  renderChildrenWithTabsApiAsProps() {
    return React.Children.map(this.props.children, (child, index) => {
      return React.cloneElement(child, {
        onClick: this.handleTabClick,
        tabIndex: index,
        isActive: index === this.state.activeTabIndex
      });
    });
  }

  // Render current active tab content
  renderActiveTabContent() {
    const { children } = this.props;
    const { activeTabIndex } = this.state;
    if (children[activeTabIndex]) {
      return children[activeTabIndex].props.children;
    }
  }

  render() {
    return (
      <div className="tabs">
        <ul>
          {this.renderChildrenWithTabsApiAsProps()}
        </ul>
        <ul className="tabs-active-content">
          {this.renderActiveTabContent()}
        </ul>
      </div>
    );
  }
};
=======
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
>>>>>>> origin/nicholas-teampage
