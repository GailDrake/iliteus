import React from "react"
import LayoutWrapper from "../../../components/LayoutWrapper"
import Container from "../../../templates/container"
import QuoteLeft from "../../../IconComponents/Quoteleft"
import QuoteRight from "../../../IconComponents/Quoteright"
import haymarketday from "../../../assets/images/frc/mission/haymarketday.jpg"
import stemexpo1 from "../../../assets/images/frc/mission/stemexpo1.jpg"
import teddy from "../../../assets/images/frc/mission/teddy.jpg"
import books from "../../../assets/images/frc/mission/books.jpg"
import stemexpo2 from "../../../assets/images/frc/mission/stemexpo2.jpg"
import ussstem from "../../../assets/images/frc/mission/usstemfoundation.jpg"
import history from "../../../assets/images/frc/mission/history.jpg"
import trophy from "../../../assets/images/frc/mission/trophy.jpg"
import pits from "../../../assets/images/frc/mission/pitspeaking.jpg"
import experiment from "../../../assets/images/frc/mission/experiment.jpg"
import gather from "../../../assets/images/frc/mission/gather.jpg"
import stemexpo3 from "../../../assets/images/frc/mission/stemexpo3.jpg"
// import classnames from 'classnames';

const Mission = props => {
  return (
    <LayoutWrapper>
      <Container
        title="Mission"
        subtitle="ILITE's mission and vision represented throughout our history"
        bannerImage="mission__banner"
      >
        <div className="mission">
          <h1 className="mission__header">Mission & Vision</h1>
          <p className="mission__text">
            Here at ILITE FIRST Team 1885, we believe that every student is a
            leader. Through our different subteams of build, electronics,
            programming, outreach, sponsorship, scouting, web, and graphics, we
            work very hard to give every team member the opportunity to learn
            and lead. We have created an environment in which FIRST Robotics is
            so loved that our alumni volunteer at FIRST events across the nation
            even after graduating.
            <br />
            <br />
            Our leadership reaches beyond FIRST Team 1885. We have created an
            identity for ourselves in our community, county, state, and nation.
            ILITE reaches out to our community through town festivals,
            charitable involvement, elementary school tutoring, and hosting our
            annual Haymaker STEAM Expo. On a broader scale, ILITE members have
            lobbied politicians through their School Board and meetings at the
            Capitol to encourage the advancement of STEAM in education.
            <br />
            <br />
            Whether it be through our summer camps that teach hundreds of
            students about STEAM, or our annually-hosted FIRST competitions,
            ILITE continuously inspires those around them. We strive to embody
            the FIRST mission of "More than Robots" in all we do."
          </p>
          <h1 className="mission__subheader">Our Mission:</h1>
          <div className="mission__image-container">
            <div className="mission__stay">
              <img
                className="mission__image mission__stay"
                src={haymarketday}
              />
            </div>
            <div className="mission__remove">
              <img className="mission__image mission__remove" src={stemexpo1} />
            </div>
            <div className="mission__remove">
              <img className="mission__image mission__remove" src={teddy} />
            </div>
          </div>
          <p className="mission__greybox">
            {" "}
            <span className="mission__quotes">
              <QuoteRight fill="#787878" />
            </span>{" "}
            To inspire young people to become leaders in science, technology,
            engineering, and mathematics by providing them with hands-on
            engineering challenges and the mentorship of industry professionals,
            to build a foundation of both technical and social skills, and to
            create leaders in technology and engineering.
            <span className="mission__quotes">
              <QuoteLeft fill="#787878" />
            </span>
          </p>
          <h1 className="mission__subheader">Our Vision:</h1>
          <div className="mission__image-container">
            <div className="mission__remove">
              <img className="mission__image mission__remove" src={books} />
            </div>
            <div className="mission__stay">
              <img className="mission__image mission__stay" src={stemexpo2} />
            </div>
            <div className="mission__remove">
              <img className="mission__image mission__remove" src={ussstem} />
            </div>
          </div>
          <p className="mission__greybox">
            {" "}
            <span className="mission__quotes">
              <QuoteRight fill="#787878" />
            </span>{" "}
            A community of learning where people, young and old, share a common
            goal of problem solving through science, technology, engineering,
            and mathematics to improve the world in which we live for all.
            <span className="mission__quotes">
              <QuoteLeft fill="#787878" />
            </span>
          </p>
          <h1 className="mission__subheader">ILITE-ism:</h1>
          <div className="mission__image-container">
            <div className="mission__remove">
              <img className="mission__image mission__remove" src={stemexpo3} />
            </div>
            <div className="mission__stay">
              <img className="mission__image mission__stay" src={gather} />
            </div>
            <div className="mission__remove">
              <img
                className="mission__image mission__remove"
                src={experiment}
              />
            </div>
          </div>
          <p className="mission__greybox">
            Outreach is an effort which requires a diverse plan of attack to
            reach the greatest number of people, all of whom come from different
            backgrounds. In pursuit of this, ILITE follows a core value it calls
            "ILITE-ism".
            <br /> <br />
            <span className="mission__quotes">
              <QuoteRight fill="#787878" />
            </span>
            ILITE-ism is the belief that everyone, regardless of background or
            profession, can be an advocate for technology and engineering.{" "}
            <span className="mission__quotes">
              <QuoteLeft fill="#787878" />
            </span>
          </p>
          <h1 className="mission__header">Team History</h1>
          <p className="mission__text"></p>
          <div className="mission__image-container">
            <div className="mission__remove">
              <img className="mission__image mission__remove" src={trophy} />
            </div>
            <div className="mission__remove">
              <img className="mission__image mission__remove" src={pits} />
            </div>
            <div className="mission__stay">
              <img className="mission__image mission__stay" src={history} />
            </div>
          </div>
          <p className="mission__text">
            ILITE Robotics was founded in 2006 in Battlefield High School
            located in Haymarket, Virginia. We started out as a Rookie-All Star
            Team have continued to strive for excellence in competing at various
            levels of FIRST and achieving high level awards at the district and
            championship level. These include, but are not limited to, Imagery,
            Engineering Inspiration, Chairman’s, and Finalist or Winner awards.
            Our achievement runs to the International level with a Chairman’s
            finalist award in 2017. In 2018, we achieved a Triple Crown win at
            the Chesapeake District Championship. ILITE has also had the honor
            of a Woodie Flowers award winner and finalist as mentors and coaches
            on the team.
          </p>
          <p>
            We do more than compete, we innovate and integrate for the
            community. The ILITE community began its headway in 2009 with
            lobbying for increased STEM education and establishing STEM programs
            in local schools. We aided in the development of a non-profit
            organization that supports the spread of STEM by engaging with the
            community and students. We have been hosting our annual HayMaker
            STEAM expo since 2015 and running our STEAM centered Summer Camps
            since 2014. In 2016, we were given the opportunity of presenting a
            conference revolved around our team structure at the FIRST World
            Championship in Detroit. In 2017, ILITE began its FLL outreach to
            local school teams and to countries like Liberia, Haiti, and
            Bolivia. The following year, FLL kits were assembled and sent out to
            displaced military families and an Autistic Orphanage in Jamaica. We
            have been hosting an Off Season FRC challenge since 2011, an FRC
            District Event since 2016, an FTC Regional Qualifier since 2007, and
            an FLL Regional Competition from 2007 to 2016. All of which have
            become staple events for the community to join in on.
          </p>
        </div>
      </Container>
    </LayoutWrapper>
  )
}

Mission.propTypes = {}

export default Mission
