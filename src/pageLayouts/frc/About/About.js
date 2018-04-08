import React from 'react';
import Container from '../../../templates/container'
import QuoteLeft from '../../../IconComponents/Quoteleft'
import QuoteRight from '../../../IconComponents/Quoteright'
import haymarketday from '../../../assets/images/frc/about/haymarketday.jpg'
import stemexpo1 from '../../../assets/images/frc/about/stemexpo1.jpg'
import teddy from '../../../assets/images/frc/about/teddy.jpg'
import books from '../../../assets/images/frc/about/books.jpg'
import stemexpo2 from '../../../assets/images/frc/about/stemexpo2.jpg'
import ussstem from '../../../assets/images/frc/about/usstemfoundation.jpg'
import history from '../../../assets/images/frc/about/history.jpg'
import trophy from '../../../assets/images/frc/about/trophy.jpg'
import pits from '../../../assets/images/frc/about/pitspeaking.jpg'
import experiment from '../../../assets/images/frc/about/experiment.jpg'
import gather from '../../../assets/images/frc/about/gather.jpg'
import stemexpo3 from '../../../assets/images/frc/about/stemexpo3.jpg'
// import classnames from 'classnames';

const About = (props) => {
  return (
    <Container title="About" subtitle="About team 1885.">
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
        <div className="about__image-container">
          <div><img className='about__image' src={haymarketday} /></div>
          <div><img className='about__image' src={stemexpo1} /></div>
          <div><img className='about__image' src={teddy} /></div>
        </div>
        <p className='about__greybox'> <span className='about__quotes'><QuoteRight fill='pink' /></span> To inspire young people to become leaders in science, technology, engineering,
          and mathematics by providing them with hands-on engineering challenges with the mentorship of industry professionals,
                 to build a foundation of both technical and social skills and values, to create leaders in technology and engineering.<span className='about__quotes'><QuoteLeft fill='pink' /></span>
        </p>
        <h1 className='about__subheader'>Our Vision:</h1>
        <div className="about__image-container">
          <div><img className='about__image' src={books} /></div>
          <div><img className='about__image' src={stemexpo2} /></div>
          <img className='about__image' src={ussstem} />
        </div>
        <p className='about__greybox'> <span className='about__quotes'><QuoteRight fill='pink' /></span> A community of learning where persons, young and old, share a common goal of problem solving through science,
                technology, engineering, and mathematics to improve the world in which we live for all persons.<span className='about__quotes'><QuoteLeft fill='pink' /></span>
        </p>
        <h1 className='about__subheader'>ILITE-ism:</h1>
        <div className="about__image-container">
          <div><img className='about__image' src={stemexpo3} /></div>
          <div><img className='about__image' src={gather} /></div>
          <div><img className='about__image' src={experiment} /></div>
        </div>
        <p className='about__text'>Outreach is an effort which requires an adverse plan of attack to reach the greatest number of persons,
          all of whom come from different backgrounds. ILITE holds a core value it calls “ILITE-ism” which is the belief that everyone,
          regardless of background or profession can be an advocate for technology and engineering.
        </p>
        <h1 className='about__header'>Team History</h1>
        <p className='about__text'></p>
        <div className="about__image-container">
          <div><img className='about__image' src={trophy} /></div>
          <div><img className='about__image' src={pits} /></div>
          <div><img className='about__image' src={history} /></div>
        </div>
        <p className='about__text'>FIRST Team 1885, “ILITE Robotics”, is a FIRST Robotics Team based in Haymarket, Virginia.
          It consists of students from high schools across Prince William County, Virginia. ILITE stands for Inspiring Leaders in Technology and Engineering.
          <br />
          <br />
          In the fall of 2004, Battlefield High School officially opened as the ninth high school in Prince William County.
          The doors opened to clean classrooms, brand new books, and a newly established Information Technology specialty program,
          in which students could pursue college level credits in web development, graphic design, and computer science.
          <br />
          <br />
          For the first two years as a school, Battlefield showed an interesting growth period, as the school sought out to find what it could be in the community.
          In the fall of 2005, a group of 32 pioneers stepped forward to their IT teacher with a common interest… engineering and robotics.
          These 32 students were asked to make a commitment, which they took above and beyond what anyone could have anticipated.
          <br />
          <br />
          ILITE began under the direction of Professor Gail Drake and Professor Michael Piccione, though much has changed since then.
          FIRST Team 1885 was originally known as the “Robocats” which quickly became synonymous with the color purple.
          The original 32 students brought together the support of their parents and siblings, while Professor Drake and Professor Piccione
          helped secure the sponsorship of several major engineering companies in the Northern Virginia area. The family was forged,
          and the team successfully built its first robot out of a kit of parts, scrap metal, and even a lamp shade as it competed in the 2006 competition,
          Aim High. It was an appropriate name for the competition of 1885’s rookie year, because the sky quickly became the limit, as ILITE became the
          Rookie All-Star Team at both the NASA/VCU and Palmetto Regionals. Just as all eyes were seeing purple,
          ILITE took home the world title of Rookie-All Star at the FIRST World Championship.
          <br />
          <br />
          We have all been deeply changed by our participation in this program, which we wish to share what we have learned with future generations.
          As such, we partake in many activities that allow younger children a first-hand experience with technology and engineering.
          In 2008, we saw the development of ILITE in the community. Lobbying on Capitol Hill for STEM education, and implementing robotics into the high school.
          <br />
          <br />
          In 2009, ILITE was satisfied to participate at the first ever Washington DC Regional for the game, Lunacy;
          in which, the team won the Engineering Inspiration award for the second year in a row. Our robot, MoonLite,
          was a Regional quarterfinalist at the Florida Regional, where the team also won the Imagery Award.
          In that same year, FIRST Team 1885 promoted alumni efforts to mentor teams across the country and to volunteer at Regional events along the East Coast.
          <br />
          <br />
          In 2010, FIRST Team 1885 competed in the Washington DC Regional and was a Regional Semifinalist for the game designed in honor of the World Cup,
          Breakaway. Following one of our toughest seasons yet, ILITE strived in 2011 to redefine what it was that made the team such a tight family in our rookie year.
          <br />
          <br />
          With a team roster made up entirely of seniors, ILITE changed its goal to one of reuniting the school and community,
          as well as rekindling the flame that had dimmed from the prior year. The team came back strong with over 5 alumni mentors,
          and was our best season yet. After suffering the loss of one of our team members who passed away during the build season,
          the team rose through the turmoil to win Engineering Inspiration and be Regional Finalists at both the Washington DC and Virginia Regional.
          Our head mentor who started it all, Professor Drake, was honored with the prestigious Woodie Flowers Award.
          <br />
          <br />
          FIRST Team 1885 is now spread across the county with student representation from five of the eleven high schools in the district.
          The team plays host to SEAPerch, FLL, and FTC events, and hosted its first off-season FRC scrimmage, IROC, the ILITE Robotics Off-Season Challenge.
          Alumni have gone on to earn full scholarships at top engineering schools across the country,
        and have spoken at technical conferences on behalf of the phenomenal results from the team including the Naval STEM Forum in 2011.</p>
      </div>
    </Container>
  );
};

About.propTypes = {

};

export default About;
