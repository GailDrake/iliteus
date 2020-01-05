import React from 'react';

import Button from '../../../components/Button';
import Events from '../../../components/events';
import NewsCard from '../../../components/newscard/';
import SponsorTag from '../../../components/SponsorTag/SponsorTag';


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
      <div className="iliteHome__description">
        <h1 className="iliteHome__description-header">What is ILITE?</h1>
        <br />
        <div className="iliteHome__description-container">
          <p>ILITE stands for "Inspiring Leaders In Technology and Engineering" and we are a robotics team at Battlefield High School consisting of a FIRST Robotics Competition team, multiple FIRST Tech Challenge teams, a Cyber Patriot Cyber Defense team, and a Betaware Computer Science team. However, ILITE does much more than just robotics. We are very active in our community, having founded other robotics teams and STEAM related programs in schools throughout the county, and we host numerous events, workshops, and camps throughout the year to spread the message of STEAM. Outreach is just as important to us as competing in robotics and ILITE is committed to creating a community of STEAM.</p>
          <br />
          <div className="iliteHome__description-button">
            <Button link="/frc">Learn About Our FRC Team</Button>
            <Button link="/outreach">Learn About Our Outreach</Button>
          </div>
        </div>
      </div>
      <div className="iliteHome__news">
        <h1 className="iliteHome__news-header">News</h1>
        <br />
        <div className="iliteHome__news-container">
          <NewsCard title="ILITE won the Chairman's Award at the Chesapeake District Championship" image={require('../../../assets/images/frc/dcmp-chairmans.png')}>
            ILITE was honored with the FIRST Chesapeake District Championship Chairman’s Award, which qualifies us for the FIRST Championship in Detroit in addition to the robot qualification. The Chairman’s Award is the most prestigious award at FIRST, it honors the team that best represents a model for other teams to emulate and best embodies the purpose and goals of FIRST. We are so excited to represent the Chesapeake District at the world level, and we cannot wait to compete next week!
          </NewsCard>
          <NewsCard title="ILITE hosts ILITE Robotics Offseason Challenge" image={require('../../../assets/images/outreach/IROC.hostedevents.jpg')}>
            ILITE welcomed local robotics teams to the ILITE Robotics Offseason Challenge (otherwise known as IROC) on October 26, 2019 at our home- Battlefield High School.
  Competitors united to show off their robots and driver skills in the 2019's FIRST Robotics Competition, Destination: Deep Space.
  We are so thankful for all the wonderful teams who attended and wish everyone a good season.
          </NewsCard>
          <NewsCard title="ILITE met with representatives at the Chesapeake District Championship" image={require('../../../assets/images/frc/dcmp-nasa.png')}>
            At the Chesapeake District Championship Event on April 11th-13th, ILITE members had to the opportunity to meet with Danica Roem, the representative of the 13th district in the Virginia House of Delegates, Congresswoman Wexton, and the Director of Planetary Science at NASA, Dr. Lori Glaze along with Dave Lavery, NASA Program Executive for Solar System Exploration. ILITE members enjoyed speaking with them about the FRC competition, ILITE’s business plan and political activism, and ILITE’s FIRST mentoring in the local and international communities. In an email correspondence with one of our students, Dr. Glaze said that “talking with you and the ILITE team was the highlight of my day Friday. I wish you all the best of luck”.
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
            image={require('../../../assets/images/sponsors/usstem.png')}
            url="http://www.usstem.org">
            US Stem
          </SponsorTag>
          <SponsorTag
            image={require('../../../assets/images/sponsors/aurora.png')}
            url="https://www.aurora.aero">
            Aurora Flight Sciences
          </SponsorTag>
          <SponsorTag
            image={require('../../../assets/images/sponsors/anomali.png')}
            url="https://www.anomali.com">
            Anomali
          </SponsorTag>
          <SponsorTag
            image={require('../../../assets/images/sponsors/afa.png')}
            url="http://www.afa.org/">
            Air Force Association
          </SponsorTag>
          <SponsorTag
            image={require('../../../assets/images/sponsors/bah.png')}
            url="https://www.boozallen.com/">
            Booz Allen Hamilton
          </SponsorTag>
          <SponsorTag
            image={require('../../../assets/images/sponsors/micron.png')}
            url="https://www.micron.com/">
            Micron
          </SponsorTag>
          <SponsorTag
            image={require('../../../assets/images/sponsors/spark.jpg')}
            url="http://www.poweredbyspark.org/">
            SPARK
          </SponsorTag>
          <SponsorTag
            image={require('../../../assets/images/sponsors/pepsi.png')}
            url="https://www.pepsi.com/">
            Pepsi
          </SponsorTag>
          <SponsorTag
            image={require('../../../assets/images/sponsors/lockheedmartin.png')}
            url="https://www.lockheedmartin.com/us.html">
            Lockheed Martin
          </SponsorTag>
          <SponsorTag
            image={require('../../../assets/images/sponsors/pwcs.png')}
            url="https://www.pwcs.edu/">
            Prince William County Schools
          </SponsorTag>
          <SponsorTag
            image={require('../../../assets/images/sponsors/macedontechnologies.png')}
            url="https://www.macedontechnologies.com/">
            Macedon Technologies
          </SponsorTag>
        </div>
      </div>
    </div>
  );
};

IliteHome.propTypes = {

};

export default IliteHome;
