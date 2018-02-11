import React from 'react';

const Container = ({ division, banner, children }) => {
  return (
    <div className={`container ${division}`}>
      <div className="content">
        {children}
      </div>
    </div>
  );
};

export default Container;