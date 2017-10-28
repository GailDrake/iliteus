## Installation
From the command line, in the directory where you want to install this project, run:

```
git clone https://github.com/GailDrake/iliteus.git
cd iliteus
yarn install
```

## Local development environment:
From the command line, in the root `ilite` folder, type `yarn start`. This will run a development server, and compile all LESS and JavaScript files. You can view the app on `localhost:8080` in your browser. The dev server will run continuously and will update as you change and save files.

# Style guides

### LESS style guide
[ilite style guide](https://github.com/GailDrake/ilite/wiki/Less-Style-guide) - A short, but authoritative style guide. Memorize it. Follow it. Teach it to your friends.

[Airbnb CSS Style Guide](https://github.com/airbnb/css) - A very well written and comprehensive guide to CSS and Sass. We're using Less, but they're basically the same. For any conflicts with the ilite style guide, this loses.


### Javascript style guide
[Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript) - Great general guidelines, and the style guide I've been seeing many companies use lately.


__Note:__
Do not touch the `dist` folder. It's regenerated when `yarn build` is executed, and will be completely overwritten.


### Handlebars.js
__HTML:__
Handlebars templates are included inside of `<script id="handlebars__templateName" type="text/x-handlebars-template"></script>` tags. Like all ids, the `id` must be unique, and by convention, prefixed with `handlebars__`. Since the id's are handles for JavaScript, by convention they should be camelCase.

There must be an accompanying `<div>` with the same id plus the suffix `--target`. This is required so that JavaScript has a place to render the template.

Variables that correspond to JSON object keys can be passed to the template in double curly braces: `{{variableName}}`. Partial templates can be included with the addition of a caret: `{{> templateName}}`.

_example template_
```
<script id="handlebars__templateName" type="text/x-handlebars-template">
  {{> partialName}}
  <p>My name is {{firstName}} {{lastName}}. I am a {{role}} on team {{teamNumber}}.</p>
</script>
<div id="handlebars__templateName--target"></div>
```

#### JavaScript:
Each handlebars template in an .html file must be supported by JavaScript.

To render a handlebars template, you should call the custom helper `renderHandlebars`. The syntax is: `renderHandlebars('handlebars-teamplateName', 'handlebars-templateName__target', data);` `data` is an optional JSON object.

To register a handlebars partial template, you need to pass an object to the custom helper `registerPartial()`. The object must have the following syntax: `{ name: 'string', body: 'string' }`. IMPORTANT: You must register a partial template before you render the template that calls it.

[intro Handlebars tutorial](https://www.sitepoint.com/a-beginners-guide-to-handlebars/)

### WebPack
__Adding a new page__

1. Create a new directory in the `/pages` folder
2. Add a `.js` file and a `.less` file. `example.js` and `example.import.less`.
3. `@import` your newly created `example.import.less` file into `app/style/less/main.less`.
4. In `webpack.config.js`:
  * Create a new `HtmlWebpackPlugin` instance, with your new page's details, at the top of the page (follow the examples). Then add it to the `plugin` array at the bottom of the file. This tells WebPack to generate a new `.html` page, with all of the listed dependencies.
  * Add a new entry point for your page in `entry` (the first key in the `module.exports` object).

### File Structure
Since this project does not use a router, the site's navigation is determined by the file structure. Each directory will have it's own sub-directories for `less`, `js`, and `assets`

### Footer
__Adding a footer

1. go to the bottem of the body
2. paste
```
<script id="handlebars__footer" type="text/x-handlebars-template">
 {{> footer}}
</script>
<div id="handlebars__footer--target"></div>
```
