import React from 'react';

const Header = ({ children, subheader }) =>
  <h1 className={`${subheader && "subheader"} header`}>
    {children}
  </h1>


export default Header;