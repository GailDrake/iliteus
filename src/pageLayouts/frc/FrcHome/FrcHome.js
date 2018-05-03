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
            name="ILITE Summer Camps"
            eventLink="ilite.us"
            date="June, 2018"
            image="images/outreach/summercamps/stem1.jpg" />
          <Events
            name="FTC Events"
            eventLink="ilite.us"
            date="December, 2018"
            image="images/FTC_logo.png" />
          <Events
            name="IROC"
            eventLink="ilite.us"
            date="October, 2018"
            image="images/frc/iroc-group-photo.png" />
        </div>
      </div>
      <div className="frcHome__news">
        <h1 className="frcHome__news-header">News</h1>
        <br />
        <div className="frcHome__news-container">
          <NewsCard title="FIRST Lego League Workshop" image={require('../../../assets/images/frc/summer-camps/FLL.png')}>
            ILITE Robotics has helped create and foster 60+ FLL teams within the community and planned interactive workshops for teams to gather and develop their knowledge in FLL.
          </NewsCard>
          <NewsCard title="Triple Crown Win at District Championship" image={require('../../../assets/images/frc/district_chairmans.jpeg')}>
            Ilite had great success at the First Chesepeake District Championship. We won the tournament, the Chairman's Award, and first place in the District. Being the first, and only team in our district to win all three.
          </NewsCard>
          <NewsCard title="IROC Competition is the Largest Ever Held!" image={require('../../../assets/images/frc/iroc-group-photo.png')}>
            With 33 registered teams, the 2016 ILITE Robotics Off-Season Challenge was the largest ever held. The winning alliance was composed of FRC Teams 384, Sparky Robotics, 5338, RoboLoCos, and 2363, Triple Helix. Congratulations teams!
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
            image={require('../../../assets/images/sponsors/incadence.png')}
            url="http://www.incadencecorp.com/">
            Incadence
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
            url="http://www.a1floodtech.com">
            Macedon Technologies
          </SponsorTag>
          <SponsorTag
            image={require('../../../assets/images/sponsors/micron.png')}
            url="https://www.micron.com/">
            Micron
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
            image={require('../../../assets/images/sponsors/engility.png')}
            url="http://www.engility.com/#HIFh85X6P1kKQ0gK.97">
            US Stem
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
