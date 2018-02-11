import React from 'react';
// import classnames from 'classnames';
import Events from '../../../components/events';

const Home = (props) => {
  return (
    <div className='home'>
      <h1>This is the Home page</h1>
      <Events
        name="FTC Regional Qualifier"
        eventLink="ftc.ilite.us"
        date="December 2nd, 2018" />
    </div>
  );
};

Home.propTypes = {

};

export default Home;
