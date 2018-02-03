import React from 'react';
import Link from 'gatsby-link';
import Members from './../../components/general/members';

const teamList = [
  {
    image: 'home-hero-lg.jpg',
    name: 'Dylan Fernandes',
    fact: 'Blah',
    memory: 'Bal',
    year: 100,
  }
]

export default () => {
  const memberList = teamList.map(member => {
    let image = require(`./../../assets/images/frc/${member.image}`);
    return (
      <Members
        name= {member.name}
        year={member.year}
        fact={member.fact}
        memory={member.memory}
        image={image}
        leader = {member.leader}
        mentor = {member.mentor}
      />
    );
  });
  return (
    <div>
      <h1>This the team page</h1>
      <div>{memberList}</div>
    </div>
  )
}
