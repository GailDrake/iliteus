import React from 'react';

const Header = ({ children, subheader }) =>
  subheader
    ? <h1 className="subheader header">{children}</h1>
    : <h1 className="header">{children}</h1>


export default Header;