import React from 'react';
import Events from '../../../components/events';

const OutreachHome = (props) => {
  return (
    <div className='outreachHome'>
      <div className="outreachHome__banner">
        <div className="outreachHome__banner-text-container">
          <br /><br />
          <h1 className="outreachHome__banner-title">80,000+ minds reached</h1>
          <h2 className="outreachHome__banner-subtitle">Outreach at ILITE</h2>
          <p className="outreachHome__banner-description">Outreach is the act of reaching out to others and introducing them to STEAM. To achieve that, we strive to spread STEAM through outreach events, seminars, and camps to reach young minds and fulfill our mission of advocating STEM and creating a brighter future.</p>
        </div>
      </div>
      <div className="outreachHome__description">
        <h1 className="outreachHome__description-header">About Outreach</h1>
        <br />
        <p className="outreachHome__description-text">
        ILITE hosts and plans a majority of the STEAM related events at our school. Additionally, we help spread the word, and bring STEAM to our community in a big way. We utilize events such as the STEAM Expo, and the Summer Camps to teach our community about the different aspects of STEAM, as well as get them interested in the possibilities STEAM has for the future. Our goal as ILITE is to inspire the future generation and encourage them to pursue STEAM.
        </p>
      </div>
      <div className="outreachHome__events">
        <h1 className="outreachHome__events-header">Upcoming Events</h1>
        <p className="outreachHome__events-subheader">
        We host a multitude of events including the STEAM Expo, the FRC Competition, and the FTC competition. Click on the images below to find out more.
        </p>
        <div className="outreachHome__events-container">
          <Events
            name="Steam Expo"
            date="January 26, 2019"
            eventLink="http://www.ilite.info/"
            image="images/outreach/steamexpo/expo.jpg" />
          
          <Events
            name="Week 1 FRC Chesapeake District Event"
            date="March 1-3, 2019"
            eventLink="http://www.firstchesapeake.org/first-programs/frc/first-chesapeake-district-events/northern-va"
            image="images/frc/district_chairmans.jpeg" />

          <Events
            name="Summer Camps"
            date="July, 2019"
            eventLink="/outreach/SummerCamps"
            image="images/outreach/summercamps/stem2.jpg" />
        </div>
      </div>
      <div className="outreachHome__FLL">
        <h1 className="outreachHome__FLL-header">FLL and Summer Camps</h1>
        <p className="outreachHome__FLL-subheader">
        We host seasonal activities teaching kids about certain aspects of STEAM and robotics with FLL Workshops being in the fall, and the summer camps being in the summer. In doing this, we introduce the kids to the world of STEAM, and nurture their interest in technology.
        </p>
        <div className="outreachHome__FLLContainer">

        <Events
            name="FLL Workshops"
            date="Our FLL workshops serve to introduce new teams to the world of robotics and teach veternan teams techniques that will help them compete at a higher level."
            eventLink="/outreach/FLL"
            image="images/outreach/fll5.jpg" />

        <Events
            name="Summer Camps"
            date="Our Summer Camps offer a large variety of STEAM related camps. The camps include everything from science-based arts and crafts to cyber defense, introducing kids of a wide range of ages and interests to STEAM."
            eventLink="/outreach/SummerCamps"
            image="images/outreach/summercamps/stem1.jpg" />

        </div>

      </div>
    </div>
  );
};

OutreachHome.propTypes = {

};

export default OutreachHome;