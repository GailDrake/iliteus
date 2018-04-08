import React from 'react';
import Container from '../../../templates/container';

const GetInvolved = (props) => {
  return (
    <Container title="Get Involved" subtitle="Help the Team">
      <div className='get-involved'>
        <h1 className="get-involved__header">Membership</h1>
        <p>
          Welcome to ILITE Robotics! ILITE Robotics encompasses FLL Robotics Support and Education, FTC Robotics and FRC Team 1885! We are excited to have you as part of our family. ILITE is a community partnership between Battlefield High School, Prince William County Schools, several local colleges and numerous industry sponsors based throughout the DC Metropolitan area. This handbook contains key policies, goals, and expectations for ILITE Robotics and its members along with all other information you will need to become a successful contributor to our program.
        </p>
        <br />
        <p>
          ILITE is a multifaceted program which includes activities in a wide variety of business, technology and engineering challenges. The success of the program is due to the creativity and productivity of our members, both student and adults alike. Your participation is essential to fulfilling our program’s goals. We cannot stress enough the importance of each member’s commitment and responsibility in keeping our team running smoothly. We hope that as a member of ILITE, you will acquire and continue to use such life skills through college and your future career, and continue to give to others in the world.
        </p>
        <br />
        <p>
          At Battlefield High School, we have two courses approved by the Virginia Department of Education in Engineering and Robotics. The ILITE Robotics team supports the course structure of the school. Students are ENCOURAGED to take the Robotics course to learn the Engineering of Robotics to be a member of the ILITE Teams. In a course, students are held accountable, learning is the focus, and skill sets are developed.
        </p>
        <br />
        <p>
          There are some students that are members of the ILITE Robotics team that are not enrolled in our courses. In many cases, these students have already completed the courses. One additional opportunity available is open positions on the team. Our team has ‘positions’, much like a sports team (like quarterback). Each year, seniors that are existing members apply for positions first, and those are appointment in the first two weeks of school year. Next, underclass persons that are existing team members apply for positions; these are assigned in the second half of September. We then post the open positions for the team, and accept applications. Please look for this posting toward the end of September. We will post this information in as many locations as allowed by the school in an effort to communicate with the entire student body.
        </p>
        <br />
        <p>
          Last, if you are an adult, and would like to volunteer to work with these students, please contact Professor Drake.
        </p>
        <br />
        <p>
          Respectfully,
        </p>
        <p>
          Professor Drake
        </p>
        <br />

        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfon-yjYkxPnEfffBKT88eV2etCrcYsjJJUrz2wPdhhVtASlA/viewform?embedded=true" className="get-involved__iframe" target="_blank">
          ILITE Applications
			  </iframe>
        <div className="get-involved__buttons">
          <a href="https://docs.google.com/document/d/1ElAiufYy49WOX8wY5Z5nODxnJxB0iWm23-Pf2WvJIok/edit#bookmark=id.gjdgxs" className="get-involved__button" target="_blank">Student Handbook</a>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSfon-yjYkxPnEfffBKT88eV2etCrcYsjJJUrz2wPdhhVtASlA/viewform" className="get-involved__button" target="_blank">Application Form</a>
        </div>

        <br />

        <h1 className="get-involved__header">Mentorship</h1>

        <p>Love engineering and teaching? Demonstrate your passion. Come join us at ILITE Robotics and help our students out! Grow professionally and get experience from other mentors while learning from hands-on building, programming, and teaching. Be part of your academic community. Make an impact on the schools around you! Teach the next generation of engineers! Grow your community toward recognition of intelligence, creativity, and innovation. Our goal at ILITE is to increase awareness of every aspect of engineering in our community. Join us in our mission!</p>
        <br />
        <p>Team 1885 is open to mentors from all community members. To join our family, please contact us at <b>team1885@gmail.com</b>.</p>

        <br />
        <div>
          <h1 className="get-involved__header">Feed the Team</h1>
          <div className="get-involved__food-container">
            <img src={require("../../../assets/images/frc/fuel__potluck.jpg")} className="get-involved__img" />
            <p>
              <strong>Food is important.</strong>
              That's why we promote (and provide) healthy meals as
              part of our long hours working together as a team.
            </p>
            <p>
              Parents, in return for your contribution to team fuel,
              your student will be fed at robotics meetings. Supplying the
              team with proper fuel is an important group effort, as no student
              should work as hard as they do an an empty stomach.
              We aim to provide healthy foods (no sodas) to ensure that students
              are properly nourished during the season, so please keep the term
              "brain food" in mind. For our hosted competitions (IROC, FLL, and FTC),
              we are asking for a parent "grill master" that can work the grill for
              setup volunteers the Friday before the competition. <b>Please note it is
              a REQUIREMENT for all team members to supply ONE Meal during the season.</b>
              However, if you wish to contribute to more meals, it would be greatly appreciated.
              You are expected to provide food for the whole team, current consisting of 75
              students and 15 adults.
            </p>
            <p>For the 2018 season, we are asking that student eat breakfast at home every day and that meals brought in by families be lunch, not breakfast as it has been in the past. </p>
          </div>
          <a href="http://www.signupgenius.com/go/30e084faea929a0fc1-first" className="get-involved__button get-involved--fullwidth" target="_blank">Feed Our Team!</a>
        </div>
      </div >
    </Container >
  );
};

GetInvolved.propTypes = {

};

export default GetInvolved;
