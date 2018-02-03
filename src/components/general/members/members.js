import React from "react";
import "./members.less";

const Members = ({name, year, fact, memory, image, leader, mentor}) => {
  const title = leader ? <span className="leader-title"><b>Title:</b> {leader}<br/></span> : '';
  const subteam = mentor ? <span><br/><b>Subteam:</b> {mentor}</span> : '';
  return (
    <div className="container">
      <div className="member-img" style={{backgroundImage: image}}>
      </div>
      <div className="content">
        <h3 className="title">{name}</h3>{title}
        <b>Year Joined:</b> {year}
        {subteam}
        <br/>
        <b>Fun Fact:</b> {fact}
        <br/>
        <b>Favorite Memory:</b> {memory}
      </div>
    </div>
  )
};

export default Members;
