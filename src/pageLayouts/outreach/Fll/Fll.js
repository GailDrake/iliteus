//React Imports
import React from 'react';
import Container from '../../../templates/Container'

//Component Imports

//Image Imports
import fll1 from '../../../assets/images/outreach/fll1.jpg'
import fll2 from '../../../assets/images/outreach/fll2.jpg'
import fll3 from '../../../assets/images/outreach/fll3.jpg'
import fll4 from '../../../assets/images/outreach/fll4.jpg'
import fll5 from '../../../assets/images/outreach/fll5.jpg'
import fll6 from '../../../assets/images/outreach/fll6.jpg'
import fll7 from '../../../assets/images/outreach/fll7.jpg'
import fll8 from '../../../assets/images/outreach/fll8.jpg'
import fll9 from '../../../assets/images/outreach/fll9.jpg'


const Fll = (props) => {
  return (
    <Container division="outreach" title="FLL" subtitle="First Lego League">
      <div className="fll">
        <h1 className="fll__header">FLL Workshop</h1>
        <h1 className="fll__subheader">Reaserch Workshop</h1>
        <img src={fll1} alt="" className="fll__image" />
        <img src={fll2} alt="" className="fll__image" />
        <img src={fll3} alt="" className="fll__image" />
        <p className="fll__text">
          A Workshop that guides teams in developing their
          project ideas by providing them with
          brainstorming opportunities, giving advice on
          creating a unique solution, and assistance from a
          guest speaker who works in the water treatment
          industry.
          </p>

        <h1 className="fll__subheader">Programing Workshop</h1>
        <img src={fll4} alt="" className="fll__image" />
        <img src={fll5} alt="" className="fll__image" />
        <img src={fll6} alt="" className="fll__image" />
        <p className="fll__text">
          This workshop taught teams how to code color
          sensors, light sensors, touch sensors, and other
          sensors and helped them develop efficient code
          and improve their coding style.
            </p>

        <h1 className="fll__subheader">Presentation Workshop</h1>
        <img src={fll7} alt="" className="fll__image" />
        <img src={fll8} alt="" className="fll__image" />
        <img src={fll9} alt="" className="fll__image" />
        <p className="fll__text">
          The final workshop provided the teams assistance
          in working together as a team and how to give a
          professional presentation for competition.
          </p>

      </div>
    </Container>
  );
};

Fll.propTypes = {

};

export default Fll;