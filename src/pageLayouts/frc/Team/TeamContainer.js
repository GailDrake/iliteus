import React from "react";
import Team from "./Team.js";

import teamListJSON from "../../../lib/teamListJSON.json";
import documentation from '../../../lib/documentation.json';

const team = Object.keys(teamListJSON.Sheet1).map(key => {
  return teamListJSON.Sheet1[key];
});

console.log(team);

const TeamContainer = () => <Team teamList={team} />;

export default TeamContainer;
