import React from 'react';
import Container from '../../../templates/container';
import Button from '../../../components/Button';
import Link from 'gatsby-link';

const SummerCamps = (props) => {
  return (
    <Container title="Summer Camps" subtitle="Check out our STEAM-themed summer camps below.">
      <div className="summercamps">
        <h1>ILITE Robotics Summer Camps</h1>
        <p>The camps below are hosted by ILITE Robotics. Questions or concerns about these camps should be directed to Gail Drake at drakegd@pwcs.edu.</p>

        <table>
          <caption> Week 1
            {/* : June 17 - June 20 */}
          </caption>
          <thead>

            <td className="summercamps__table--camps">Camp Name</td>
            <td className="summercamps__table--grade">Grade Levels</td>
            <td className="summercamps__table--price">Price</td>
            <td className="summercamps__table--times">Time</td>
          </thead>
          <tbody>
            <tr>

              <td className="summercamps__table--camps"><a href="https://gofan.co/app/events/54084" target="_blank">EV3 Robotics 1</a></td>
              <td className="summercamps__table--grade">Gr K - 4</td>
              <td className="summercamps__table--price">$150</td>
              <td className="summercamps__table--times">9am - noon</td>
            </tr>
            <tr>

              <td className="summercamps__table--camps"><a href="https://gofan.co/app/events/54085" target="_blank">Matter Hackers</a></td>
              <td className="summercamps__table--grade">Gr K - 4</td>
              <td className="summercamps__table--price">$150</td>
              <td className="summercamps__table--times">1pm - 4pm</td>
            </tr>

            <tr>

              <td className="summercamps__table--camps"><a href="https://gofan.co/app/events/54086" target="_blank"><span>BUNDLE</span> EV3 Robotics 1 & Matter Hackers</a></td>
              <td className="summercamps__table--grade">Gr K - 4</td>
              <td className="summercamps__table--price">$250</td>
              <td className="summercamps__table--times">9am - 4pm</td>
            </tr>
            <tr>

              <td className="summercamps__table--camps"><a href="https://gofan.co/app/events/54087" target="_blank">Girls in STEM</a></td>
              <td className="summercamps__table--grade">Gr 5 - 8</td>
              <td className="summercamps__table--price">$150</td>
              <td className="summercamps__table--times">9am - noon</td>
            </tr>
            <tr>

              <td className="summercamps__table--camps"><a href="https://gofan.co/app/events/54088" target="_blank">EV3 Robotics 2</a></td>
              <td className="summercamps__table--grade">Gr 5 - 8</td>
              <td className="summercamps__table--price">$150</td>
              <td className="summercamps__table--times">1pm - 4pm</td>
            </tr>
            <tr>

              <td className="summercamps__table--camps"><a href="https://gofan.co/app/events/54089" target="_blank"><span>BUNDLE</span> Girls in STEM & EV3 Robotics 2</a></td>
              <td className="summercamps__table--grade">Gr 5 - 8</td>
              <td className="summercamps__table--price">$250</td>
              <td className="summercamps__table--times">9am - 4pm</td>
            </tr>
            <tr>

              <td className="summercamps__table--camps"><a href="https://gofan.co/app/events/54090" target="_blank">Cyber Defense</a></td>
              <td className="summercamps__table--grade">Gr 7 - 12</td>
              <td className="summercamps__table--price">$150</td>
              <td className="summercamps__table--times">9am - noon</td>
            </tr>
          </tbody>
        </table>
        <table>
          <caption> Week 2
            {/* : June 24 - June 27 */}
          </caption>
          <thead>

            <td className="summercamps__table--camps">Camp Name</td>
            <td className="summercamps__table--grade">Grade Levels</td>
            <td className="summercamps__table--price">Price</td>
            <td className="summercamps__table--times">Time</td>
          </thead>
          <tbody>
            <tr>

              <td className="summercamps__table--camps"><a href="https://gofan.co/app/events/54091" target="_blank">EV3 Robotics 2</a></td>
              <td className="summercamps__table--grade">Gr 4 - 6</td>
              <td className="summercamps__table--price">$150</td>
              <td className="summercamps__table--times">9am - noon</td>
            </tr>
            <tr>

              <td className="summercamps__table--camps"><a href="https://gofan.co/app/events/54092" target="_blank">Imagination Infusion</a></td>
              <td className="summercamps__table--grade">Gr 4 - 6</td>
              <td className="summercamps__table--price">$150</td>
              <td className="summercamps__table--times">1pm - 4pm</td>
            </tr>
            <tr>

              <td className="summercamps__table--camps"><a href="https://gofan.co/app/events/54093" target="_blank"><span>BUNDLE</span> EV3 Robotics 2 & Imagination Infusion</a></td>
              <td className="summercamps__table--grade">Gr 4 - 6</td>
              <td className="summercamps__table--price">$250</td>
              <td className="summercamps__table--times">9am - 4pm</td>
            </tr>
            <tr>

              <td className="summercamps__table--camps"><a href="https://gofan.co/app/events/54094" target="_blank">Boe-Bots</a></td>
              <td className="summercamps__table--grade">Gr 5 - 8</td>
              <td className="summercamps__table--price">$150</td>
              <td className="summercamps__table--times">9am - noon</td>
            </tr>
            <tr>

              <td className="summercamps__table--camps"><a href="https://gofan.co/app/events/54095" target="_blank">Introduction to Programming</a></td>
              <td className="summercamps__table--grade">Gr 5 - 8</td>
              <td className="summercamps__table--price">$150</td>
              <td className="summercamps__table--times">1pm - 4pm</td>
            </tr>
            <tr>

              <td className="summercamps__table--camps"><a href="https://gofan.co/app/events/54096" target="_blank"><span>BUNDLE</span> Boe-Bots & Introduction to Programming</a></td>
              <td className="summercamps__table--grade">Gr 5 - 8</td>
              <td className="summercamps__table--price">$250</td>
              <td className="summercamps__table--times">9am - 4pm</td>
            </tr>
          </tbody>
        </table>

        <div className="summercamps__buttons">
          <Button link="https://www.dropbox.com/sh/sq3n2xtm6q5conn/AAB5qkso05MBaYLoWjKSlk0Ma?dl=0">View all 2019 Summer Camps photos here</Button>
          <Button link="https://www.youtube.com/channel/UCCWs22DHGwRloB613zOJ9UA/videos">View all 2019 Summer Camps videos here</Button>
        </div>
        {/* <Button link="https://gofan.co/app/school/VA25529/Academic-Camps">Sign Up Here!</Button> */}

        <div className="summercamps__box">
          <h1>EV3 Robotics 1</h1>
          <p>Students who attend ILITE’s LEGO EV3 Summer Camp design, build, and program awesome robots using state-of-the-art LEGO robotics technology: the powerful MINDSTORMS EV3 system. This beginners camp focuses on the fundamentals of robotics and programming to move the robots. The capstone of the camp is a mini competition. ILITE’s LEGO EV3 Camp gives students the opportunity to learn and have fun at the same time.</p>
          <img src={require('../../../assets/images/outreach/summercamps/lego1.jpg')} />
        </div>
        <div className="summercamps__box">
          <h1>EV3 Robotics 2</h1>
          <p>Students who attend ILITE’s LEGO EV3 Summer Camp design, build, and program awesome robots using state-of-the-art LEGO robotics technology: the powerful MINDSTORMS EV3 system. This advanced camp focuses on the integration of sensors, more advanced programming techniques, and the relationship between programming and the robot. The capstone of the camp is a mini competition. ILITE’s LEGO EV3 Camp gives students the opportunity to learn and have fun at the same time. This exciting robotics camp challenges students to push robots to the limits by completing various tasks.</p>
          <img src={require('../../../assets/images/outreach/summercamps/lego2.jpg')} />
        </div>
        <div className="summercamps__box">
          <h1>Matter Hackers</h1>
          <p>Through this introductory STEM camp, young students learn the basics of simple machines and states of matter through a variety of creative, hands-on activities. Students also have the opportunity to learn teamwork, problem solving, and real life application of everyday science through exciting experiments and interactive lessons. This camp is perfect for all kinds of students, from those who already have a passion for STEM, to students who are just enthusiastic to have fun and learn at the same time!</p>
          <img src={require('../../../assets/images/outreach/summercamps/stem1.jpg')} />
        </div>
        <div className="summercamps__box">
          <h1>Imagination Infusion</h1>
          <p>Student minds will come alive with the hands-on learning in Imagination Infusion as they are submerged into exciting and fun STEM experiments. Students will learn the basics of engineering, physics, and energy. Projects range from designing and racing solar powered cars and an egg drop cradle to creating Alka-Seltzer rockets. This camp is a favorite for both the students, parents, and mentors. Don’t miss out on your child’s imagination coming alive!</p>
          <img src={require('../../../assets/images/outreach/summercamps/stem2.jpg')} />
        </div>
        <div className="summercamps__box">
          <h1>Cyber Defense</h1>
          <p>ILITE’s Cyber camp puts middle and high school students in the position of newly hired IT professionals tasked with managing the network of a small company. Students are given a set of virtual images that represent operating systems and are tasked with finding cyber security vulnerabilities within the images and hardening the system while maintaining critical services.</p>
          <img src={require('../../../assets/images/outreach/summercamps/cyber.png')} />
        </div>
        <div className="summercamps__box">
          <h1>Girls in STEM</h1>
          <p>ILITE's Girls in STEM summer camp helps girls discover the world of STEM through hands on activities filled with exciting experiments. This year, girls will get to create stunning digital art by learning graphic design skills and will also craft unique objects using 3D printing and laser engraving technology.</p>
          <img src={require('../../../assets/images/outreach/summercamps/girls.png')} />
        </div>
        <div className="summercamps__box">
          <h1>Boe-Bot</h1>
          <p>Our Boe-Bot Camp challenges older students to learn a basic robot works, introducing them to the vast world of electronics in a prototyping format and how to program a robot in BASIC. Students will be taught and build their own sensory arrays to help their robot navigate the environment, running on code they write. Electrical components include infrared range finders, tactile whisker sensors, servo motors and LEDs. This class is perfect for EV3 pros that want a challenge or learners that want to explore how programming and electronics interact in the real world.</p>
          <img src={require('../../../assets/images/outreach/summercamps/boe.png')} />
        </div>
        <div className="summercamps__box">
          <h1>Basics of Programming</h1>
          <p>This camp is for beginner programmers or anyone who wishes to learn how programming works. This would involve graphical drag-and-drop programming to develop basic programming knowledge and logic and build a link between the writing of text-based programs.</p>
          <img src={require('../../../assets/images/outreach/summercamps/programming.jpg')} />
        </div>
      </div>
    </Container>
  );
};

SummerCamps.propTypes = {

};

export default SummerCamps;