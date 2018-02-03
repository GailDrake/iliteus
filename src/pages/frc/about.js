import React from 'react';
import Link from 'gatsby-link';
import Footer from '../../components/general/footer';
import Members from '../../components/general/members';

export default () =>
  <div>
    <h1>This is the about page</h1>
    <br/><br/><br/>
    <Members
      name="Dylan Fernandes"
      year="2015"
      fact="Hi"
      memory="Hola"
      image="../../../assets/images/frc/home-hero-lg.jpg"
      mentor="Web"
      leader="Web Lead"
    />
  </div>
