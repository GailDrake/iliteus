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
        <h1 className="outreachHome__events-header">Outreach Events</h1>
        <br />
        <div className="outreachHome__events-container">
          <Events
            name="FLL Workshops"
            eventLink="/outreach/fll"
            date="Fall 2018"
            image="images/outreach/fll/workshop.jpg"
          />
          <Events
            name="Summer Camps"
            eventLink="/outreach/summercamps"
            date="June 12th - June 21st"
            image="images/outreach/summercamps/stem1.jpg"
          />
          <Events
            name="STEAM Expo"
            eventLink="http://www.haymakerstemexpo.org"
            date="January 27th"
            image="images/outreach/steamexpo/expo.jpg"
          />
        </div>
      </div>
      <div id="news" className="outreachHome__news">
        <h1 className="outreachHome__news-header">News</h1>
        <br />
        <div className="outreachHome__news-container">
          <NewsCard title="Coast Guard" image={require('../../../assets/images/outreach/fll/coastguard.png')}>
            ILITE sent FLL kits to members of the Coast Guard to introduce engineering and spread STEM to the community. We then hosted a Skype conference to answer questions and offer support.
          </NewsCard>
          <NewsCard title="Payton's Walk" image={require('../../../assets/images/outreach/fll/payton.png')}>
            ILITE attended the Payton's Walk event on October 15th to support the anti-bullying cause. There we presented about FIRST robotics and continued our mission to inspire interest in STEM.
          </NewsCard>
          <NewsCard title="Fair Oaks Center" image={require('../../../assets/images/outreach/fll/fairoaks.png')}>
            ILITE went to the Fair Oaks Center for Science to present about STEM. We taught the basics of programming using BOE-BOTS and the BASIC programming language.
          </NewsCard>
        </div>
      </div>
      <div className="outreachHome__sponsors">
        <h1 className="outreachHome__sponsors-header">Sponsors</h1>
        <p className="outreachHome__sponsors-description">We thank our Sponsors for their continued support</p>
        <br />
        <div className="outreachHome__sponsors-container">
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
            image={require('../../../assets/images/sponsors/afcea.jpg')}
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

OutreachHome.propTypes = {

};

export default OutreachHome;