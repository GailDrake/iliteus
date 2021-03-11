import React, { Component } from "react"
import { Link } from "gatsby"

const mouseLeave = (toggleExtended) => {
  console.log("STOP IT")
  if(toggleExtended) {
    toggleExtended();
  }
};

class Dropdown extends Component {



  render() {
    const toggleExtended = this.props.toggleExtended;
    const title = this.props.title
    const extended = this.props.extended ? "show" : ""
    const { links } = this.props

    return (
      <div className="dropdown">
        <div className="dropdown__button">
          {title} <i className={`fa fa-caret-down`}></i>
        </div>
        <div className={`dropdown__content ${extended}`} onMouseLeave={()=>mouseLeave(toggleExtended)}>
          {links.map(link => {
            let filePath = `/${link.section}/${link.file}`

            return (
              <Link
                to={filePath}
                className="dropdown__item"
                activeClassName="dropdown__item--active"
              >
                {link.name}
              </Link>
            )
          })}
        </div>
      </div>
    )
  }
}

export default Dropdown
