import React, { Component } from 'react';

class Banner extends Component {

  render() {
    const { children, title, bannerImage } = this.props;
    return (
      <div className={`banner ${bannerImage}`}>
        <div className="banner__text">
          <div className="banner__title">
            {title}
          </div>
          <div className="banner__subtitle">
            <p>{children}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Banner;