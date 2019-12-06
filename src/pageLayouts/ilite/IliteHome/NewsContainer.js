import React from "react";

import newsData from "../../../lib/iliteHome/newsData.json";

function getNews() {
  let newsDataObject = JSON.parse(newsData);
  console.log(newsDataObject);
}

export default NewsContainer;