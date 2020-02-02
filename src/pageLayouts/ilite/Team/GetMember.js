import React from "react";
import Members from "../../../components/members";

const GetMember = (subteam, teamList) => {
  if (subteam === "Mentors") {
    return getMentors(teamList);
  }

  return getLeaders(subteam, teamList).concat(
    teamList.map(member => {
      if (
        subteam === "Leadership" &&
        member.leader !== null &&
        member.leader.trim() !== ""
      ) {
        const image =
          member.image &&
          require(`../../../assets/images/frc/members/${subteam}/${
            member.image
            }`);
        return (
          <Members
            name={member.name}
            year={member.year}
            fact={member.fact}
            memory={member.memory}
            image={image}
            leader={member.leader}
            mentor={member.mentor}
            old={member.old}
          />
        );
      } else if (
        member.subteam === subteam &&
        member.leader === undefined &&
        member.mentor !== true
      ) {
        const image =
          member.image &&
          require(`../../../assets/images/frc/members/${subteam}/${
            member.image
            }`);
        return (
          <Members
            name={member.name}
            year={member.year}
            fact={member.fact}
            memory={member.memory}
            image={image}
            leader={member.leader}
            mentor={member.mentor}
            old={member.old}
          />
        );
      }
      else {
        return null;
      }
    })
  );
};

function getLeaders(subteam, teamList) {
  return teamList.map(member => {
    if (
      member.subteam === subteam &&
      member.leader !== null &&
      member.leader.trim() !== ""
    ) {
      const image =
        member.image &&
        require(`../../../assets/images/frc/members/${subteam}/${
          member.image
          }`);
      return (
        <Members
          name={member.name}
          year={member.year}
          fact={member.fact}
          memory={member.memory}
          image={image}
          leader={member.leader}
          mentor={member.mentor}
          old={member.old}
        />
      );
    }
    else {
      return null;
    }
  });
}

function getMentors(teamList) {
  return teamList.map(member => {
    console.log(member.mentor);
    if (member.mentor === true) {
      const image =
        member.image &&
        require(`../../../assets/images/frc/members/Mentors/${member.image}`);
      return (
        <Members
          name={member.name}
          year={member.year}
          fact={member.fact}
          memory={member.memory}
          image={image}
          leader={member.leader}
          mentor={member.mentor}
          subteam={member.subteam}
          old={member.old}
        />
      );
    }
    else {
      return null;
    }
  });
}

export default GetMember;
