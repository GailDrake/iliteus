import React from 'react';

export const Tab = ({ name, isActive, tabIndex, onClick }) => {
  return (
    <li className="tab">
      <div className={`tab__link ${isActive ? 'tab__link--active' : ''}`}
        onClick={(event) => {
          event.preventDefault();
          onClick(tabIndex);
        }}
        onKeyPress={(event) => {
          event.preventDefault();
          onClick(tabIndex);
        }}
        role="button"
        tabIndex={0}
      >
        {name}
      </div>
    </li>
  )
}