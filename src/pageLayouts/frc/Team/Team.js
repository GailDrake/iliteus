import React from 'react';
import PropTypes from 'prop-types';
import Container from '../../../templates/container';
import GetMember from './GetMember.js';
import Tabs, { Tab } from '../../../components/Tabs';

const Team = ({ teamList }) => {
  return (
    <Container title="Banner" subtitle="This is a banner for the team page.">
      <div className="team">
        <Tabs>
          <Tab name="Leadership">
            <div>{GetMember("Leadership", teamList)}</div>
          </Tab>
          <Tab name="Build">
            <div>{GetMember("Build", teamList)}</div>
          </Tab>
          <Tab name="Electronics">
            <div>{GetMember("Electronics", teamList)}</div>
          </Tab>
          <Tab name="Programming">
            <div>{GetMember("Programming", teamList)}</div>
          </Tab>
          <Tab name="Sponsorship">
            <div>{GetMember("Sponsorship", teamList)}</div>
          </Tab>
          <Tab name="Outreach">
            <div>{GetMember("Outreach", teamList)}</div>
          </Tab>
          <Tab name="Scouting">
            <div>{GetMember("Scouting", teamList)}</div>
          </Tab>
          <Tab name="Website">
            <div>{GetMember("Web", teamList)}</div>
          </Tab>
          <Tab name="Graphics">
            <div>{GetMember("", teamList)}</div>
          </Tab>
          <Tab name="Mentors">
            <div>{GetMember("", teamList)}</div>
          </Tab>
        </Tabs>
      </div>
    </Container>
  );
};

Team.propTypes = {
  teamList: PropTypes.array.isRequired,
};

export default Team;
