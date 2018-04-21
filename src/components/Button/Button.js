import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

const Button = ({ division, children, link }) => {
  const isExternalLink = link.substr(0, 3) === 'http';
  // const location = link.substr(0, 4) == 'http'
  //   ? <a href={link}>{children}</a>
  //   : <Link to={link}>{children}</Link>
  return ( 
   //<div className={`button ${division}`}>{isExternalLink}</div> 
  <div>
    {
    isExternalLink 
      ? <a className={`button ${division}`} href={link}>{children}</a> 
          : <Link className={`button ${division}`} to={link}>{children}</Link>
    } 
  </div>
  )
}
Button.propTypes={
  link: PropTypes.string.isRequired, 
  division: PropTypes.string,

}
export default Button;