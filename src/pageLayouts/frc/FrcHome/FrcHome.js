import React from 'react';

import Button from '../../../components/Button';
import Events from '../../../components/events';
import NewsCard from '../../../components/newscard/';
import SponsorTag from '../../../components/SponsorTag/SponsorTag';

const FrcHome = (props) => {
  return (
    <div className='frcHome'>
      <div className="frcHome__banner">
        <div className="frcHome__banner-text-container">
          <h1 className="frcHome__banner-title">FRC Robotics</h1>
          <h2 className="frcHome__banner-subtitle">FIRST Robotics Challenge Team 1885</h2>
          <p className="frcHome__banner-description">
            ILITE is an internationally recognized FRC Team with the goal of creating a quality robot to compete in the annual First Robotics World Championship.
          </p>
          <Button division='frc' link="/frc/about">
            Learn More About Us!
          </Button>
        </div>
      </div>
      <div className="frcHome__events">
        <h1 className="frcHome__events-header">ILITE's Build Season</h1>
        <br />
        <div className="frcHome__events-container">
          <p className="frcHome__build-season-text">
            Each year, on kickoff day, all of ILITE gathers together to watch the new game reveal.  Following the release, the team moves on to discussing each aspect of the game to ensure no factor in the game is overseen. By involving all team members in the discussion process, both technical and non-technical,
            our hope is to come up with ideas that technical team members might not have thought about.
            <br />
            <br />
            <br />
            Our daily schedule is packed with tons of hard work.  Each of our technical subteams get to work
            designing, building, and testing out the robot. The build subteam designs and constructs the physical robot.
            The programming subteam writes code that the robot will soon utilize.  Our electronics team
            builds circuit boards to control the various mechanisms on the robot.

          </p>
        </div>
      </div>
      <div className="frcHome__news">
        <h1 className="frcHome__news-header">Team</h1>
        <br />
        <div className="frcHome__news-container">

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
            image={require('../../../assets/images/sponsors/incadence.png')}
            url="http://www.incadencecorp.com/">
            Incadence
          </SponsorTag>
          <SponsorTag
            image={require('../../../assets/images/sponsors/asco.png')}
            url="https://www.ascoweb.com/">
            ASCO
          </SponsorTag>
          <SponsorTag
            image={require('../../../assets/images/sponsors/bellpumpandwell.jpg')}
            url="https://www.bellpumpandwell.com/">
            Bell Pump and Well
          </SponsorTag>
          <SponsorTag
            image={require('../../../assets/images/sponsors/cathyshometeam.png')}
            url="https://www.cathyshometeam.com/">
            Cathy's Home Team
          </SponsorTag>
          <SponsorTag
            image={require('../../../assets/images/sponsors/engility.png')}
            url="http://www.engility.com/#HIFh85X6P1kKQ0gK.97">
            US Stem
          </SponsorTag>

          <SponsorTag
            image={require('../../../assets/images/sponsors/khouriortho.jpg')}
            url="http://khouriortho.com/">
            Khouri Orthodontist
          </SponsorTag>
          <SponsorTag
            image={require('../../../assets/images/sponsors/lockheedmartin.png')}
            url="https://www.lockheedmartin.com/us.html">
            Lockheed Martin
          </SponsorTag>
          <SponsorTag
            image={require('../../../assets/images/sponsors/macedontechnologies.png')}
            url="https://www.macedontechnologies.com/">
            Macedon Technologies
          </SponsorTag>
          <SponsorTag
            image={require('../../../assets/images/sponsors/floodtech.png')}
            url="http://www.a1floodtech.com">
            A1 Floodtech
          </SponsorTag>
          <SponsorTag
            image={require('../../../assets/images/sponsors/novec.jpg')}
            url="https://www.novec.com/">
            Novec
          </SponsorTag>
          <SponsorTag
            image={require('../../../assets/images/sponsors/usstem.png')}
            url="http://www.usstem.org/">
            US Stem
          </SponsorTag>
          <SponsorTag
            image={require('../../../assets/images/sponsors/micron.png')}
            url="https://www.micron.com/">
            Micron
          </SponsorTag>
          <SponsorTag
            image={require('../../../assets/images/sponsors/battlefieldhighschool.jpg')}
            url="http://battlefieldhs.pwcs.edu/">
            Battlefield High School
          </SponsorTag>
          <SponsorTag
            image={require('../../../assets/images/sponsors/afcea.png')}
            url="https://www.afcea.org/site/">
            AFCEA
          </SponsorTag>
          <SponsorTag
            image={require('../../../assets/images/sponsors/tropicalsmoothie.jpg')}
            url="https://www.tropicalsmoothiecafe.com/">
            Tropical Smoothie
          </SponsorTag>
        </div>
      </div>
    </div>
  );
};

FrcHome.propTypes = {

};

export default FrcHome;
