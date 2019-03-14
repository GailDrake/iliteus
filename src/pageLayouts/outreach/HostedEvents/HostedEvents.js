import React from "react";
import Container from "../../../templates/container";
import Button from "../../../components/Button";

const HostedEvents = () => (
  <Container
    title="Hosted Events"
    subtitle="Check out all of the events hosted by ILITE"
  >
    <div className="hosted-events">
      <h1 className="hostedevents__header">2018 - 2019 Season</h1>
      <p>
        ILITE hosts multiple events during the summer, competition season, and
        during the regular school year. Some of our most famous ones include our
        FRC District Competition, our Summer Camps, FLL workshops, and our FRC
        offseason competition, IROC.
      </p>
      <div className="event">
        <div className="event__description">
          <div>
            <img
              src={require("../../../assets/images/FRC_DeepSpace.jpg")}
              alt=""
            />
          </div>
          <div>
            <h1 className="hostedevents__subheader">FRC Week 1 District Event</h1>
            <hr />
            <p>
              This year ILITE Robotics hosted the district event for week one of the FRC season.
              We hosted more than 30 teams this competition - a number that has continued to grow
               since we have started hosting these competitions! This year we're excited to have
                been a part of Destination: Deep Space.
            </p>
            <div className="button_contain">
              <br />
              <Button
                link="http://www.firstchesapeake.org/first-programs/frc/first-chesapeake-district-events/northern-va"
                division="frc"
              >
                Learn More!
              </Button>
            </div>
          </div>
        </div>
      </div>

      <hr className="hostedevents__hr" />

      <div className="event">
        <div className="event__description">
          <div>
            <img
              src={require("../../../assets/images/outreach/steamexpo/expo.jpg")}
              alt=""
            />
          </div>
          <div>
            <h1 className="hostedevents__subheader">Steam Expo</h1>
            <hr />
            <p>
              A unique opportunity to explore the various aspects of science,
              technology, engineering, art, and mathematics. In this annual
              event, we invite a variety of companies, both small and large, to
              share their knowledge with the community. Activities include,
              but are not limited to, logic puzzles, simulations, arts and
              crafts, and technological demonstrations that are sure to teach
              everyone something new.
            </p>
            <div className="button_contain">
              <br />
              <Button division="frc" link="http://www.ilite.info/">
                Learn More!
              </Button>
            </div>
          </div>
        </div>
      </div>

      <hr className="hostedevents__hr" />

      <div className="event">
        <div className="event__description">
          <div>
            <img
              src={require("../../../assets/images/outreach/fll11.jpg")}
              alt=""
            />
          </div>
          <div>
            <h1 className="hostedevents__subheader">Summer Camps</h1>
            <hr />
            <p>
              We here at ILITE firmly believe that all children deserve to learn
              about the wonders of the world around us through the exploration
              of STEM. We offer a variety of STEM summer camps, in areas such as
              cyber security, FLL, and engineering. The camps are taught and run
              by ILITE students. We hope you enjoy our camps!
            </p>
            <div className="button_contain">
              <br />
              <Button division="frc" link="/outreach/SummerCamps">
                Learn More!
              </Button>
            </div>
          </div>
        </div>
      </div>

      <hr className="hostedevents__hr" />

      <div className="event">
        <div className="event__description">
          <div>
            <img
              src={require("../../../assets/images/RoverRuckus.jpg")}
              alt=""
            />
          </div>
          <div>
            <h1 className="hostedevents__subheader">FTC Qualifier</h1>
            <hr />
            <p>
              Annually, ILITE hosts a Northern Virginia Qualifier for FTC teams in the Chesapeake area. For this years game, Rover Ruckus, we hosted 36 teams. The competition took place on December 1st, 2018.
            </p>
            <div className="button_contain">
              <br />
              <Button
                link="http://www.firstchesapeake.org/northern-virginia-qualifier-1"
                division="frc"
              >
                Learn More!
              </Button>
            </div>
          </div>
        </div>
      </div>

      <hr className="hostedevents__hr" />

      <div className="event">
        <div className="event__description">
          <div>
            <img
              src={require("../../../assets/images/logos/IROC_Logo.jpg")}
              alt=""
              style={{ height: "190px" }}
            />
          </div>
          <div>
            <h1 className="hostedevents__subheader">IROC</h1>
            <hr />
            <p>
              At the end of every October, ILITE Robotics hosts a robotics competition
              called ILITE Robotics Offseason Challenge, better known as IROC. Teams play
              the game from the previous competition season. The last IROC saw
              the return of last years game, Power Up.
            </p>
            <div className="button_contain">
              <br />
              <Button link="http://irocoffseason.org/" division="frc">
                Learn More!
              </Button>
            </div>
          </div>
        </div>
      </div>

      <hr className="hostedevents__hr" />

      <div className="event">
        <div className="event__description">
          <div>
            <img
              src={require("../../../assets/images/frc/summer-camps/FLL.png")}
              alt=""
            />
          </div>
          <div>
            <h1 className="hostedevents__subheader">FLL Workshops</h1>
            <hr />
            <p>
              Every year, ILITE hosts FLL workshops to teach teams and help them with specific challenges. ILITE students teach both basic and advanced topics for beginners and veternans alike. These workshops serve to prepare the attending teams for the current FLL season.
            </p>
            <div className="button_contain">
              <br />
              <Button link="/outreach/Fll" division="frc">
                Learn More!
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Container>
);

export default HostedEvents;
