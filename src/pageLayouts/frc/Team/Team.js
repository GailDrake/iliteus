import React from "react";
import PropTypes from "prop-types";
import Container from "../../../templates/container";
import GetMember from "./GetMember.js";
import Tabs, { Tab } from "../../../components/Tabs";
import QuoteLeft from "../../../IconComponents/Quoteleft";
import QuoteRight from "../../../IconComponents/Quoteright";

const Team = ({ teamList }) => {
  return (
    <Container
      title="Team"
      subtitle="ILITE has a team structure that emphasizes student leadership and mentorship."
    >
      <div className="team">
        <Tabs>
          <Tab name="Leadership">
            <p>
              ILITE understands that a team structure is a well-defined
              organizational structure that promotes good communication and is
              the key to any successful FIRST Robotics team. A very important
              aspect of our team is building a organizational model which brings
              together like-minded individuals who share a common interest while
              pairing them with industry professionals to establish a
              comfortable environment of mentorship from professionals and peers
              alike. Our structural style is one that specifically emphasizes
              student leadership and accountability.
            </p>
            <div className="team__members">
              {GetMember("Leadership", teamList)}
            </div>
          </Tab>
          <Tab name="Build">
            <h1>Build</h1>
            <div className="team__greybox">
              <h2>Subteam Specific Mission Statement</h2>
              <QuoteRight fill="grey" />
              To be able to create an efficient and robust robot that represents
              the whole of our abilities and capabilities as a subteam and
              serves as a base for other subteams’ work. In the process, we
              would like to maintain a priority for safety, control, and an
              appreciation for quality design.
              <QuoteLeft fill="grey" />
            </div>
            <img
              src={require("../../../assets/images/frc/members/Build/Build.jpg")}
              className="team__img"
            />
            <p>
              The Build Subteam is responsible for creating the ILITE robot
              yearly for competition. To do so efficiently and effectively, the
              subteam has split into several smaller branches: the Drive Train
              Team, Manipulator Team, and CAD and Integration Team. The Drive
              Train Team takes on the role of developing the foundation of the
              team’s robot each season. This includes responsibility for all
              major structural members as well as the design and construction of
              a drive train layout optimized for that season’s FRC challenge.
              Students and mentors work side by side discussing game strategies
              and best practices to ensure a successful robot which will last
              through an entire season. The Manipulator Team is responsible for
              the design of complex components such as arms, claws, and shooters
              that attach to the drivetrain to allow the robot to successfully
              tackle the team’s goals each year as either an offensive,
              defensive, or equally-balanced robot. This team undergoes a long
              process of prototyping and experimentation before settling on the
              final product which they execute with precise manufacturing
              techniques. The CAD and Integration Team models the entire robot
              and design process through its various stages in OpenSCAD and
              Inventor to ensure good team documentation and to create
              engineering drawings for manufacturing. This is important as it
              allows the team to construct a second “practice” robot that is
              identical to the competition robot. It also helps ensure that all
              parts come together in a seamless package which adheres to FIRST
              design regulations.
            </p>
            <div className="team__greybox">
              <h2>Goals</h2>
              <ol>
                <li>
                  To develop a seasonal drivetrain as the foundation of the
                  team’s robot
                </li>
                <li>
                  To design complex components such as arms, claws, and shooters
                  that attach to the drivetrain to allow the robot to
                  successfully be either an offensive, defensive, or
                  equally-balanced robot on the field
                </li>
                <li>
                  To prototype and experiment before settling on a final product
                  later executed with precise manufacturing techniques
                </li>
                <li>
                  To model the robot and design process in OpenSCAD and Inventor
                  to ensure team documentation and to create engineering
                  drawings for manufacturing
                </li>
              </ol>
            </div>
            <div className="team__greybox">
              <h2>Awards</h2>
              <ul>
                <li>
                  2018 Oxon Hill District Event: Excellence in Engineering Award
                </li>
                <li>
                  2016 FRC World Championship District Event: Industrial Design
                  Award
                </li>
                <li>
                  2016 Hampton Roads District Event: Industrial Design Award
                </li>
                <li>2015 Greater DC Regional: Industrial Design Award</li>
                <li>2015 Greater DC Regional: Safety Hard Hat Award</li>
              </ul>
            </div>
            <div className="team__members">{GetMember("Build", teamList)}</div>
          </Tab>
          <Tab name="Electronics">
            <h1>Electronics</h1>
            <div className="team__greybox">
              <h2>Subteam Specific Mission Statement</h2>
              <QuoteRight fill="grey" />
              To be able to create an efficient electronics board that
              represents our electronic capabilities. In the process of doing
              this we want to make a board that is safe, neat, and working.
              <QuoteLeft fill="grey" />
            </div>
            <img
              src={require("../../../assets/images/frc/members/Electronics/Electronics.jpg")}
              className="team__img"
            />
            <p>
              The Electronics subteam’s main task is to efficiently route and
              connect the necessary components needed for the robot to function.
              These include talons, roboRIO, power distribution panel (PDP), and
              the voltage regulator module (VRM). Other components called
              sensors each serve a unique function to the robot. Each year, our
              robot uses a multitude of sensors to help the robot record data to
              allow it to perform as expected on the field. We use multiple
              different types of wires that vary in gauge size to connect all of
              these components. While doing this, we learn many useful concepts
              such as space management and labeling. Throughout the years, we
              have used these major concepts by routing the wires together onto
              the electronics board in the most efficient way for us to track
              the flow of electricity. This year, we were able to use 3-D
              printing to assist us with customized casings for not only our
              ports but our components, which in turn made our electronics board
              much neater and safer. Along with ensuring that the robot has all
              the appropriate sensors, talons, and other components, the
              Electronics Team is responsible for creating a functional
              pneumatic setup. In this setup, our robot works with a compressor
              that generates air which flows through pneumatic tubing through
              multiple regulators that will eventually be used to activate the
              moving parts of the robot. Lastly, our Electronics subteam must be
              able to effectively explain the purpose and concepts of each
              component to other members of our robotics team, such as
              programming to allow their code to work, as well as interested
              members of the community and potential future members.
            </p>
            <div className="team__greybox">
              <h2>Goals</h2>
              <ol>
                <li>
                  Efficiently route all the necessary components of the robot to
                  allow it to run as expected. In doing this we must master the
                  art of space management, color coding, and many other tasks to
                  make our electronics board neat and logical.
                </li>
                <li>
                  Explain how each sensor collects data and runs to programmers
                  to help them write the code required for each sensor.
                </li>
                <li>
                  Make a neat and safe electronics board that is appropriately
                  labeled and protected to ensure that no wires or components
                  can burn and create a dangerous environment.
                </li>
                <li>
                  To create a pneumatic system that is able to generate air and
                  flow through tubing to activate the targeted piston.
                </li>
                <li>
                  To spread as much knowledge about electronics to our team
                  members and our youth in the community.
                </li>
              </ol>
            </div>
            <div className="team__members">
              {GetMember("Electronics", teamList)}
            </div>
          </Tab>
          <Tab name="Programming">
            <h1>Programming</h1>
            <div className="team__greybox">
              <h2>Subteam Specific Mission Statement</h2>
              <QuoteRight fill="grey" />
              To create practical and efficient code that allows us to utilize
              all of the physical components of the robot through the
              utilization of mathematics and advanced computer science
              principles.
              <QuoteLeft fill="grey" />
            </div>
            <img
              src={require("../../../assets/images/frc/members/Programming/Pro Team.png")}
              className="team__img"
            />
            <p>
              The Programming Team is primarily put in charge of developing and
              writing code for the robot. Most of our time is spent focusing on
              developing necessary algorithms and testing these algorithms to
              allow smooth operation of the robot both autonomously and in
              driver operation mode. This includes, but is not limited to,
              writing code for object tracking through the use of a camera
              mounted on the robot, reading and interpreting data from both
              analog and digital inputs, and outputting the proper data to the
              robot for actions independent of human interaction and to provide
              clean and consistent movements that the drivers can always rely
              on. Over the years, ILITE’s robot code has garnered respect and
              acknowledgement for the successful code structure. All in all, the
              Programming Team has a long history of pushing the bounds of what
              a robot can achieve.
            </p>
            <div className="team__greybox">
              <h2>Goals</h2>
              <ol>
                <li>
                  To create code that is able to utilize physical modules on the
                  robot that take advantage of game pieces and is able to
                  complete game objectives consistently.
                </li>
                <li>
                  To establish a reusable code structure from year to year.
                </li>
                <li>
                  To create understandable code that is easily accessible for
                  newer members.
                </li>
                <li>
                  To create good documentation that outlines our code structure
                  and is easily understood by non-programmers.
                </li>
              </ol>
            </div>
            <div className="team__greybox">
              <h2>Awards</h2>
              <ul>
                <li>
                  2014 FIRST World Championship: Innovation In Control Award
                </li>
              </ul>
            </div>
            <div className="team__members">
              {GetMember("Programming", teamList)}
            </div>
          </Tab>
          <Tab name="Sponsorship">
            <h1>Sponsorship</h1>
            <div className="team__greybox">
              <h2>Subteam Specific Mission Statement</h2>
              <QuoteRight fill="grey" />
              To raise funds and acquire resources by marketing and campaigning
              for the team. In the process, we contact potential sponsors and
              maintain current sponsors that support the team.
              <QuoteLeft fill="grey" />
            </div>
            <img
              src={require("../../../assets/images/frc/members/Sponsorship/Sponsorship.png")}
              className="team__img"
            />
            <p>
              The ILITE Sponsorship Team practices the skills required to
              successfully maintain and obtain sponsors. The Sponsorship team is
              responsible for raising funds and managing finances and supports
              ILITE by acquiring resources and funds and focuses on marketing
              and campaigning for the team. These resources allow the team to
              work in a more professional environment as fundings are used for
              equipment, team clothing, travel fees, and other needs of our
              team.
            </p>
            <div className="team__greybox">
              <h2>Goals</h2>
              <ol>
                <li>
                  To support ILITE by acquiring resources and funds by focusing
                  on marketing and campaigning for the team
                </li>
                <li>
                  To reach out to potential sponsors and acquire sponsorships
                  for the team
                </li>
              </ol>
            </div>
            <div className="team__greybox">
              <h2>Awards</h2>
              <ul>
                <li>
                  2016 Hampton Roads District Event: Entrepreneurship Award
                </li>
              </ul>
            </div>
            <div className="team__members">
              {GetMember("Sponsorship", teamList)}
            </div>
          </Tab>
          <Tab name="Outreach">
            <h1>Outreach</h1>
            <div className="team__greybox">
              <h2>Subteam Specific Mission Statement</h2>
              <QuoteRight fill="grey" />
              To inspire people, young and old, to become leaders in science,
              technology, engineering, and mathematics by providing them with
              the proper environment, social encouragement to pursue STEAM, and
              necessary resources and mentoring to continue learning and working
              in STEAM in and out of school environments.
              <QuoteLeft fill="grey" />
            </div>
            <img
              src={require("../../../assets/images/frc/members/Outreach/Outreach.png")}
              className="team__img"
            />
            <p>
              The ILITE Outreach Team is a complex network of people that work
              to exercise the skills needed for successful project management,
              advertising, and marketing. Made up of dedicated team members that
              meet multiple times a week, the Outreach Team is open to all
              students interested in outreach and all things business-related.
              The team breaks off into multiple divisions that focus on certain
              aspects of outreach and are categorized into specialized areas of
              interest such as Engineering Inspiration & Outreach and Awards
              Submissions -- both of which contribute towards supporting the
              mission and vision of the team. The Engineering Inspiration (EI)
              team takes part in the development of our outreach and pushes the
              boundaries of what defines a “robotics team”. The EI Team
              coordinates and organizes the participation in outreach events
              such as our Haymaker STEM Expo and a variety of annual summer
              camps. All of our work in these events are what set ILITE apart,
              and the Awards subteam works to demonstrate that to FIRST. The
              Awards team focuses on which awards can and will be sought after
              for the season and develop a strategy for each. These skills that
              are developed within the team promote and enhance the
              opportunities and abilities of each student to reach success,
              especially in a small business environment. The entire team
              focuses on the bigger picture for ILITE, while the members of the
              Outreach team work to expand the opportunities and mindset for the
              community and its members, promoting the development and growth of
              FIRST.
            </p>
            <div className="team__greybox">
              <h2>Goals</h2>
              <ol>
                <li>To coordinate and organize outreach events</li>
                <li>
                  To identify which awards must be sought after for the season
                  and develop a strategy for each
                </li>
              </ol>
            </div>
            <div className="team__greybox">
              <h2>Awards</h2>
              <ul>
                <li>2005 Virginia Regional: Rookie All Star Award</li>
                <li>2005 Palmetto Regional: Rookie All Star Award</li>
                <li>2005 World Championship: Rookie All Star Award</li>
                <li>2008 NASA/VCU Regional : Engineering Inspiration Award</li>
                <li>2009 Washington DC Regional: Engineering Inspiration Award</li>
                <li>2009 Florida Regional: Imagery Award</li>
                <li>2011 Washington DC Regional: Engineering Inspiration Award</li>
                <li>2011 Washington DC Regional: Woodie Flowers Finalist Award (Professor Gail Drake)</li>
                <li>2011 Virginia Regional: Engineering Inspiration Award</li>
                <li>2012 Washington DC Regional: Engineering Inspiration Award</li>
                <li>2012 Virginia Regional: Regional Chairman’s Award</li>
                <li>2013 Washington DC Regional: Regional Chairman’s Award</li>
                <li>2013 Washington DC Regional: FIRST Dean’s List Finalist Award</li>
                <li>2014 Greater DC Regional: Regional Chairman’s Award</li>
                <li>2014 Greater DC Regional: FIRST Dean’s List Finalist Award</li>
                <li>2015 Greater DC Regional: Regional Chairman’s Award</li>
                <li>2016 Greater DC District: District Chairman’s Award</li>
                <li>2016 Hampton Roads District Event: Entrepreneurship Award</li>
                <li>2017 World Championship: Chairman's Finalist Award</li>
                <li>2018 Greater DC Regional: Chairman's Award</li>
                <li>2018 Chesapeake District Championship: Chairman's Award</li>
                <li>2018 World Championship: Woodie Flowers Award Winner (Professor Gail Drake)</li>
              </ul>
            </div>
            <div className="team__members">
              {GetMember("Outreach", teamList)}
            </div>
          </Tab>
          <Tab name="Website">
            <h1>Website</h1>
            <div className="team__greybox">
              <h2>Subteam Specific Mission Statement</h2>
              <QuoteRight fill="grey" />
              To effectively communicate ILITE's goals, outreach, and other relevant information, such as events and news, through the maintainence and development of our website.
              <QuoteLeft fill="grey" />
            </div>
            <img
              src={require("../../../assets/images/frc/members/Web/Web Team Photo.jpg")}
              className="team__img"
            />
            <p>
              The website development subteam develops and maintains the website for our team.
              Through time, dedication, and collaboration with the use of
              GitHub, we ensure that the website is of high quality. Our main subteam goal is to better represent the team
              to the general public by providing a way for people all over the
              world to identify the various ways that ILITE stands out. We use
              our website as a way to teach people about the benefits of
              participating in Cyber Security, Sustainability, and FIRST
              Robotics. It is also our duty to attract attention to STEAM and
              FIRST to prepare the next generation of young minds to take on the
              various challenges of the future to improve the community. We
              believe that by maintaining a high quality website and keeping the
              community updated, we can influence people of all ages to
              participate in FIRST and its various programs, such as FLL, FTC,
              and FRC. By attracting more attention to FIRST with our website,
              we can better prepare the young minds of the community to pursue
              STEAM-related fields such as engineering, website development,
              computer science, electronics, graphical design, and business. We
              optimize internet communication to keep the community updated on
              the various affairs of the team, such as participating in
              competitions and displaying our various awards. As well as keeping
              the community updated, we provide better support for the community
              through the institutionalization of various STEAM endeavors,
              through means of summer camps and the distribution of media.
            </p>
            <div className="team__greybox">
              <h2>Goals</h2>
              <ol>
                <li>To create a central location for ILITE Team Information</li>
                <li>To keep the community updated on ILITE events</li>
                <li>To maintain a high public opinion of ILITE</li>
                <li>To expose young minds to STEAM and its related fields.</li>
              </ol>
            </div>
            <div className="team__greybox">
              <h2>Awards</h2>
              <ul>
                <li>2012 Virginia Regional: Best Website Award</li>
                <li>2011 - Excellence in Website Design</li>
                <li>2010 - Excellence in Website Design</li>
                <li>2009 - Excellence in Website Design</li>
                <li>2008 - Excellence in Website Design</li>
                <li>2007 Las Vegas Regional: Best Website Award</li>
                <li>2006 - Excellence in Website Design</li>
                <li>2005 - Excellence in Website Design</li>
              </ul>
            </div>
            <div className="team__members">{GetMember("Web", teamList)}</div>
          </Tab>
          <Tab name="Graphics">
            <h1>Graphics</h1>
            <div className="team__greybox">
              <h2>Subteam Specific Mission Statement</h2>
              <QuoteRight fill="grey" />
              To communicate a specific message to a specific audience through
              visual stimulation, inspire creativity and a sense of
              self-expression in others, and to express professionalism through
              systematic, organized designs.
              <QuoteLeft fill="grey" />
            </div>
            <img
              src={require("../../../assets/images/frc/members/Graphics/Graphics Team.jpg")}
              className="team__img"
            />
            <p>
              Graphic Design gives life to ILITE
              through detailed and creative imagery including thematically
              appropriate designs. Graphics continuously collaborates with other
              subteams, including but not limited to, Build, Chairman’s, its own
              branch of photography/videography, and Web Design. Along with the
              creation of many logos and posters, the Graphics team designs a
              yearly summary of our organization’s accomplishments, history, and
              the progress of our robot, called the annual report. Finding the
              inspiration and motivation behind a design is not always easy, but
              the members of our brilliant Graphics Design team seem to be
              constantly overflowing with these qualities. Each year, Graphics
              becomes a tightly knit group of friends, each member going out of
              their way to support and encourage each other in every endeavor,
              whether big or small, simple or complex. One word that the
              Graphics team unequivocally embodies above all else is
              “dedication”. The Graphics team strives to apply maximum effort in
              every task in order to effectively communicate a design’s message.
              It’s easy to see how much passion and zeal the Graphics team
              translates from imaginative ideas to a vast array of gorgeous
              projects, displayed with pride and a sense of accomplishment.
            </p>
            <div className="team__greybox">
              <h2>Goals</h2>
              <ol>
                <li>
                  To effectively communicate a message through imagery and
                  design
                </li>
                <li>
                  To inspire creativity and self-expression within our team and
                  in others
                </li>
                <li>To express professionalism through design</li>
              </ol>
            </div>
            <div className="team__greybox">
              <h2>Awards</h2>
              <ul>
                <li>2009 Florida Regional: Imagery Award</li>
                <li>
                  2015 Greater Pittsburgh Regional: Imagery Award in honor of
                  Jack Kamen
                </li>
              </ul>
            </div>
            <div className="team__members">
              {GetMember("Graphics", teamList)}
            </div>
          </Tab>
          <Tab name="3D Printing">
            <h1>3D Printing</h1>
            <div className="team__greybox">
              <h2>Subteam Specific Mission Statement</h2>
              <QuoteRight fill="grey" />
              To use 3D Printing and Laser Engraving technology to effectively assist other subteams and the team as a whole with necessary tasks.
              <QuoteLeft fill="grey" />
            </div>
            <img
              src={require("../../../assets/images/frc/members/3D Printing/3DPrinting.jpg")}
              className="team__img"
            />
            <p>
              The 3D Printing and Laser Engraving subteam uses five 3D printers, an AnyCubic Kossol, a MakerFarm, a MakerBot Mini, and two MonoPrices, to create useful 3D prints that are used by other subteams. These prints include Anderson Connectors and Battery Caps for Electronics, Encoder Mounts for Programming, Marketable Trinkets for Outreach, and to-scale replicas of the field for Strategy. We also use an Epilog Laser Engraver for select items, such as trophies and gearbox plates.
            </p>
            <div className="team__greybox">
              <h2>Goals</h2>
              <ol>
                <li>To create 3D prints that will assist other subteams in their tasks</li>
                <li>To use laser engraving for select purposes that benefit the team</li>
              </ol>
            </div>
            <div className="team__members">
              {GetMember("3D Printing", teamList)}
            </div>
          </Tab>
          <Tab name="Mentors">
            <h1>Mentors</h1>
            <p>
              The mentors are a group of volunteers who contribute to the team.
              They are responsible for supporting and assisting the team members
              in their respective subteams throughout the season. Mentors
              provide the opportunity for a better learning environment and the
              development of necessary skills.
            </p>
            <div className="team__members">
              {GetMember("Mentors", teamList)}
            </div>
          </Tab>
        </Tabs>
      </div>
    </Container>
  );
};

Team.propTypes = {
  teamList: PropTypes.array.isRequired
};

export default Team;
