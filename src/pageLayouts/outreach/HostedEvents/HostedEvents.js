import React from 'react';
import Container from '../../../templates/container';
import Button from '../../../components/Button';

const HostedEvents = () =>
  <Container title="Hosted Events" subtitle="Check out all of the events hosted by ILITE">
    <div className="hosted-events">
      <h1 className="hostedevents__header">2018 - 2019 Season</h1>
      <p>
        ILITE hosts multiple events during the summer, competition season,
        and during the regular school year. Some of our most famous ones include our FRC
        District Competition, our Summer Camps, FLL workshops, and our FRC offseason
        competition, IROC.
      </p>
      <div className="event">
        <div className="event__description">
          <div>
            <img src={require('../../../assets/images/outreach/fll11.jpg')} alt="" />
          </div>
          <div>
            <h1 className="hostedevents__subheader">Summer Camps</h1>
            <hr />
            <p>
              We here at ILITE firmly believe that all children deserve to learn about the wonders of the world
              around us through the exploration of STEM. We offer a variety of STEM summer camps, in areas
              such as cyber security, FLL, and engineering. The camps are taught and run by ILITE students. We hope
              you enjoy our camps!
            </p>
          </div>
        </div>
        <Button division="frc" link="/outreach/SummerCamps">See Our Camps!</Button>
      </div>
      <div className="event">
        <div className="event__description">
          <div>
            <img src={require('../../../assets/images/RoverRuckus.jpg')} alt="" />
          </div>
          <div>
            <h1 className="hostedevents__subheader">FTC Competitions</h1>
            <hr />
            <p>
              Each year, ILITE hosts a district competition for FTC, or the First Tech Challenge.
              We often host 30+ teams every competition, including several of our own. The competition
              takes place within the first two weekends of December. Checkout <a href="http://www.firstchesapeake.org/northern-virginia-qualifier-1">our FTC website</a> for more information.
            </p>
          </div>
        </div>
        <Button link="http://www.firstchesapeake.org/northern-virginia-qualifier-1" division="frc">Learn More!</Button>
      </div>
      <div className="event">
        <div className="event__description">
          <div>
            <img src={require('../../../assets/images/FRC_DeepSpace.jpg')} alt="" />
          </div>
          <div>
            <h1 className="hostedevents__subheader">FRC District Events</h1>
            <hr />
            <p>
              Every year, ILITE Robotics hosts a district event for week one of the FRC season. Like the FTC
              event, we find ourselves with over three dozen competing teams - a number that has continued to grow
              since we have started hosting these competitions! Take a look at <a href="http://www.firstchesapeake.org/first-programs/frc/first-chesapeake-district-events/northern-va">our upcoming week 1 competitions</a>!
            </p>
          </div>
        </div>
        <Button link="http://www.firstchesapeake.org/first-programs/frc/first-chesapeake-district-events/northern-va" division="frc">Learn More!</Button>
      </div>
      <div className="event">
        <div className="event__description">
          <div>
            <img src={require('../../../assets/images/logos/IROC_Logo.jpg')} alt="" />
          </div>
          <div>
            <h1 className="hostedevents__subheader">IROC</h1>
            <hr />
            <p>
              At the end of October, ILITE Robotics hosts a robotics competition called IROC, or
              the ILITE Robotics Offseason Challenge. Teams play the game from the previous competition season.
              The last IROC saw the return of the STEAMworks game, one of the most cherished and respected
              games in FRC!
            </p>
          </div>
        </div>
        <Button link="http://irocoffseason.org/" division="frc">Learn More!</Button>
      </div>
      <div className="event">
        <div className="event__description">
          <div>
            <img src={require('../../../assets/images/frc/summer-camps/FLL.png')} alt="" />
          </div>
          <div>
            <h1 className="hostedevents__subheader">FLL Workshops</h1>
            <hr />
            <p>
              Every year, ILITE hosts FLL camps to inspire and train the future generations of engineers by
              preparing teams to take on FLL challenges of the past. This prepares the teams to take on the
              the official FLL challenge that will follow soon after the camp's end.
            </p>
          </div>
        </div>
        <Button link="/outreach/Fll" division="frc">Learn More!</Button>
      </div>
    </div>
  </Container>

export default HostedEvents;