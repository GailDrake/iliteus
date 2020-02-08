import React from 'react';

export default class Tabs extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      activeTabIndex: 0
    };
    this.handleTabClick = this.handleTabClick.bind(this);
  }

  handleTabClick(tabIndex) {
    this.setState({
      activeTabIndex: tabIndex === this.state.activeTabIndex ? 0 : tabIndex
    });
  }

  // Encapsulate <Tabs/> component API as props for <Tab/> children
  renderChildrenWithTabsApiAsProps() {
    return React.Children.map(this.props.children, (child, index) => {
      return React.cloneElement(child, {
        onClick: this.handleTabClick,
        onKeyPressCapture: this.handleTabClick,
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
        <ul className='tabs__ul'>
          {this.renderChildrenWithTabsApiAsProps()}
        </ul>
        <ul className="tabs-active-content">
          {this.renderActiveTabContent()}
        </ul>
      </div>
    );
  }
};
