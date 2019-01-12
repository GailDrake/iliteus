import React from 'react';
import Events from '../../../components/events';
import SponsorTag from '../../../components/SponsorTag';
import NewsCard from '../../../components/newscard';
import Button from '../../../components/Button';

const OutreachHome = (props) => {
  return (
    <div className='outreachHome'>
      <div className="outreachHome__banner">
        <div className="outreachHome__banner-text-container">
          <h1 className="outreachHome__banner-title">70,000+ minds reached</h1>
          <h2 className="outreachHome__banner-subtitle">Outreach at ILITE</h2>
          <p className="outreachHome__banner-description">We strive to spread STEM throughout our community and inspire young minds. Through outreach events, seminars, and camps we fulfill our mission of advocating STEM and creating a brighter future.</p>
          <Button division='frc' link="#news">
            Learn More!
          </Button>
        </div>
      </div>
      <div className="outreachHome__events">
        <h1 className="outreachHome__events-header">About Outreach</h1>
        <br />
        <p className="outreachHome__description">
        ILITE hosts and plans a majority of the STEAM related events at our school. Additionally, we help spread the word, and bring STEAM to our community in a big way. We utilize events such as the STEAM Expo, and the Summer Camps to teach our community about the different aspects of STEAM, as well as get them interested in the possibilities STEAM has for the future. Our goal as ILITE is to inspire the future generation and encourage them to pursue STEAM.
        </p>
      </div>
      <div id="news" className="outreachHome__news">
        <h1 className="outreachHome__news-header">Upcoming Events</h1>
        <br />
        <p className="outreachHome__description">
        We host a multitude of events including the STEAM Expo, the FRC Competition, and the FTC competition. Click on the images below to find out more.
        </p>
      </div>
      <div className="outreachHome__sponsors">
        <h1 className="outreachHome__sponsors-header">FLL and Summer Camps</h1>
        <br />
        <p className="outreachHome__description">
        We host seasonal activities teaching kids about certain aspects of STEAM and robotics with FLL being in the fall, and the summer camps being in the summer. In doing this, we introduce the kids to the world of STEAM, and nurture their interest in technology.
        </p>
      </div>
    </div>
  );
};

OutreachHome.propTypes = {

};

export default OutreachHome;