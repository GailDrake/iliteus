import React from 'react';
import Container from '../../../templates/container';

const GetInvolved = (props) => {
  return (
    <Container division="frc" title="Get Involved" subtitle="Help the Team">
      <div className='get-involved'>
        <h1 className="get-involved__header">Join the Team</h1>
        <h2 className="get-involved__subheader">Membership</h2>
        <h2 className="get-involved__subheader">Mentorship</h2>
        <br />
        <h1 className="get-involved__header">Volunteer Portal</h1>
        <h2 className="get-involved__subheader">Feed the Team</h2>
      </div>
    </Container>
  );
};

GetInvolved.propTypes = {

};

export default GetInvolved;
