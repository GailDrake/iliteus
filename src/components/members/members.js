import React from "react";
//import image from "./../../../assets/images/frc/home-hero-lg.jpg";
import userIcon from "./../../assets/images/icons/default.jpg";

const Members = ({ name, year, fact, memory, image, leader, mentor, subteam, old }) => {
  const oldPhoto = old ? "oldimg" : "";
  return (
    <div className="member">
      <div className={`member__img ${oldPhoto} ${!image ? "noImage" : ""}`}>
        <img src={image || userIcon} alt="Member Image" />
      </div>
      <div className="member__content">
        <h3 className="member__title">{name}</h3>
        {leader && (
          <div className="member__leader-title">
            <b>Title:</b> {leader}
            <br />
          </div>
        )}
        {year && (<span><b>Year Joined:</b> {year}</span>)}
        {subteam && (
          <div>
            <b>Subteam:</b> {subteam}
          </div>
        )}
        {fact && (
          <div><b>Fun Fact:</b> {fact} <br /></div>
        )}

        {memory && (<span><b>Favorite Memory:</b> {memory} </span>)}
      </div>
    </div>
  );
};

export default Members;
