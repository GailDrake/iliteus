const path = require('path');

exports.onCreatePage = async ({ page, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  return new Promise((resolve, reject) => {
    if (page.path.match(/^\/frc/)) {
      page.layout = "frc";
      createPage(page);
    }
    else if (page.path.match(/^\/outreach/)) {
      page.layout = "outreach";
      createPage(page);
    }
    else if (page.path.match(/^\/hosted-events/)) {
      page.layout = "hosted-events";
      createPage(page);
    }
    resolve();
  });
};