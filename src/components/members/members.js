import React from "react";
//import image from "./../../../assets/images/frc/home-hero-lg.jpg";
import userIcon from "./../../assets/images/icons/user.svg";

const Members = ({ name, year, fact, memory, image, leader, mentor, old }) => {
  const oldPhoto = old ? "oldimg" : "";
  return (
    <div className="member">
      <div className={`member__img ${oldPhoto} ${!image ? "noImage" : ""}`}>
        <img src={image || userIcon} alt="Member Image" />
      </div>
      <div className="member__content">
        <h3 className="member__title">{name}</h3>
        {leader && (
          <span className="member__leader-title">
            <b>Title:</b> {leader}
            <br />
          </span>
        )}
        <b>Year Joined:</b> {year}
        {mentor && (
          <span>
            <br />
            <b>Subteam:</b> {mentor}
          </span>
        )}
        <br />
        <b>Fun Fact:</b> {fact}
        <br />
        <b>Favorite Memory:</b> {memory}
      </div>
    </div>
  );
};

export default Members;
