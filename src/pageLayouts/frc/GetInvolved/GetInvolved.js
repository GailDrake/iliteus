import React from 'react';
import Container from '../../../templates/container';

const GetInvolved = (props) => {
  return (
    <Container division="frc" title="Get Involved" subtitle="Help the Team">
      <div className='get-involved'>
        <h1 className="get-involved__header">Join the Team</h1>
        <p></p>
        <h2 className="get-involved__subheader">Membership</h2>
        <a href="https://docs.google.com/document/d/1ElAiufYy49WOX8wY5Z5nODxnJxB0iWm23-Pf2WvJIok/edit#bookmark=id.gjdgxs" class="get-involved__button">Student Handbook</a>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfon-yjYkxPnEfffBKT88eV2etCrcYsjJJUrz2wPdhhVtASlA/viewform" class="get-involved__button">Application Form (Also Below)</a>
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfon-yjYkxPnEfffBKT88eV2etCrcYsjJJUrz2wPdhhVtASlA/viewform?embedded=true" width="100%" height="600" frameborder="0" marginheight="0" marginwidth="0" target="_blank">
          ILITE Applications
			    </iframe>
        <h2 className="get-involved__subheader">Mentorship</h2>

        <br />

        <h1 className="get-involved__header">Volunteer Portal</h1>
        <p></p>
        <h2 className="get-involved__subheader">Feed the Team</h2>
      </div>
    </Container>
  );
};

GetInvolved.propTypes = {

};

export default GetInvolved;
