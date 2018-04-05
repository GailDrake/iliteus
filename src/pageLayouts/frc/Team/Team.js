import React from 'react';
import PropTypes from 'prop-types';
import Container from '../../../templates/container';
import GetMember from './GetMember.js';
import Tabs from '../../../components/Tabs';
import teamList from '../../../lib/teamList';

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
