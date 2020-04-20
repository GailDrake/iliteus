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
              title="ILITE hosts Week 1"
              image={require("../../assets/images/frc/week1-2020.jpg")}
            >
              From February 28th to March 1st, ILITE hosted over forty teams for
              the Week 1 Chesapeake District Qualifier. We also saw over ten FLL Jr.
              teams participate in our FLL Jr. Expo event. We would like to express a
              our gratitude for all the marvelous volunteers that helped make the event
              a success! We ran on time and smoothly. We saw an intense and amazing set
              of matches played out with the utmost gracious professionalism. Great Job
              to everyone who participated.
            </NewsCard>
            <NewsCard
              title="ILITE competes at Week 2 in Bethesda"
              image={require("../../assets/images/frc/week2-2020.jpg")}
            >
              ILITE competed March 7th-8th at Walt Whitman High school in Bethesda, Maryland.
              We played strong all the way to quaterfinals with an amazing alliance with Team 8217
              and Team 449. We were given the honor of moving on to the District Level to compete
              for the Chairman's Award. We are incredibly grateful for all the wonderful volunteers
              that gave us their time to put together a safe and enjoyable event for all.
            </NewsCard>
            <NewsCard
              title="COVID-19 Update and Response"
              image={require("../../assets/images/frc/spirit-2020.jpg")}
            >
              During the COVID-19 crisis, ILITE Robotics is creating online resources for children and families to continue learning, growing, and creating through interactive STEM activities. From space science to engineering, ILITE is offering students a way to learn about STEM concepts through fun lessons and experiments using common household materials. During these unprecedented times, ILITE hopes to supplement the online learning experience and inspire young minds to explore, build, make, and play from the comfort of their homes. In addition, students from the electronics subteam presented a lesson on “Using EasyEDA to design custom circuit boards” which can be found <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=mBp6GNxnMmg">here</a> and next week students from the scouting and strategy subteam will present an “Intro to Airtable” lesson on the same channel.
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
