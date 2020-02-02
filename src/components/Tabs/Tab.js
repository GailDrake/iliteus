import React from 'react';

export const Tab = ({ name, isActive, tabIndex, onClick }) => {
  return (
    <li className="tab">
      <div className={`tab__link ${isActive ? 'tab__link--active' : ''}`}
        onClick={(event) => {
          event.preventDefault();
          onClick(tabIndex);
        }}
      >
        {name}
      </div>
    </li>
  )
}