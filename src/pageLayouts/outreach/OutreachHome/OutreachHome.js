import React from 'react';
import Events from '../../../components/events';
import SponsorTag from '../../../components/SponsorTag';
import NewsCard from '../../../components/newscard';

const OutreachHome = (props) => {
  return (
    <div className='outreachHome'>
      <div className="outreachHome__banner">
        <div className="outreachHome__banner-text-container">
          <h1 className="outreachHome__banner-title">70,000+ minds reached</h1>
          <h2 className="outreachHome__banner-subtitle">Outreach at ILITE</h2>
          <p className="outreachHome__banner-description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis saepe nobis laborum dolorum facilis? Minima magnam, tempora odio veritatis aliquam eum sit repellendus dolores debitis molestias temporibus, repudiandae reprehenderit rerum.</p>
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
      <div className="outreachHome__news">
        <h1 className="outreachHome__news-header">News</h1>
        <br />
        <div className="outreachHome__news-container">
          <NewsCard title="Coast Guard" image={require('../../../assets/images/outreach/summercamps/stem1.jpg')}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, qui pariatur. Cum illo fugit reiciendis repudiandae ad porro officia earum?
          </NewsCard>
          <NewsCard title="Payton's Walk" image={require('../../../assets/images/outreach/summercamps/stem1.jpg')}>
            ILITE attended the Payton's Walk event on October 15th to support the anti-bullying cause. There we presented about FIRST robotics and continued our mission to inspire interest in STEM.
          </NewsCard>
          <NewsCard title="Puerto Rico" image={require('../../../assets/images/outreach/summercamps/stem1.jpg')}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, perspiciatis odio. Sequi quam, qui omnis itaque quasi minus natus ut?
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