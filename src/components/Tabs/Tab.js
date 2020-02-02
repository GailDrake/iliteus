import React from 'react';

export const Tab = ({ name, isActive, tabIndex, onClick }) => {
  return (
    <li className="tab">
      <a className={`tab__link ${isActive ? 'tab__link--active' : ''}`}
        onClick={(event) => {
          event.preventDefault();
          onClick(tabIndex);
        }}
      >
        {name}
      </a>
    </li>
  )
}