import React, { Component } from "react"
import { Link } from "gatsby"

class Dropdown extends Component {

  render() {
    const title = this.props.title
    const extended = this.props.extended ? "show" : ""
    const { links } = this.props

    return (
      <div className="dropdown">
        <div className="dropdown__button">
          {title} <i className={`fa fa-caret-down`}></i>
        </div>
        <div className={`dropdown__content ${extended}`}>
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
