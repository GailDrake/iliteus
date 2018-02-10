import React from 'react';
import PropTypes from 'prop-types';

import Members from '../../../components/general/members';

const GetMember = (subteam, teamList) => {
  return teamList.map(member => {
    if(member.subteam === subteam)
    {
    let image = require(`./../../../assets/images/frc/members/${subteam}/${member.image}`);
    return (
      <Members
        name={member.name}
        year={member.year}
        fact={member.fact}
        memory={member.memory}
        image={image}
        leader={member.leader}
        mentor={member.mentor}
      />
    );
  }
  });
};

export default GetMember;
