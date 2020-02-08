# Navbar Component
This is the *README* for the `Navbar` component. The `Navbar` component is responsible for navigation of its respective portion of the site.

## How to Use
The `Navbar` component is a *standalone non-empty tag* , which means it does not require a closing tag but must have a closing slash inside of the tag. Ex: `<Navbar />`. The `Navbar` component is only referenced inside of the layout file for its section. Ex: `frc.js` for the FRC/Robotics section of the site. This makes it appear throughout every page in that section of the site. It has one *attribute*, the `links` attribute. This attribute contains a list of objects, each one has a `name` value, a `section` value, and a `file` value. The `name` value has the name of the link. The `section` value has the section folder name foe that link. The `file` value has the name of that pages folder for the link.

## How it Works
Similar to all other components, the `Navbar` component consists of three files, `navbar.js`, `navbar.less`, and `index.js`. These three files can all be found in the following file path:
```
iliteus/src/components/navbar
```

##### Navbar.js
Starting with `navbar.js`, all of the *HTML* code for this component is housed here. First, we must import the necessary elements.
```JS
import React from 'react';
import Link from 'gatsby-link';
```
*React* is imported first because it is the basis of the site and *GatsbyJS* . Next, we import the `Link` tag/function that is defined by *GatsbyJS* . `Link` is used to link between different pages/sections of the site, while we still use the `<a>` tag for linking to other sites. We don't import the *LESS* file because it is imported in `main.less`. 

After all the imports, we define `Navbar` as a `class` that extends the `Component` class. The reason we use a class is to create a responsive navbar that changes.
```JS
class Navbar extends Component {}
```
After the class declaration we write the `constructor` for the class that builds an object based on the `Component` class and sets a *state* variable.
```JS
constructor(props) {
  super(props);
  this.state = {
    clicked: false,
  };
}
``` 
Then a *function* called `toggle` is defined that is responsible for changing the *state* variable's value.
```JS
toggle = () => {
  this.setState({
    clicked: !this.state.clicked
  })
}
```
Next, the class' `render()` function is called that displays things on the screen, similar to the *HTML* `<body></body>` tag.
```JS
render() {}
```
Inside the `render()` function we use *destructuring* with `this.props` to create a variable of the attribute's value when the component is called.
```JS
const { links } = this.props;
```
We then use `links.map()` to loop through the `links` variable, with each one returning a list item for the navbar. This allows an attribute of the `Navbar` component to specify the links of the navbar.
```JS
const getLinks = links.map((link, index) => {
  let filePath = `/${link.section}/${link.file}`;
  return (
    <li key={index}><Link to={filePath} className="list-item">{link.name}</Link></li>
  );
});
```
Next is the `return()` function for the class itself. This contains the *HTML* for the file. For the `burger` icon implementation we use the `onClick` function to change the state. The side menu is implemented elsewhere.
```JS
<div id="burger" onClick={this.toggle}></div>
```

Finally, at the very bottom of the file, we export the `Navbar` variable using the following line of code.
```JS
export default Navbar;
```

##### Navbar.less
The `navbar.less` file is much simpler than the `navbar`.js file, merely containing the CSS for the latter. It is structured just like any other LESS file, requiring no extra JavaScript.

##### Index.js
The `index.js` file is very short but very important. The first line of code imports the component variable that we exported from `navbar.js`.
```JS
import Navbar from './navbar';
```
The second and final line of code exports that same component variable out to the page it is to be used on.
```JS
export default Navbar;
```
The reason for this is because when a page implements a component it must first import that component. The index.js file acts as a relay point that allows the page to access the component from the original `navbar.js` file.
