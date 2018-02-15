import React from 'react';
import PropTypes from 'prop-types';
import Container from '../../../templates/Container';
import GetMember from './GetMember.js';


const Team = (props) => {
  return (
    <Container division="frc" title="Banner" subtitle="This is a banner for the team page.">
      <div className="team">
        <ul className="tabs">
          <li><a href="#tab1">Student Leaders</a></li>
          <li><a href="#tab3">Build</a></li>
          <li><a href="#tab4">Outreach</a></li>
          <li><a href="#tab5">Sponsorship</a></li>
          <li><a href="#tab6">Electronics</a></li>
          <li><a href="#tab7">Graphics</a></li>
          <li><a href="#tab8">Programming</a></li>
          <li><a href="#tab9">Web</a></li>
          <li><a href="#tab2">Mentors</a></li>
        </ul>

        <br />

        <div className="tabs-content">
          <div id="tab1">{GetMember("Leadership", props.teamList)}</div>
          <div id="tab2">{GetMember("Mentors", props.teamList)}</div>
          <div id="tab3">{GetMember("Build", props.teamList)}</div>
          <div id="tab4">{GetMember("Outreach", props.teamList)}</div>
          <div id="tab5">{GetMember("Sponsorship", props.teamList)}</div>
          <div id="tab6">{GetMember("Electronics", props.teamList)}</div>
          <div id="tab7">{GetMember("Graphics", props.teamList)}</div>
          <div id="tab8">{GetMember("Programming", props.teamList)}</div>
          <div id="tab9">{GetMember("Web", props.teamList)}</div>
        </div>
      </div>
    </Container>
  );
};

Team.propTypes = {
  teamList: PropTypes.array.isRequired,
};

export default Team;
