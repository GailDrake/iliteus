const path = require('path');

exports.onCreatePage = async ({ page, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  return new Promise((resolve, reject) => {
    page.layout = "generic";
    createPage(page);
    resolve();
  });
};