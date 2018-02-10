# FRC Navbar Component
This is the *README* for the `FRCNavbar` component. The `FRCNavbar` component is responsible for navigation in the *FRC/Robotics* portion of the site.

## How to Use
The `FRCNavbar` component does not have any *parameters/attributes* and is a *standalone non-empty tag*, which means it does not require a closing tag but must have a closing slash inside of the tag. Ex: `<FRCNavbar />`. The `FRCNavbar` component is only referenced once, inside of the layout file, `frc.js`, for the FRC/Robotics section of the site. This makes it appear throughout every page in that section of the site.

## How it Works
Similar to all other components, the `FRCNavbar` component consists of three files, `navbar.js`, `navbar.less`, and `index.js`. These three files can all be found in the following file path:
```
iliteus/src/components/frc/navbar
```

##### Navbar.js
Starting with `navbar.js`, all of the *HTML* code for this component is housed here. First, we must import the necessary elements.
```JS
import React from 'react';
import "./navbar.less";
import Link from 'gatsby-link';
```
*React* is imported first because it is the basis of the site in general and must stay consistent throughout all the parts of the site. Next, we import the *LESS* file for this component, `navbar.less`. Finally, we import the `Link` tag/function that is defined by *GatsbyJS*. `Link` is used to link between different pages/sections of the site, while we still use the `<a>` tag for linking to other sites. After all the imports, we define `FRCNavbar` as a `const` variable and set it to a *function*.
```JS
const FRCNavbar = () =>
```
After the arrow function is where we put all of the *HTML* for the component. Finally, at the very bottom of the file, we export the `FRCNavbar` variable using the following line of code.
```JS
export default FRCNavbar;
```

##### Navbar.less
The `navbar.less` file is much simpler than the `navbar`.js file, merely containing the CSS for the latter. It is structured just like any other LESS file, requiring no extra JavaScript.

##### Index.js
The `index.js` file is very short but very important. The first line of code imports the component variable that we exported from `navbar.js`.
```JS
import Members from './members';
```
The second and final line of code exports that same component variable out to the page it is to be used on.
```JS
export default Members;
```
The reason for this is because when a page implements a component it must first import that component. The index.js file acts as a relay point that allows the page to access the component from the original `navbar.js` file.
