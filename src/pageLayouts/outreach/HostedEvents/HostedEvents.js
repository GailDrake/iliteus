import React from "react"
import LayoutWrapper from "../../../components/LayoutWrapper"
import Container from "../../../templates/container"
import Button from "../../../components/Button"

const HostedEvents = () => (
  <LayoutWrapper>
    <Container
      title="Hosted Events"
      subtitle="Check out all of the events hosted by ILITE"
      bannerImage="hostedevents__banner"
    >
      <div className="hosted-events">
        <h1 className="hostedevents__header">2019 - 2020 Season</h1>
        <p>
          ILITE hosts multiple events during the summer, competition season, and
          during the regular school year. Some of our most famous ones include
          our FRC District Competition, our Summer Camps, the STEAM Expo, and
          our FRC offseason competition, IROC.
        </p>

        <div className="event">
          <div className="event__description">
            <div>
              <img
                src={require("../../../assets/images/logos/IROC_Logo.jpg")}
                alt="IROC Logo"
                style={{ height: "190px" }}
              />
            </div>
            <div>
              <h1 className="hostedevents__subheader" id="iroc">
                IROC
              </h1>
              <hr />
              <p>
                This year, ILITE once again hosted their annual IROC
                competition. On October 26th, teams came together to compete in
                last year's FRC game, Destination: Deep Space. The IROC
                offseason challenge brought teams together to learn and have fun
                before the new season starts.
              </p>
              <div className="button_contain">
                <br />
                <Button link="https://irocoffseason.org" division="frc">
                  Learn More
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
                share their knowledge with the community each year. Activities include,
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

          <hr className="hostedevents__hr" />

          <div className="event">
            <div className="event__description">
              <div>
                <img
                  src={require("../../../assets/images/logos/infinite-recharge.png")}
                  alt="Infinite Recharge Logo"
                />
              </div>
              <div>
                <h1 className="hostedevents__subheader">
                  FRC Week 1 District Event
              </h1>
                <hr />
                <p>
                  ILITE will be hosting a Week 1 FRC District event once again
                  this year. Hosted February 28th to March 1st 2020, this event
                  will compose of FRC teams from all around the Chesapeake
                  District competing with gracious professionalism. FIRST's new
                  game for this season, Infinite Recharge, will be featured as the
                  mode of competition. We are incredibly excited to see and play
                  this new game along with all our fellow teams.
              </p>
                <div className="button_contain">
                  <br />
                  <Button
                    link="https://www.firstchesapeake.org/first-programs/frc/first-chesapeake-district-events/northern-va"
                    division="frc"
                  >
                    Learn More
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
                  alt="Summer Camps"
                />
              </div>
              <div>
                <h1 className="hostedevents__subheader">Summer Camps</h1>
                <hr />
                <p>
                  We here at ILITE firmly believe that all children deserve to
                  learn about the wonders of the world around us through the
                  exploration of STEM. We offer a variety of STEM summer camps, in
                  areas such as cyber security, FLL, and engineering. The camps
                  are taught and run by ILITE students. We hope you enjoy our
                  camps!
              </p>
                <div className="button_contain">
                  <br />
                  <Button division="frc" link="/outreach/SummerCamps">
                    Learn More
                </Button>
                </div>
              </div>
            </div>
          </div>

          {/*<hr className="hostedevents__hr" />

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
      </div>*/}
        </div>
    </Container>
  </LayoutWrapper>
    )
    
    export default HostedEvents
