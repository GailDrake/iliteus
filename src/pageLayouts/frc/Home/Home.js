import React from 'react';
import Button from '../../../components/Button';

const Home = (props) => {
  return (
    <div className='home'>
      <div className="home__banner">
        <h1 className="home__banner-title">ILITE Robotics</h1>
        <h2 className="home__banner-subtitle">FIRST Robotics Challenge Team 1885</h2>
        <p className="home__banner-description">FRC Robotics team based out of Haymarket, VA</p>
        <Button division='frc' link="/about">
          Learn More About Us!
        </Button>
      </div>
    </div>
  );
};

Home.propTypes = {

};

export default Home;
