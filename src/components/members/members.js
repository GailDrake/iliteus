import React from "react";
//import image from "./../../../assets/images/frc/home-hero-lg.jpg";

const Members = ({ name, year, fact, memory, image, leader, mentor, old }) => {
  const title = leader ? <span className="member__leader-title"><b>Title:</b> {leader}<br /></span> : '';
  const subteam = mentor ? <span><br /><b>Subteam:</b> {mentor}</span> : '';
  const oldPhoto = old ? "oldimg" : "";
  return (
    <div className="member">
      <div className={`member__img ${oldPhoto}`}>
        <img src={image} alt="Member Image" />
      </div>
      <div className="member__content">
        <h3 className="member__title">{name}</h3>{title}
        <b>Year Joined:</b> {year}
        {subteam}
        <br />
        <b>Fun Fact:</b> {fact}
        <br />
        <b>Favorite Memory:</b> {memory}
      </div>
    </div>
  )
};

export default Members;
