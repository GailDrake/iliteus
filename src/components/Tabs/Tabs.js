import React from 'react';

export default class Tabs extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      activeTabIndex: 0,
      horizontalLineWidth: undefined
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
    const { activeTabIndex, horizontalLineWidth } = this.state;
    if (children[activeTabIndex]) {

      let newChildren = [];
      for (let i = 0; i < children[activeTabIndex].props.children.length; i++) {
        let child = children[activeTabIndex].props.children[i];
        console.log(child);
        if (child.props.className && child.props.className.includes("centered_elements")) {
          let newChild = React.cloneElement(child, {
            style: {
              maxWidth: horizontalLineWidth
            }
          });
          newChildren.push(newChild);
        }

        else {
          newChildren.push(child);
        }
      }
      return newChildren;
    }
  }

  render() {
    return (
      <div className="tabs">
        <div className="tabs__ul">

          {this.renderChildrenWithTabsApiAsProps()}
        </div>
        <ul className="tabs-active-content">
          {this.renderActiveTabContent()}
        </ul>
      </div>
    );
  }

  updateLineWidth() {
    let buttons = Array.from(document.getElementsByClassName("tab"));
    let width = 0;
    buttons.forEach(b => {
      width += b.clientWidth;
    });
    this.setState({ horizontalLineWidth: width + "px" });
  }

  componentDidMount() {
    this.updateLineWidth();
  }
};