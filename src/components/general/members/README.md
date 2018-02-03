# Members components
This is the README for the `Members` component. The `Members` component is used for the various `Team` pages for each section of the site to represent each member of the team.

## How to Use
This guide demonstrates how to use the `Members` component in the site.

##### Basic Usage
The `Members` component is used as an *HTML tag*, similar to other components on the site. The tag has five required attributes; `name`, `year`, `fact`, `memory`, and `image`. An example of what the component looks like is below:
```HTML
<Members name="" year="" fact="" memory="" image="" />
```
The `name` attribute displays the persons full name. The `year` attribute displays the year during which the person first joined ILITE. The `fact` attribute displays a fun fact about the person. The `memory` attribute displays the person's favorite memory in ILITE. Finally, the `image` attribute contains the relative url for the picture of the person.

##### Leaders and Mentors
When used for student leaders or subteam mentors the `Members` component has two optional attributes called `leader` and `mentor`. The `leader` attribute is used to add a title description to the person, containing their leader title. The `mentor` attribute is used to add a subteam description to the mentor, containing which subteam they mentor.

##### Implementation
When using the `Members` component on a page we must first import the component usin the following line of code.
```JS
import Members from './../../components/general/members';
```
The `Team` page uses a list or array of objects, each one containing the information for a member. This list is defined as a `const` variable.
```JS
const teamList = [
  {
    image: 'Dylan F..jpg',
    name: 'Dylan Fernandes',
    fact: 'Blah',
    memory: 'Blah',
    year: 2015
  },
  {
    /*Continue list with more members*/
  }
]
```
Then, inside of the `export default () => {}` page declaration we loop through the list using the `map` function and set it to a  new `const` variable.
  ```JS
  const memberList = teamList.map(member => {});
  ```
  The `map` function works as a *For Each* loop, it loops through the *teamList* variable setting the variable *member* to each object in the list respectively. Next, inside the curly brackets we define a `let` variable that uses the `require` function to find each image in a set path.
  ```JS
  let image = require(`./../../assets/images/frc/${member.image}`);
  ```
  After that, inside a return statement, we call the `Members` component and set each attribute to its respective variable inside the `member` object.
  ```JS
  return (
    <Members
      name= {member.name}
      year= {member.year}
      fact= {member.fact}
      memory= {member.memory}
      image= {image} /*The image variable is defined outside the member object*/
      leader= {member.leader}/*If no leader of mentor value is given this is ignored*/
      mentor= {member.mentor}
    />
  );
  ```
  Finally, we call the `const` variable *memberList* inside the *HTML* of the page.
  ```HTML
  <div>{memberList}</div>
  ```

## How it Works
This guide will demonstrate how the `Members` component works and the code behind it.

Since we are using *GatsbyJS* we don't have any *HTML* files, instead, everything is either *JavaScript* or *LESS*. The `Members` component is found in the file path:
```
iliteus/src/components/general/members
```
Inside the members folder there are three files, `members.js`, `members.less`, and `index.js`.

##### Members.js
 Starting with `members.js`, this is where the *HTML* code for the component will be held. At the top we import React and the *LESS* file  for the component.
```JS
import React from "react";
import "./members.less";
```
Next, we create a `const` variable that will contain the actual component. The variable is then set to a function and we use something called *destructuring* to define the parameters or *attributes*.
```JS
const Members = ({name, year, fact, memory, image, leader, mentor}) => {}
```
Then, using an arrow function and curly brackets, we extend the variable to include the contents of the brackets. The next two lines deal with both of the optional attributes. A `const` variable is used with a ternary operator that asks if that attribute exists. If it does it sets the variable to the following section of code, if not it sets the variable to empty quotes.
```JS
const title = leader ? <span className="leader-title"><b>Title:</b> {leader}<br/></span> : '';
```
The return statement then specifies what is to be displayed when the component is called, aka, your *HTML*. In the *HTML* portion curly brackets are used to indicate variables/parameters. Ex: `{name}`. Finally, at the end of the file we export the `Members` variable using the following line of code.
```JS
export default Members;
```

##### Members.less
The `members.less` file is much simpler than the `members.js` file, merely containing the *CSS* for the latter. It is structured just like any other *LESS* file, requiring no extra *JavaScript*.

##### Index.js
The `index.js` file is very short but very important. The first line of code imports the component variable that we exported from `members.js`.
```JS
import Members from './members';
```
The second and final line of code exports that same component variable out to the page it is to be used on.
```JS
export default Members;
```
The reason for this is because when a page implements a component it must first import that component. The `index.js` file acts as a relay point that allows the page to access the component from the original `members.js` file.
