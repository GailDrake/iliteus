import React from 'react';
import Button from '../../../components/Button';
import Events from '../../../components/events';
import NewsCard from '../../../components/NewsCard/';

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
      <div className="home__events">
        <h1 className="home__events-header">ILITE Events</h1>
        <br />
        <div className="home__events-container">
          <Events
            name="FIRST Relic Recovery"
            eventLink="ftc.ilite.us"
            date="December 2nd, 2017"
            image="images/frc/iroc-group-photo.png" />
          <Events
            name="FIRST Relic Recovery"
            eventLink="ftc.ilite.us"
            date="December 2nd, 2017"
            image="logos/first-relic-recovery__logo.png" />
          <Events
            name="FIRST Relic Recovery"
            eventLink="ftc.ilite.us"
            date="December 2nd, 2017"
            image="logos/first-relic-recovery__logo.png" />
        </div>
      </div>
      <div className="home__news">
        <h1 className="home__news-header">ILITE Events</h1>
        <br />
        <div className="home__news-container">
          <NewsCard title="FIRST Fuel!" image={require('../../../assets/images/frc/iroc-group-photo.png')}>
            FIRST Fuel Sign-Ups Team-members and parents should be aware of the FIRST Fuel page. We thank you for your continued support of ILITE!
          </NewsCard>
          <NewsCard title="IROC Competition is the Largest Ever Held!" image={require('../../../assets/images/frc/iroc-group-photo.png')}>
            With 33 registered teams, the 2016 ILITE Robotics Off-Season Challenge was the largest ever held. The winning alliance was composed of FRC Teams 384, Sparky Robotics, 5338, RoboLoCos, and 2363, Triple Helix. Congratulations teams!
          </NewsCard>
          <NewsCard>
            FIRST Fuel Sign-Ups Team-members and parents should be aware of the FIRST Fuel page. We thank you for your continued support of ILITE!
          </NewsCard>
        </div>
      </div>
    </div>
  );
};

Home.propTypes = {

};

export default Home;
