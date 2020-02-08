<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<h1 align="center">
  Gatsby's default starter - ILITE info below
</h1>

Kick off your project with this default boilerplate. This starter ships with the main Gatsby configuration files you might need to get up and running blazing fast with the blazing fast app generator for React.

_Have another more specific idea? You may want to check out our vibrant collection of [official and community-created starters](https://www.gatsbyjs.org/docs/gatsby-starters/)._

## 🚀 Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the default starter.

    ```shell
    # create a new Gatsby site using the default starter
    gatsby new my-default-starter https://github.com/gatsbyjs/gatsby-starter-default
    ```

1.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd my-default-starter/
    gatsby develop
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

    Open the `my-default-starter` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

7.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

9.  **`LICENSE`**: Gatsby is licensed under the MIT license.

10. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

12. **`README.md`**: A text file containing useful reference information about your project.

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.org/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.org/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

<!-- AUTO-GENERATED-CONTENT:END -->

# ILITE

This is the ILITE website code repository, powered by React, Gatsby, GraphQL, and Contentful. This page will describe the overall site

---

#### Terms

This team (and this guide) will often use buzzwords that you should know before working on the rest of the website.

- _HTML5_ - There are different version of HTML, and like most sites, we use the latest standard. This includes the `nav`, `article`, `section`, etc.
- _CSS3_ - Similar to HTML, there are different versions of CSS, and we use this as the baseline for our styles.
- _CSS4_ - This is the unofficial name of the latest release of CSS. The new version of CSS includes things such as grid layouts, variables, and selectors.
- _LESS_ - In simple terms, this is a more dynamic version of CSS. Unlike in CSS3, we can use conditional structures such as for loops and if statements, nest selectors, and use variables.
- _Browser Support_ - Some browsers do not support our advanced use of JavaScript, most notably older versions of Internet Explorer. This is simply our way of making sure that we don't accdidentally lose support for a browser by implementing a certain feature.
- _React_ - [React](https://reactjs.org/) is a composable component based JavaScript framework that we use for the basic structure of the site.
- _Gatsby_ - [Gatsby](https://www.gatsbyjs.org/) is a framework built on React and WebPack that handles a lot of the tooling setup for us. It handles the build process, routing, and development server.
- _JSX_ - A templating language implemented by React that is almost the same as HTML. This makes the transition from writing static HTML to dynamic JavaScript very smooth.
- _Components_ - These are parts of the site that we can reuse, or supply parameters. For example, the navbar, footer, and banners are among the dozens of reusable components.
- _State_ - The internal condition of a component.
- _Props_ - We can supply properties to React components to define actions of the component based on the properties supplied to it. Unlike state, we pass these props externally instead of internally.
- _Stateless Functional Components_ - These components make up the majority of all the components. They do not have state, and only use props.
- _Stateful Components_ - These components use state to make internal decisions within the component.
- _Content Management System (CMS)_ - This is our way of editing the website by using text areas and input boxes without having to dive into the code, ensuring that those without a code based background do not have to edit with the code. We will be using Contentful as our CMS this year.
- _ES6_ - Similar to how HTML and CSS have standards, JavaScript has a variety of versions that come out annually. The codebase is written entirely using ES6 syntax - this means we use `const`/`let`, destructuring, imperative programming, and other syntax.

---

### Getting Started

If you contributing to this repo, then you are most likely a member of the ILITE Robotics team. To contribute to this repository, you need to have a text editor. We recommend Visual Studio Code and Atom.

If you are contributing to this repository, then you need to have a few other tools that you need to have installed.

- NodeJS - server side javascript
- Yarn - a superior package manager
- Git Bash - a Linux style terminal (not necessary if you are using a Mac)
- Gatsby - the platform

To install [NodeJS](https://nodejs.org/en/), head to their website and select the latest version that fits your operating system. The installer will install both NodeJS and the NPM package manager. This repository doesn't use NodeJS, but we do use NPM scripts very frequently. We will use NPM as a method of building the project and running development servers.

To install [Yarn](https://yarnpkg.com/en/), install the executable from their website. We consider Yarn to be a superior package manager because of its speed and consistency, but we install NPM anyway because Yarn relies on NodeJS.

We also use the terminal very frequently. If you are on Windows, then install [Git Bash](https://git-scm.com/downloads). If you are on Mac, then the default terminal is fine. Having either of these terminals allows you to run some of the Linux styled commands, which are invaluable when coding. These include `ls` and `rm -rf`.

To install [Gatsby](https://www.gatsbyjs.org/), run the following command in your terminal.

```
yarn install --global gatsby-cli
```

This is the platform we will build our website on.

To run the site locally: `yarn develop`

# Style guides

### LESS style guide

[ilite style guide](https://github.com/GailDrake/ilite/wiki/Less-Style-guide) - A short, but authoritative style guide. Memorize it. Follow it. Teach it to your friends.

[Airbnb CSS Style Guide](https://github.com/airbnb/css) - A very well written and comprehensive guide to CSS and Sass. We're using Less, but they're basically the same. For any conflicts with the ilite style guide, this loses.

### Javascript style guide

[Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript) - Great general guidelines, and the style guide I've been seeing many companies use lately.

#### Note:

Do not write in any files in the `/public` directory. They are being generated by Gatsby and will be written over.
