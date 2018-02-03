import React from 'react';
import Link from 'gatsby-link';
import Members from './../../components/general/members';
import "./less/team.less";

const teamList = [
  {
    image: 'Dylan F..jpg',
    name: 'Dylan Fernandes',
    subteam: 'Web',
    fact: 'I underappreciate myself',
    memory: 'Acting bad while being completely better than everyone else.',
    year: 2015,
  },
  {
    image: 'Nicholas M..jpg',
    name: 'Nicholas Miller',
    subteam: 'Web',
    fact: 'I learn',
    memory: 'Learning',
    year: 2017,
  },
  {
    image: 'Kavya A..jpg',
    name: 'Kavya Annapareddy',
    subteam: 'Graphics',
    fact: 'BLAAAAAAH',
    memory: 'HAAAAAALB',
    year: 2017,
  },
  {
    image: 'Urvi P..jpg',
    name: 'Urvi Pisal',
    subteam: 'Web',
    fact: 'I hate people.',
    memory: 'Hating people',
    year: 2017,
  },
  {
    image: 'Adeel A..jpg',
    name: 'Adeel Aziz',
    subteam: 'Web',
    fact: "I'm apple certified.",
    memory: 'Being apple certified.',
    year: 2017,
  },
  {
    image: 'Kyle R..jpg',
    name: 'Kyle Rowland',
    subteam: 'Web',
    fact: 'I work',
    memory: 'Working',
    year: 2017,
  },
  {
    image: 'Harry D..jpg',
    name: 'Harry Davidson',
    subteam: 'Web',
    fact: 'I do Cyber',
    memory: 'Doing Cyber',
    year: 2017,
  },
]

const getMember = (subteam) => {
  return teamList.map(member => {
    if(member.subteam === subteam)
    {
    let image = require(`./../../assets/images/frc/members/${subteam}/${member.image}`);
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

export default () => {
  return (
    <div className="container">
      <br/><br/><br/>
      <ul className="tabs">
        <li><a href="#" name="tab1">Student Leaders</a></li>
        <li><a href="#" name="tab3">Build</a></li>
        <li><a href="#" name="tab4">Outreach</a></li>
        <li><a href="#" name="tab5">Sponsorship</a></li>
        <li><a href="#" name="tab6">Electronics</a></li>
        <li><a href="#" name="tab7">Graphics</a></li>
        <li><a href="#" name="tab8">Programming</a></li>
        <li><a href="#" name="tab9">Web</a></li>
        <li><a href="#" name="tab2">Mentors</a></li>
      </ul>

      <br/>

      <div>{getMember("Web")}</div>

    </div>
  )
};
