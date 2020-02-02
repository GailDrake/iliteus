import React from 'react';
import Link from 'gatsby-link';

const Button = ({ children, link }) => {
  const location = (link.substr(0, 4) === 'http')
    ? <a href={link} className="button" target="_blank" rel="noopener noreferrer">{children}</a>
    : <Link to={link} className="button">{children}</Link>;
  return location;
}

export default Button;