import React from 'react';

const Mediatiles = ({ name, url }) => (
  <div className='mediatiles'>
    <a href={url}>
      <div className="mediatiles__tile">
        <div className="mediatiles__textWrapper">
          <h2>{name}</h2>
          <div className="media__content">
          </div>
        </div>
      </div>
    </a>
  </div>
)
export default Mediatiles;
