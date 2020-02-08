import React, { Component } from "react"
import Banner from "../../components/banner"

class Container extends Component {
  render() {
    const { title, subtitle, bannerImage, children } = this.props;

    return (
      <div className="container" >
        <Banner title={title} bannerImage={bannerImage}>{subtitle}</Banner>
        <div className="container__bar"></div>
        <div className="container__content">{children}</div>
      </div>
    )
  }
}

export default Container
