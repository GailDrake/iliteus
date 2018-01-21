import React from 'react';
import Link from 'gatsby-link';
import Button from '../components/button';

export default () =>
  <div>
    <h1>Hello Gatsby</h1>
    <p>ILITE Robotics</p>
    <img src = "https://source.unsplash.com/random/400x200" />
    <br />
    <Button link = "/about">About Us</Button>
  </div>