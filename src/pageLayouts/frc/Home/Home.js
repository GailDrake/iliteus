import React from 'react';
import Button from '../../../components/Button';

const Home = (props) => {
  return (
    <div className='home'>
      <div className="home__banner">
        <div className="home__banner-text-container">
          <h1 className="home__banner-title">ILITE Robotics</h1>
          <h2 className="home__banner-subtitle">FIRST Robotics Challenge Team 1885</h2>
          <p className="home__banner-description">
            We are a team founded on the principles of leadership, teamwork, and academic rigor. Through competitions, outreach,
            and mentorship we passionately advocate for science and technology in our schools, communities, and throughout the world.
          </p>
          <Button division='frc' link="/about">
            Learn More About Us!
          </Button>
        </div>
      </div>
    </div>
  );
};

Home.propTypes = {

};

export default Home;
