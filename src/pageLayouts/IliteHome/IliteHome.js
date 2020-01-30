import React from 'react';

import Button from '../../components/Button';
import Events from '../../components/events';
import NewsCard from '../../components/newscard/';
import SponsorTag from '../../components/SponsorTag/SponsorTag';


const IliteHome = (props) => {
  return (
    <div className='iliteHome'>
      <div className="iliteHome__banner">
        <div className="iliteHome__banner-text-container">
          <h1 className="iliteHome__banner-title">ILITE</h1>
          <h2 className="iliteHome__banner-subtitle">Inspiring Leaders In Technology and Engineering</h2>
          <p className="iliteHome__banner-description">
            We are a team founded on the principles of leadership, teamwork, and academic rigor. Through competitions, outreach,
            and mentorship we passionately advocate for science and technology in our schools, communities, and throughout the world.
          </p>
          <Button link="/ilite/about">
            Learn More About Us!
          </Button>
        </div>
      </div>
      <div className="iliteHome__events">
        <h1 className="iliteHome__events-header">Upcoming Events</h1>
        <p className="iliteHome__events-subheader">
          We host a multitude of events throughout the year ranging from robotics competitions to summer camps to expos. Below are listed events that we will be hosting in the near future.
        </p>
        <div className="iliteHome__events-container">
          <Events
            name="STEAM Expo"
            date="January 25th, 2020"
            eventLink="http://ilite.info"
            image="images/outreach/steamexpo/expo.jpg" />

          <Events
            name="FRC Week 1"
            date="February 28th, 2020"
            eventLink="https://www.firstchesapeake.org/first-programs/frc/first-chesapeake-district-events/northern-va"
            image="images/frc/week_one.jpg" />

          <Events
            name="Summer Camps"
            date="June, 2020"
            eventLink="/outreach/SummerCamps"
            image="images/outreach/summercamps/group_summercamps.jpg" />
        </div>
      </div>
      <div className="iliteHome__news">
        <h1 className="iliteHome__news-header">News</h1>
        <br />
        <div className="iliteHome__news-container">
          <NewsCard title="ILITE at BunnyBots 2019" image={require('../../assets/images/frc/bunnybots.jpg')}>
            ILITE participated in the offseason event, BunnyBots, which was hosted by team 449 at Montgomery Blair High School.
	          With our robot, "JuiceBx", we made a formidable presence, ultimately finishing out in the semifinals. We strongly felt
   	        that it was a marvelous learning opportunity for the students to prepare for the 2020 build season, and we're eager to
       	    apply the skills that we've learned! We would also like to give a big thank you to team 449 for hosting this great event!
          </NewsCard>
          <NewsCard title="ILITE hosts ILITE Robotics Offseason Challenge" image={require('../../assets/images/outreach/IROC.hostedevents.jpg')}>
            ILITE welcomed local robotics teams to the ILITE Robotics Offseason Challenge (otherwise known as IROC) on October 26, 2019 at our home- Battlefield High School.
  Competitors united to show off their robots and driver skills in the 2019's FIRST Robotics Competition, Destination: Deep Space.
  We are so thankful for all the wonderful teams who attended and wish everyone a good season.
          </NewsCard>
          <NewsCard title="ILITE at Rumble in the Roads" image={require('../../assets/images/frc/rumble_in_the_roads.jpg')}>
            ILITE competed at the Rumble in the Roads off-season event and won with teams 401 and 2028 on November 2nd. Rumble in the Roads is an annual off-season FIRST Robotics Competition event held by teams 1610, 2363, 5957 and is hosted in Newport News at Heritage High School. The competition followed modified rules of the 2019 game DESTINATION: DEEP SPACE. Rumble in the Roads was a great opportunity to get in practice before the new season begins in 2020.
          </NewsCard>
        </div>
        <div className="iliteHome__news-button">
          <Button link="https://www.smore.com/u/team1885iliterobotics">Check out our team newsletters!</Button>
        </div>
      </div>
      <div className="iliteHome__sponsors">
        <h1 className="iliteHome__sponsors-header">Sponsors</h1>
        <p className="iliteHome__sponsors-description">
          We thank our Sponsors for their past and present support
        </p>
        <br />
        <div className="iliteHome__sponsors-container">
          <SponsorTag
            image={require('../../assets/images/sponsors/usstem.png')}
            url="http://www.usstem.org">
            US Stem
          </SponsorTag>
          <SponsorTag
            image={require('../../assets/images/sponsors/aurora.png')}
            url="https://www.aurora.aero">
            Aurora Flight Sciences
          </SponsorTag>
          <SponsorTag
            image={require('../../assets/images/sponsors/microsoft.png')}
            url="https://www.microsoft.com/">
            Microsoft
          </SponsorTag>
          <SponsorTag
            image={require('../../assets/images/sponsors/afa.png')}
            url="http://www.afa.org/">
            Air Force Association
          </SponsorTag>
          <SponsorTag
            image={require('../../assets/images/sponsors/bah.png')}
            url="https://www.boozallen.com/">
            Booz Allen Hamilton
          </SponsorTag>
          <SponsorTag
            image={require('../../assets/images/sponsors/micron.png')}
            url="https://www.micron.com/">
            Micron
          </SponsorTag>
          <SponsorTag
            image={require('../../assets/images/sponsors/spark.png')}
            url="http://www.poweredbyspark.org/">
            SPARK
          </SponsorTag>
          <SponsorTag
            image={require('../../assets/images/sponsors/sabel.jpg')}
            url="http://sabelsystems.com/">
            Sabel Systems
          </SponsorTag>
          <SponsorTag
            image={require('../../assets/images/sponsors/lockheedmartin.png')}
            url="https://www.lockheedmartin.com/us.html">
            Lockheed Martin
          </SponsorTag>
          <SponsorTag
            image={require('../../assets/images/sponsors/pwcs.png')}
            url="https://www.pwcs.edu/">
            Prince William County Schools
          </SponsorTag>
          <SponsorTag
            image={require('../../assets/images/sponsors/macedontechnologies.png')}
            url="https://www.macedontechnologies.com/">
            Macedon Technologies
          </SponsorTag>
          <SponsorTag
            image={require('../../assets/images/sponsors/incadence.png')}
            url="https://www.incadencecorp.com/">
            InCadence
          </SponsorTag>
          <SponsorTag
            image={require('../../assets/images/sponsors/asco.png')}
            url="https://www.ascoweb.com/">
            ASCo
          </SponsorTag>
          <SponsorTag
            image={require('../../assets/images/sponsors/ABLE.png')}
            url="https://www.ablemoving.com/">
            Able
          </SponsorTag>
          <SponsorTag
            image={require('../../assets/images/sponsors/intufologo.png')}
            url="http://www.intufo.com/">
            Intufo
          </SponsorTag>
          <SponsorTag
            image={require('../../assets/images/sponsors/googlelogo.png')}
            url="https://about.google/?fg=1&utm_source=google-US&utm_medium=referral&utm_campaign=hp-header">
            Google
          </SponsorTag>
          <SponsorTag
            image={require('../../assets/images/sponsors/comcast.png')}
            url="https://corporate.comcast.com/">
            Comcast
          </SponsorTag>
          <SponsorTag
            image={require('../../assets/images/sponsors/battlefieldhighschool.jpg')}
            url="http://battlefieldhs.pwcs.edu/">
            Battlefield
          </SponsorTag>
        </div>
      </div>
    </div>
  );
};

IliteHome.propTypes = {

};

export default IliteHome;
