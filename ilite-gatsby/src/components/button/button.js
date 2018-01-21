import React from 'react';
import Link from 'gatsby-link';
import './button.less';

const Button = ({ link, children }) => <Link to = {link} className = "button">{children}</Link>;

export default Button;