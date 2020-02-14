import React from "react"

import LayoutWrapper from "../../components/LayoutWrapper"
import Button from "../../components/Button"
import Events from "../../components/events"
import NewsCard from "../../components/newscard"
import SponsorTag from "../../components/SponsorTag/SponsorTag"

const IliteHome = props => {
  return (
    <LayoutWrapper>
      <div className="iliteHome">
        <div className="iliteHome__banner">
          <div className="iliteHome__banner-text-container">
            <h1 className="iliteHome__banner-title">ILITE</h1>
            <h2 className="iliteHome__banner-subtitle">
              Inspiring Leaders In Technology and Engineering
            </h2>
            <p className="iliteHome__banner-description">
              We are a team founded on the principles of leadership, teamwork,
              and academic rigor. Through competitions, outreach, and mentorship
              we passionately advocate for science and technology in our
              schools, communities, and throughout the world.
            </p>
            <Button link="/ilite/mission">Learn More About Us!</Button>
          </div>
        </div>
        <div className="iliteHome__events">
          <h1 className="iliteHome__events-header">Upcoming Events</h1>
          <p className="iliteHome__events-subheader">
            We host a multitude of events throughout the year ranging from
            robotics competitions to summer camps to expos. Below are listed
            events that we will be hosting in the near future.
          </p>
          <div className="iliteHome__events-container">
            <Events
              name="FRC Week 1"
              date="February 28th, 2020"
              eventLink="https://www.firstchesapeake.org/first-programs/frc/first-chesapeake-district-events/northern-va"
              image="images/frc/week_one.jpg"
            />

            <Events
              name="Girl Scout Day at Udvar Hazy"
              date="March 14th, 2020"
              eventLink="https://airandspace.si.edu/events/women-aviation-space-family-day-2020"
              image="images/outreach/girlscouts.jpg"
            />

            <Events
              name="Summer Camps"
              date="June, 2020"
              eventLink="/outreach/summercamp"
              image="images/outreach/summercamps/lego3.jpg"
            />
          </div>
        </div>
        <div className="iliteHome__news">
          <h1 className="iliteHome__news-header">News</h1>
          <br />
          <div className="iliteHome__news-container">
            <NewsCard
              title="ILITE Hosts Kickoff 2020 for Local FRC Teams"
              image={require("../../assets/images/frc/kickoff-2020.jpg")}
            >
              On January 4th, 2020, ILITE opened their doors to local FRC teams
              to kickoff the 2020 FRC season! We experienced the unvieling of
              the game with over 10 FRC teams. We were joined by Team 3373 for a
              post-kickoff strategy session where we discussed various game
              aspects and possible play methods! ILITE is pumped for the 2020
              game, INFINITE RECHARGE, and cannot wait to see what the game will
              bring us this season.
            </NewsCard>
            <NewsCard
              title="ILITE Hosts 6th Annual Haymaker STEAM Expo"
              image={require("../../assets/images/outreach/STEAM.hostedevents.jpg")}
            >
              On January 25th, 2020, ILITE welcomed over 2,700+ attendees into
              our building for our 6th Annual Haymaker STEAM Expo. At this
              year's event we were joined by NASA, the FBI, and our local Fire
              Departments! Contuining last year's addition, a majority of booths
              were tailored towards Girl Scouts of all levels to earn badges
              from. We would like to extend our gratitude to all the volunteers
              and booth hosts.
            </NewsCard>
            <NewsCard
              title="ILITE at Bunny Bots 2019"
              image={require("../../assets/images/frc/bunnybots.jpg")}
            >
              ILITE participated in the offseason event, BunnyBots, which was
              hosted by team 449 at Montgomery Blair High School. With our
              robot, "JuiceBx", we made a formidable presence, ultimately
              finishing out in the semifinals. We strongly felt that it was a
              marvelous learning opportunity for the students to prepare for the
              2020 build season, and we're eager to apply the skills that we've
              learned! We would also like to give a big thank you to team 449
              for hosting this great event!
            </NewsCard>
          </div>
          <div className="iliteHome__news-button">
            <Button link="https://www.smore.com/u/team1885iliterobotics">
              Check out our team newsletters!
            </Button>
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
              image={require("../../assets/images/sponsors/usstem.png")}
              url="http://www.usstem.org"
            >
              US Stem
            </SponsorTag>
            <SponsorTag
              image={require("../../assets/images/sponsors/aurora.png")}
              url="https://www.aurora.aero"
            >
              Aurora Flight Sciences
            </SponsorTag>
            <SponsorTag
              image={require("../../assets/images/sponsors/microsoft.png")}
              url="https://www.microsoft.com/"
            >
              Microsoft
            </SponsorTag>
            <SponsorTag
              image={require("../../assets/images/sponsors/afa.png")}
              url="http://www.afa.org/"
            >
              Air Force Association
            </SponsorTag>
            <SponsorTag
              image={require("../../assets/images/sponsors/bah.png")}
              url="https://www.boozallen.com/"
            >
              Booz Allen Hamilton
            </SponsorTag>
            <SponsorTag
              image={require("../../assets/images/sponsors/micron.png")}
              url="https://www.micron.com/"
            >
              Micron
            </SponsorTag>
            <SponsorTag
              image={require("../../assets/images/sponsors/spark.png")}
              url="http://www.poweredbyspark.org/"
            >
              SPARK
            </SponsorTag>
            <SponsorTag
              image={require("../../assets/images/sponsors/sabel.jpg")}
              url="http://sabelsystems.com/"
            >
              Sabel Systems
            </SponsorTag>
            <SponsorTag
              image={require("../../assets/images/sponsors/lockheedmartin.png")}
              url="https://www.lockheedmartin.com/us.html"
            >
              Lockheed Martin
            </SponsorTag>
            <SponsorTag
              image={require("../../assets/images/sponsors/pwcs.png")}
              url="https://www.pwcs.edu/"
            >
              Prince William County Schools
            </SponsorTag>
            <SponsorTag
              image={require("../../assets/images/sponsors/macedontechnologies.png")}
              url="https://www.macedontechnologies.com/"
            >
              Macedon Technologies
            </SponsorTag>
            <SponsorTag
              image={require("../../assets/images/sponsors/incadence.png")}
              url="https://www.incadencecorp.com/"
            >
              InCadence
            </SponsorTag>
            <SponsorTag
              image={require("../../assets/images/sponsors/asco.png")}
              url="https://www.ascoweb.com/"
            >
              ASCo
            </SponsorTag>
            <SponsorTag
              image={require("../../assets/images/sponsors/ABLE.png")}
              url="https://www.ablemoving.com/"
            >
              Able
            </SponsorTag>
            <SponsorTag
              image={require("../../assets/images/sponsors/intufologo.png")}
              url="http://www.intufo.com/"
            >
              Intufo
            </SponsorTag>
            <SponsorTag
              image={require("../../assets/images/sponsors/googlelogo.png")}
              url="https://about.google/?fg=1&utm_source=google-US&utm_medium=referral&utm_campaign=hp-header"
            >
              Google
            </SponsorTag>
            <SponsorTag
              image={require("../../assets/images/sponsors/comcast.png")}
              url="https://corporate.comcast.com/"
            >
              Comcast
            </SponsorTag>
            <SponsorTag
              image={require("../../assets/images/sponsors/battlefieldhighschool.jpg")}
              url="http://battlefieldhs.pwcs.edu/"
            >
              Battlefield
            </SponsorTag>
          </div>
        </div>
      </div>
    </LayoutWrapper>
  )
}

IliteHome.propTypes = {}

export default IliteHome
