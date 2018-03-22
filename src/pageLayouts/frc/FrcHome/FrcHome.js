import React from 'react';

import Button from '../../../components/Button';
import Events from '../../../components/events';
import NewsCard from '../../../components/NewsCard/';
import SponsorTag from '../../../components/SponsorTag/SponsorTag';

const FrcHome = (props) => {
  return (
    <div className='frcHome'>
      <div className="frcHome__banner">
        <div className="frcHome__banner-text-container">
          <h1 className="frcHome__banner-title">ILITE Robotics</h1>
          <h2 className="frcHome__banner-subtitle">FIRST Robotics Challenge Team 1885</h2>
          <p className="frcHome__banner-description">
            We are a team founded on the principles of leadership, teamwork, and academic rigor. Through competitions, outreach,
            and mentorship we passionately advocate for science and technology in our schools, communities, and throughout the world.
          </p>
          <Button division='frc' link="/about">
            Learn More About Us!
          </Button>
        </div>
      </div>
      <div className="frcHome__events">
        <h1 className="frcHome__events-header">ILITE Events</h1>
        <br />
        <div className="frcHome__events-container">
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
      <div className="frcHome__news">
        <h1 className="frcHome__news-header">News</h1>
        <br />
        <div className="frcHome__news-container">
          <NewsCard title="FIRST Fuel!" image={require('../../../assets/images/frc/iroc-group-photo.png')}>
            FIRST Fuel Sign-Ups Team-members and parents should be aware of the FIRST Fuel page. We thank you for your continued support of ILITE!
          </NewsCard>
          <NewsCard title="IROC Competition is the Largest Ever Held!" image={require('../../../assets/images/frc/iroc-group-photo.png')}>
            With 33 registered teams, the 2016 ILITE Robotics Off-Season Challenge was the largest ever held. The winning alliance was composed of FRC Teams 384, Sparky Robotics, 5338, RoboLoCos, and 2363, Triple Helix. Congratulations teams!
          </NewsCard>
          <NewsCard title="IROC Competition is the Largest Ever Held!" image={require('../../../assets/images/frc/iroc-group-photo.png')}>
            FIRST Fuel Sign-Ups Team-members and parents should be aware of the FIRST Fuel page. We thank you for your continued support of ILITE!
          </NewsCard>
        </div>
      </div>
      <div className="frcHome__sponsors">
        <h1 className="frcHome__sponsors-header">Sponsors</h1>
        <p className="frcHome__sponsors-description">
          We thank our Sponsors for their continued support
        </p>
        <br />
        <div className="frcHome__sponsors-container">
          <SponsorTag
            image={require('../../../assets/images/sponsors/floodtech.png')}
            url="http://www.a1floodtech.com">
            A1 Floodtech
          </SponsorTag>
          <SponsorTag
            image={require('../../../assets/images/sponsors/floodtech.png')}
            url="http://www.a1floodtech.com">
            A1 Floodtech
          </SponsorTag>
          <SponsorTag
            image={require('../../../assets/images/sponsors/floodtech.png')}
            url="http://www.a1floodtech.com">
            A1 Floodtech
          </SponsorTag>
          <SponsorTag
            image={require('../../../assets/images/sponsors/floodtech.png')}
            url="http://www.a1floodtech.com">
            A1 Floodtech
          </SponsorTag><SponsorTag
            image={require('../../../assets/images/sponsors/floodtech.png')}
            url="http://www.a1floodtech.com">
            A1 Floodtech
          </SponsorTag><SponsorTag
            image={require('../../../assets/images/sponsors/floodtech.png')}
            url="http://www.a1floodtech.com">
            A1 Floodtech
          </SponsorTag><SponsorTag
            image={require('../../../assets/images/sponsors/floodtech.png')}
            url="http://www.a1floodtech.com">
            A1 Floodtech
          </SponsorTag>
          <SponsorTag
            image={require('../../../assets/images/sponsors/floodtech.png')}
            url="http://www.a1floodtech.com">
            A1 Floodtech
          </SponsorTag>
          <SponsorTag
            image={require('../../../assets/images/sponsors/floodtech.png')}
            url="http://www.a1floodtech.com">
            A1 Floodtech
          </SponsorTag>
        </div>
      </div>
    </div>
  );
};

FrcHome.propTypes = {

};

export default FrcHome;
