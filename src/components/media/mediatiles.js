import React from 'react';

const Mediatiles = ({ name, url }) => (
  <div className='mediatiles'>
    <a href={url}>
      <div className="mediatiles__tile">
        <div className="textWrapper">
          <h2>{name}</h2>
          <div className="content">
          </div>
        </div>
      </div>
    </a>
  </div>
)
export default Mediatiles;
