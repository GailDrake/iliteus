import React from "react";

import newsData from "../../../lib/newsData.json";

function getNews() {
  let newsDataObject = JSON.parse(newsData);
  console.log(newsDataObject);
}

export default NewsContainer;