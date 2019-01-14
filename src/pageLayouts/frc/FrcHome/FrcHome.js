import React from 'react';

import Button from '../../../components/Button';
import Events from '../../../components/events';
import NewsCard from '../../../components/newscard/';
import SponsorTag from '../../../components/SponsorTag/SponsorTag';

//Image imports
import kickoff1 from "../../../assets/images/frc/home_page/kickoff-pic1.jpeg";
import kickoff2 from "../../../assets/images/frc/home_page/kickoff-pic2.jpeg";
import buildSeason1 from "../../../assets/images/frc/home_page/build_season-pic1.jpeg";

const FrcHome = (props) => {
  return (
    <div className='frcHome'>
      <div className="frcHome__banner">
        <div className="frcHome__banner-text-container">
          <h1 className="frcHome__banner-title">FRC Robotics</h1>
          <h2 className="frcHome__banner-subtitle">FIRST Robotics Challenge Team 1885</h2>
          <p className="frcHome__banner-description">
            ILITE is an internationally recognized FRC Team with the goal of creating a quality robot to compete in the First Robotics Competition.
          </p>
          <Button division='frc' link="/frc/about">
            Learn More About Us!
          </Button>
        </div>
      </div>
      <div className="frcHome__events">
        <h1 className="frcHome__events-header">ILITE Welcomes the 2019 Season!</h1>
        <br />
        <div className="frcHome__events-container">
          <img src={kickoff2} className="frcHome__season-pics"></img>
          <p className="frcHome__events-description">
            With the conclusion of kickoff and the new game announced, ILITE is excited for the new season.  Together with new and returning members, we are ready to tackle this challenge!  <a href="/frc/competition">Click here </a>to find out more about the 2019 season.
          </p>
          <br />
          <img src={kickoff1} className="frcHome__season-pics"></img>

          <br />
          <br />
          <br />
          <br />

        </div>
      </div>
      <div className="frcHome__news">
        <h1 className="frcHome__news-header">ILITE's Build Season</h1>
        <br />
        <div className="frcHome__news-container">
          Each year, on kickoff day, all of ILITE gathers together to watch the new game reveal.  Following the release, the team moves on to discussing each aspect of the game to ensure no factor in the game is overseen. By involving all team members in the discussion process, both technical and non-technical,
                      our hope is to come up with ideas that technical team members might not have thought about.
          <br />
          <br />
          <br />
          <img src={buildSeason1} className="frcHome__build-season-pics"></img>
          Our daily schedule is packed with tons of hard work.  Each of our technical subteams get to work
        designing, building, and testing out the robot. The build subteam designs and constructs the physical robot.
        The programming subteam writes code that the robot will soon utilize.  Our electronics team
        builds circuit boards to control the various mechanisms on the robot.
        </div>
      </div>
      <div className="frcHome__sponsors">
        <h1 className="frcHome__sponsors-header">Team</h1>
        <br />
        <div className="frcHome__sponsors-container">
          As ILITE, we have a highly dedicated team with a diverse skill set.  Our team structure not only
          consists of members that are skilled in building and programming, we have a dedicated graphics,
          outreach, and sponorship team. Our technical teams consist of build, programming, and electronics,
          each with a trained set of members.  View our members and their subteams <a href="/frc/team">here</a>.
        </div>
      </div>
    </div>
  );
};

FrcHome.propTypes = {

};

export default FrcHome;
