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
