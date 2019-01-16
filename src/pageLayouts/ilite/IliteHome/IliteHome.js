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
          <Button division='frc' link="/ilite/about">
            Learn More About Us!
          </Button>
        </div>
      </div>
      <div className="iliteHome__news">
        <h1 className="iliteHome__news-header">News</h1>
        <br />
        <div className="iliteHome__news-container">
          <NewsCard title="N/A">
            We're boring and have no news!
          </NewsCard>
          <NewsCard title="N/A">
            We're boring and have no news!
          </NewsCard>
          <NewsCard title="N/A">
            We're boring and have no news!
          </NewsCard>
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
            image={require('../../../assets/images/sponsors/afa.png')}
            url="http://www.afa.org/">
            Air Force Association
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
        </div>
      </div>
    </div>
  );
};

IliteHome.propTypes = {

};

export default IliteHome;
