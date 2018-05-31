const path = require('path');

exports.onCreatePage = async ({ page, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  return new Promise((resolve, reject) => {
    page.layout = "frc";
    if (page.path.match(/^\/frc/)) {
      page.layout = "frc";
    }
    else if (page.path.match(/^\/outreach/)) {
      page.layout = "outreach";
    }
    else if (page.path.match(/^\/hosted-events/)) {
      page.layout = "hosted-events";
    }
    createPage(page);
    resolve();
  });
};