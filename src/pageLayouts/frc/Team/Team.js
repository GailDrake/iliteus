import React from 'react';
import PropTypes from 'prop-types';
import Container from '../../../templates/Container';
import GetMember from './GetMember.js';
import Tabs from '../../../components/Tabs';
import teamList from '../../../lib/teamList';

const tabs = ["Student Leaders", "Build", "Outreach", "Sponsorship", "Electronics", "Graphics", "Programming", "Web", "Mentors"];
const content = [
  GetMember("Leadership", teamList),
  GetMember("Build", teamList),
  GetMember("Outreach", teamList),
  GetMember("Sponsorship", teamList),
  GetMember("Electronics", teamList),
  GetMember("Graphics", teamList),
  GetMember("Programming", teamList),
  GetMember("Web", teamList),
  GetMember("Mentors", teamList)
];

const Team = (props) => {
  return (
    <Container division="frc" title="Banner" subtitle="This is a banner for the team page.">
      <div className="team">
        <Tabs tabs={tabs} content={content}>
        </Tabs>
      </div >
    </Container >
  );
};

Team.propTypes = {
  teamList: PropTypes.array.isRequired,
};

export default Team;
