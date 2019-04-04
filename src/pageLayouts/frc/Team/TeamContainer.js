import React from "react";
import Team from "./Team.js";

import teamListJSON from "../../../lib/frcTeam/frcTeamData.json";

const team = Object.keys(teamListJSON.Sheet1).map(key => {
  return teamListJSON.Sheet1[key];
});

const TeamContainer = () => <Team teamList={team} />;

export default TeamContainer;
