import React from 'react';
import Link from 'gatsby-link';

const Tabs = ({ children, tabs }) => {

  const getTabs = tabs.map((name, index) => {
    return (
      <li key={index}><Link to={`#tab${index}`}>{name}</Link></li>
    );
  });

  return (
    <div className="tabs">
      <ul className="tabs__head">
        {getTabs}
      </ul>
      <div className="tabs__content">
        {children}
      </div>
    </div>
  );
}

export default Tabs;