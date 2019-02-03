import React, { Component } from 'react';
import Banner from '../../components/banner';

class Container extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, subtitle, children } = this.props;

    return (
      <div className="container" >
        <Banner title={title}>{subtitle}</Banner>
        <div className="container__bar"></div>
        <div className="container__content">
          {children}
        </div>
      </div >
    );
  };
}

export default Container;