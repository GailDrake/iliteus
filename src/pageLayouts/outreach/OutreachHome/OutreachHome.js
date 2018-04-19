import React from 'react';
import Events from '../../../components/events';
import SponsorTag from '../../../components/SponsorTag';

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
          {/* <img src={require("../../../assets/images/outreach/fll")} */}
          <h1>Puerto Rico</h1>
          <br />
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius odit iure deserunt nihil aperiam voluptatem unde similique porro. Inventore, tempore? Officiis modi dolor, tempore harum dolores quam ipsam voluptatem ullam, ut eligendi accusamus suscipit reprehenderit quaerat error deserunt vitae. Et saepe, atque magnam quis modi autem voluptas accusantium sit rem temporibus nesciunt beatae vitae nisi cumque in nulla vel quam hic, aperiam veritatis enim expedita aut? Pariatur fuga similique debitis corrupti rerum aliquid non nesciunt alias tempora? Quas quod repellendus exercitationem rem sint rerum voluptatem aperiam laborum commodi dolor, iste odio. Soluta repellat alias assumenda esse omnis porro ullam perspiciatis!</p>
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
            image={require('../../../assets/images/sponsors/floodtech.png')}
            url="http://www.a1floodtech.com">
            A1 Floodtech
          </SponsorTag>
          <SponsorTag
            image={require('../../../assets/images/sponsors/floodtech.png')}
            url="http://www.a1floodtech.com">
            A1 Floodtech
          </SponsorTag>
          <SponsorTag
            image={require('../../../assets/images/sponsors/floodtech.png')}
            url="http://www.a1floodtech.com">
            A1 Floodtech
          </SponsorTag><SponsorTag
            image={require('../../../assets/images/sponsors/floodtech.png')}
            url="http://www.a1floodtech.com">
            A1 Floodtech
          </SponsorTag><SponsorTag
            image={require('../../../assets/images/sponsors/floodtech.png')}
            url="http://www.a1floodtech.com">
            A1 Floodtech
          </SponsorTag><SponsorTag
            image={require('../../../assets/images/sponsors/floodtech.png')}
            url="http://www.a1floodtech.com">
            A1 Floodtech
          </SponsorTag>
          <SponsorTag
            image={require('../../../assets/images/sponsors/floodtech.png')}
            url="http://www.a1floodtech.com">
            A1 Floodtech
          </SponsorTag>
          <SponsorTag
            image={require('../../../assets/images/sponsors/floodtech.png')}
            url="http://www.a1floodtech.com">
            A1 Floodtech
          </SponsorTag>
        </div>
      </div>
    </div>
  );
};

OutreachHome.propTypes = {

};

export default OutreachHome;