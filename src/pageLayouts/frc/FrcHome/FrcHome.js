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
        </div>
      </div>
      <div className="frcHome__events">
        <h1 className="frcHome__events-header">ILITE Welcomes the 2019 Season!</h1>
        <br />
        <div className="frcHome__events-container">
          <img src={kickoff2} className="frcHome__season-pics"></img>
          <div className="frcHome__events-description">
            <p>With the conclusion of kickoff and the new game announced, ILITE is excited for the new season.  Together with new and returning members, we are ready to tackle this challenge!</p>
            <Button division="frc" link="/frc/Competition">Learn more!</Button>
          </div>
          <br />
          <img src={kickoff1} className="frcHome__season-pics"></img>

        </div>
      </div>
      <div className="frcHome__news">
        <h1 className="frcHome__news-header">ILITE's Build Season</h1>
        <br />
        <div className="frcHome__news-container">
          <div className="frcHome__events-description">
            <p>With the conclusion of kickoff and the new game announced, ILITE is excited for the new season.  Together with new and returning members, we are ready to tackle this challenge!</p>
            {/* <img src={buildSeason1} className="frcHome__build-season-pics"></img> */}
            <p>With the conclusion of kickoff and the new game announced, ILITE is excited for the new season.  Together with new and returning members, we are ready to tackle this challenge!</p>
          </div>
        </div>
      </div>
      <div className="frcHome__sponsors">
        <h1 className="frcHome__sponsors-header">Team</h1>
        <br />
        <div className="frcHome__sponsors-container">
          <p className="frcHome__sponsors-description">As ILITE, we have a highly dedicated team with a diverse skill set.  Our team structure not only
          consists of members that are skilled in building and programming, we have a dedicated graphics,
          outreach, and sponsorship team. Our technical teams consist of build, programming, and electronics,
          each with a trained set of members.
          </p>
          <Button division="frc" link="/frc/Team">See our team!</Button>
        </div>
      </div>
    </div >
  );
};

FrcHome.propTypes = {

};

export default FrcHome;
