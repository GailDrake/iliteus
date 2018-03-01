import React from 'react';
import Container from '../../../templates/Container';
// import classnames from 'classnames';

const About = (props) => {
  return (
    <Container division="frc" title="About" subtitle="About ILITE Team 1885">
      <div className='about'>
        <div className='about__container'>
          <p>
            Here at ILITE First Team 1885, we believe that every student is a leader.
            Through our different subteams of business, graphics, electronics, programming,
            and build, we work very hard to give every team member the opportunity to learn and lead.
            We have created an environment in which FIRST Robotics is so loved that our alumni volunteer across the nation even after graduating.
          <br />
            <br />
            Our leadership reaches beyond of FIRST Team 1885.
            We have created an identity for ourselves in our community, county, state, and nation.
            ILITE reaches out to our community through town festivals, charitable involvement,
            elementary school tutoring, and hosting our annual Haymaker STEM Expo. On a broader scale,
            ILITE members have lobbied politicians through their School Board and meetings at the Capitol to encourage the advancement of STEM in education.
          <br />
            <br />
            Whether it be through our summer camps that teach hundreds of students about STEM,
            or our annually-hosted FIRST competitions, ILITE continuously inspires those around them.
            We strive to embody the FIRST mission of "More than Robots" in all we do."
        </p>
          <h1>Our Mission:</h1>
          <div className='about__quotebox'>
            "To inspire young people to become leaders in science, technology, engineering, and mathematics
            by providing them with hands-on engineering challenges with the mentorship of industry professionals,
            to build a foundation of both technical and social skills and values, to create leaders in technology and engineering."
            </div>
        </div>
      </div>
    </Container>
  );
};

About.propTypes = {

};

export default About;
