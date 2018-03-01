import React from 'react';
import Container from '../../../templates/Container'
import QuoteLeft from '../../../IconComponents/Quoteleft'
import QuoteRight from '../../../IconComponents/Quoteright'
import haymarketday from '../../../assets/images/frc/about/haymarketday.jpg'
import stemexpo1 from '../../../assets/images/frc/about/stemexpo1.jpg'
import teddy from '../../../assets/images/frc/about/teddy.jpg'
import books from '../../../assets/images/frc/about/books.jpg'
import stemexpo2 from '../../../assets/images/frc/about/stemexpo2.jpg'
import ussstem from '../../../assets/images/frc/about/usstemfoundation.jpg'
// import classnames from 'classnames';

const About = (props) => {
  return (
    <Container division="frc" title="About" subtitle="About team 1885.">
      <div className='about'>
        <h1 className='about__header'>Mission & Vision</h1>
        <p className='about__text'>
          Here at ILITE First Team 1885, we believe that every student is a leader.
          Through our different subteams of business, graphics, electronics,
          programming, and build, we work very hard to give every team member the opportunity to learn and lead.
          We have created an environment in which FIRST Robotics is so loved that our alumni volunteer across the nation even after graduating.
          <br />
          <br />
          Our leadership reaches beyond of FIRST Team 1885. We have created an identity for ourselves in our community,
          county, state, and nation. ILITE reaches out to our community through town festivals, charitable involvement,
          elementary school tutoring, and hosting our annual Haymaker STEM Expo. On a broader scale, ILITE members have
          lobbied politicians through their School Board and meetings at the Capitol to encourage the advancement of STEM in education.
          <br />
          <br />
          Whether it be through our summer camps that teach hundreds of students about STEM, or our annually-hosted FIRST competitions,
          ILITE continuously inspires those around them. We strive to embody the FIRST mission of "More than Robots" in all we do."
          </p>
        <h1 className='about__subheader'>Our Mission:</h1>
        <img className='about__image' src={haymarketday} />
        <img className='about__image' src={stemexpo1} />
        <img className='about__image' src={teddy} />
        <p className='about__greybox'> <span className='about__quotes'><QuoteRight fill='pink' /></span> To inspire young people to become leaders in science, technology, engineering,
          and mathematics by providing them with hands-on engineering challenges with the mentorship of industry professionals,
                 to build a foundation of both technical and social skills and values, to create leaders in technology and engineering.<span className='about__quotes'><QuoteLeft fill='pink' /></span>
        </p>
        <h1 className='about__subheader'>Our Vision:</h1>
        <img className='about__image' src={books} />
        <img className='about__image' src={stemexpo2} />
        <img className='about__image' src={ussstem} />
        <p className='about__greybox'> <span className='about__quotes'><QuoteRight fill='pink' /></span> A community of learning where persons, young and old, share a common goal of problem solving through science,
                technology, engineering, and mathematics to improve the world in which we live for all persons.<span className='about__quotes'><QuoteLeft fill='pink' /></span>
        </p>
        <h1 className='about__subheader'>ILITE-ism:</h1>
        <p className='about__text'>Outreach is an effort which requires an adverse plan of attack to reach the greatest number of persons,
          all of whom come from different backgrounds. ILITE holds a core value it calls “ILITE-ism” which is the belief that everyone,
          regardless of background or profession can be an advocate for technology and engineering.
        </p>
        <h1 className='about__header'>Team History</h1>
        <p className='about__text'></p>
      </div>
    </Container>
  );
};

About.propTypes = {

};

export default About;
