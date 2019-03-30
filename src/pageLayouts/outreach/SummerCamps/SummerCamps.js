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
          <caption> Week 1 - June 17 </caption>
          <thead>

            <td className="summercamps__table--camps">Camp Name</td>
            <td className="summercamps__table--grade">Grade Levels</td>
            <td className="summercamps__table--price">Price</td>
            <td className="summercamps__table--times">Time</td>
          </thead>
          <tbody>
            <tr>

              <td className="summercamps__table--camps"><Link to="#lego">Lego EV3 Robotics</Link></td>
              <td className="summercamps__table--grade">Gr K - 6</td>
              <td className="summercamps__table--price">$150</td>
              <td className="summercamps__table--times">Morning</td>
            </tr>
            <tr>

              <td className="summercamps__table--camps"><Link to="#girls">Girls in STEM</Link></td>
              <td className="summercamps__table--grade">Gr 6 - 8</td>
              <td className="summercamps__table--price">$150</td>
              <td className="summercamps__table--times">Morning</td>
            </tr>
            <tr>

              <td className="summercamps__table--camps"><Link to="#lego">Lego EV3 Robotics</Link></td>
              <td className="summercamps__table--grade">Gr K - 6</td>
              <td className="summercamps__table--price">$150</td>
              <td className="summercamps__table--times">Afternoon</td>
            </tr>
            <tr>

              <td className="summercamps__table--camps"><Link to="#stem1">STEM 1: Matter Hackers</Link></td>
              <td className="summercamps__table--grade">Gr K - 4</td>
              <td className="summercamps__table--price">$150</td>
              <td className="summercamps__table--times">Afternoon</td>
            </tr>
            <tr>

              <td className="summercamps__table--camps"><Link to="#cyber">Cyber Defense</Link></td>
              <td className="summercamps__table--grade">Gr 6 - 12</td>
              <td className="summercamps__table--price">$165</td>
              <td className="summercamps__table--times">Afternoon</td>
            </tr>
          </tbody>
        </table>
        <table>
          <caption> Week 2 - June 24 </caption>
          <thead>

            <td className="summercamps__table--camps">Camp Name</td>
            <td className="summercamps__table--grade">Grade Levels</td>
            <td className="summercamps__table--price">Price</td>
            <td className="summercamps__table--times">Time</td>
          </thead>
          <tbody>
            <tr>

              <td className="summercamps__table--camps"><Link to="#lego">Lego EV3 Robotics</Link></td>
              <td className="summercamps__table--grade">Gr K - 6</td>
              <td className="summercamps__table--price">$150</td>
              <td className="summercamps__table--times">Morning</td>
            </tr>
            <tr>

              <td className="summercamps__table--camps"><Link to="#boe">Boe-Bot Camp</Link></td>
              <td className="summercamps__table--grade">Gr 6 - 12</td>
              <td className="summercamps__table--price">$150</td>
              <td className="summercamps__table--times">Morning</td>
            </tr>
            <tr>

              <td className="summercamps__table--camps"><Link to="#stem2">STEM 2: Imagination Infusion</Link></td>
              <td className="summercamps__table--grade">Gr 4 - 6</td>
              <td className="summercamps__table--price">$150</td>
              <td className="summercamps__table--times">Afternoon</td>
            </tr>
            <tr>

              <td className="summercamps__table--camps"><Link to="#programming">Intro to Programming</Link></td>
              <td className="summercamps__table--grade">Gr 3+</td>
              <td className="summercamps__table--price">$150</td>
              <td className="summercamps__table--times">Afternoon</td>
            </tr>
            <tr>

              <td className="summercamps__table--camps"><Link to="#cyber">Advanced Cyber Defense</Link></td>
              <td className="summercamps__table--grade">Gr 6 - 12 (requires succesful completion of one cyber patriot season or cyber defense summer camp)</td>
              <td className="summercamps__table--price">$165</td>
              <td className="summercamps__table--times">Afternoon</td>
            </tr>
          </tbody>
        </table>
        <p>*Sign ups will come soon</p>
        <div id="lego" className="summercamps__box">
          <h1>Lego EV3 Robotics</h1>
          <p>Students who attend ILITE’s LEGO EV3 Summer Camp design, build, and program awesome robots using state-of-the-art LEGO robotics technology: the powerful MINDSTORMS EV3 system. This exciting robotics camp challenges students to push robots to the limits by completing various tasks. The capstone of the camp is a mini competition. ILITE’s LEGO EV3 Camp gives students the opportunity to learn and have fun at the same time.</p>
          <img src={require('../../../assets/images/outreach/summercamps/lego.jpg')} />
        </div>
        <div id="stem1" className="summercamps__box">
          <h1>Matter Hackers</h1>
          <p>Through this introductory STEM camp, young students learn the basics of simple machines and states of matter through a variety of creative, hands-on activities. Students also have the opportunity to learn teamwork, problem solving, and real life application of everyday science through exciting experiments and interactive lessons. This camp is perfect for all kinds of students, from those who already have a passion for STEM, to students who are just enthusiastic to have fun and learn at the same time!</p>
          <img src={require('../../../assets/images/outreach/summercamps/stem1.jpg')} />
        </div>
        <div id="stem2" className="summercamps__box">
          <h1>Imagination Infusion</h1>
          <p>Student minds come alive in STEM 2 as they are submerged into a multitude of fun and exciting STEM subjects. Projects range from density to light and power to chemical reactions. Students dip their toes into STEM through fun individual and group experiments and demonstrations. This camp is an all-time favorite of both students and parents. Reserve a spot early to make sure your child does not miss out on their imagination coming alive!</p>
          <img src={require('../../../assets/images/outreach/summercamps/stem2.jpg')} />
        </div>
        <div id="cyber" className="summercamps__box">
          <h1>Cyber Defense</h1>
          <p>ILITE’s Cyber camp puts middle and high school students in the position of newly hired IT professionals tasked with managing the network of a small company. Students are given a set of virtual images that represent operating systems and are tasked with finding cyber security vulnerabilities within the images and hardening the system while maintaining critical services.</p>
          <img src={require('../../../assets/images/outreach/summercamps/cyber.png')} />
        </div>
        <div id="girls" className="summercamps__box">
          <h1>Girls in STEM</h1>
          <p>ILITE helps girls discover the world of STEM through wearable technology and hands on math and science activities. From sewing circuits onto shirts to creating perfume in a chemistry lab, girls are immersed in learning about this technical world. Several women executives talk to the girls about the importance of girls in STEM leading the future of the field.</p>
          <img src={require('../../../assets/images/outreach/summercamps/girls.png')} />
        </div>
        <div id="boe" className="summercamps__box">
          <h1>Boe-Bot</h1>
          <p>This year we are adding a new camp! Our Boe-Bot Camp challenges older students to learn a basic robot works, introducing them to the vast world of electronics in a prototyping format and how to program a robot in BASIC. Students will be taught and build their own sensory arrays to help their robot navigate the environment, running on code they write. Electrical components include infrared range finders, tactile whisker sensors, servo motors and LEDs. This class is perfect for EV3 pros that want a challenge or learners that want to explore how programming and electronics interact in the real world.</p>
          <img src={require('../../../assets/images/outreach/summercamps/boe.png')} />
        </div>
        <div id="programming" className="summercamps__box">
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