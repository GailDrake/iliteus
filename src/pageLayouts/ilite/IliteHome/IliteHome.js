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
          <NewsCard title="ILITE gained two new sponsors at the Chesapeake District Championship" image={require('../../../assets/images/frc/dcmp-anomali.png')}>
            ILITE welcomed our new sponsor, Anomali, to the ILITE family and to the FRC competition at the Chesapeake District Championship. We enjoyed showing them around the event, and introducing them to our robot Arya. Over the weekend, we also welcomed another new sponsor, Aurora Flight Sciences, to the ILITE family. We are grateful for these wonderful sponsors' contribution and thankful for the support from all our sponsors, both old and new.
          </NewsCard>
          <NewsCard title="ILITE met with representatives at the Chesapeake District Championship" image={require('../../../assets/images/frc/dcmp-nasa.png')}>
            At the Chesapeake District Championship Event on April 11th-13th, ILITE members had to the opportunity to meet with Danica Roem, the representative of the 13th district in the Virginia House of Delegates, Congresswoman Wexton, and the Director of Planetary Science at NASA, Dr. Lori Glaze along with Dave Lavery, NASA Program Executive for Solar System Exploration. ILITE members enjoyed speaking with them about the FRC competition, ILITE’s business plan and political activism, and ILITE’s FIRST mentoring in the local and international communities. In an email correspondence with one of our students, Dr. Glaze said that “talking with you and the ILITE team was the highlight of my day Friday. I wish you all the best of luck”.
          </NewsCard>
          <NewsCard title="ILITE at Rumble in the Roads" image={require('../../../assets/images/frc/rumbleInTheRoads.jpg')}>
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
