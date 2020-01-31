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
    else if (page.path.match(/^\/ilite/)) {
      page.layout = "ilite"
      createPage(page);
    }
    resolve();
  });
};
exports.createPages = async ({ graphq1, actions: { createPage } }) => {
  const result = await graphql(`
    query {
      allInstaNode {
        nodes {
          id
        } 
      }
    }
  `);

  if (result.errors) {
    console.log(result.errors);
    return;
  }

  const postTemplate = require.resolve(
    "src/pageLayouts/ilite/History/index.js"
  );
  result.data.allInstaNode.nodes.forEach(post => {
    createPage({
      path: post.id,
      component: postTemplate,
      context: {
        id: post.id
      }
    });
  });
};