import React from 'react';
import Link from 'gatsby-link';

const Button = ({ division, children, link }) => {
  const location = link.substr(0, 4) == 'http'
    ? <a href={link}>{children}</a>
    : <Link to={link}>{children}</Link>
  return <div className={`button ${division}`}>{location}</div>
}

export default Button;