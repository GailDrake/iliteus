import React from 'react';
import PropTypes from 'prop-types';
import Container from '../../../templates/Container';
import GetMember from './GetMember.js';
import Tabs from '../../../components/Tabs';

const tabs = ["Student Leaders", "Build", "Outreach", "Sponsorship", "Electronics", "Graphics", "Programming", "Web"];

const Team = (props) => {
  return (
    <Container division="frc" title="Banner" subtitle="This is a banner for the team page.">
      <div className="team">
        <Tabs tabs={tabs}>
          <div id="tab1">{GetMember("Leadership", props.teamList)}</div>
          <div id="tab2">{GetMember("Mentors", props.teamList)}</div>
          <div id="tab3">{GetMember("Build", props.teamList)}</div>
          <div id="tab4">{GetMember("Outreach", props.teamList)}</div>
          <div id="tab5">{GetMember("Sponsorship", props.teamList)}</div>
          <div id="tab6">{GetMember("Electronics", props.teamList)}</div>
          <div id="tab7">{GetMember("Graphics", props.teamList)}</div>
          <div id="tab8">{GetMember("Programming", props.teamList)}</div>
          <div id="tab9">{GetMember("Web", props.teamList)}</div>
        </Tabs>
      </div >
    </Container >
  );
};

Team.propTypes = {
  teamList: PropTypes.array.isRequired,
};

export default Team;
