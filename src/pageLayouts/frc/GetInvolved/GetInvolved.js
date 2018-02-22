import React from 'react';
import Container from '../../../templates/container';

const GetInvolved = (props) => {
  return (
    <Container division="frc" title="Get Involved" subtitle="Help the Team">
      <div className='get-involved'>
        <h1 className="get-involved__header">Membership</h1>
        <div className="get-involved__buttons">
          <a href="https://docs.google.com/document/d/1ElAiufYy49WOX8wY5Z5nODxnJxB0iWm23-Pf2WvJIok/edit#bookmark=id.gjdgxs" className="get-involved__button" target="_blank">Student Handbook</a>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSfon-yjYkxPnEfffBKT88eV2etCrcYsjJJUrz2wPdhhVtASlA/viewform" className="get-involved__button" target="_blank">Application Form (Also Below)</a>
        </div>
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfon-yjYkxPnEfffBKT88eV2etCrcYsjJJUrz2wPdhhVtASlA/viewform?embedded=true" className="get-involved__iframe" target="_blank">
          ILITE Applications
			    </iframe>
        <h1 className="get-involved__header">Mentorship</h1>

        <br />

        <h1 className="get-involved__header">Feed the Team</h1>
        <br />
        <img src="../../../assets/images/frc/fuel1.jpg" className="get-involved__img" />
        <img src="../../../assets/images/frc/fuel2.jpg" className="get-involved__img" />
        <p><strong>Food is important.</strong>That's why we promote (and provide) healthy meals as part of our long hours working together as a team.</p>
        <br />
        <p><b>Parents,</b> in return for your contribution to team fuel, your student will be fed at robotics meetings. Supplying the team with proper fuel is an important group effort, as no student should work as hard as they do an an empty stomach. We aim to provide healthy foods (no sodas) to ensure that students are properly nourished during the season, so please keep the term "brain food" in mind. For our hosted competitions (IROC, FLL, and FTC), we are asking for a parent "grill master" that can work the grill for setup volunteers the Friday before the competition. <b>Please note it is a REQUIREMENT for all team members to supply ONE Meal during the season.</b> However, if you wish to contribute to more meals, it would be greatly appreciated. You are expected to provide food for the whole team, current consisting of 75 students and 15 adults.</p>
        <br />
        <p><b>For the 2018 season, we are asking that student eat breakfast at home every day and that meals brought in by families be lunch, not breakfast as it has been in the past. </b></p>
        <a href="http://www.signupgenius.com/go/30e084faea929a0fc1-first" className="get-involved__button get-involved--fullwidth" target="_blank">Feed Our Team!</a>
      </div>
    </Container>
  );
};

GetInvolved.propTypes = {

};

export default GetInvolved;
