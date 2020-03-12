import React from "react";
import Team from "./Team.js";

import teamList from "../../../lib/teamList.json";

const team = Object.keys(teamList.Sheet1).map(key => {
  return teamList.Sheet1[key];
});

const TeamContainer = () => <Team teamList={team} />;

export default TeamContainer;
