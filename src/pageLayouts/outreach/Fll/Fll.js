//React Imports
import React from 'react';
import Container from '../../../templates/container'

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
import fll10 from '../../../assets/images/outreach/fll10.jpg'
import fll11 from '../../../assets/images/outreach/fll11.jpg'
import fll12 from '../../../assets/images/outreach/fll12.jpg'
import fll13 from '../../../assets/images/outreach/fll13.jpg'
import fll14 from '../../../assets/images/outreach/fll14.jpg'
import fll15 from '../../../assets/images/outreach/fll15.jpg'
import international from '../../../assets/images/outreach/international.jpg'


const Fll = (props) => {
  return (
    <Container title="FLL" subtitle="First Lego League">
      <div className="fll">
        <h1 className="fll__header">FLL Workshops</h1>
        <h1 className="fll__subheader">Research Workshop</h1>
        <img src={fll1} alt="" className="fll__image fll__remove" />
        <img src={fll2} alt="" className="fll__image fll__stay" />
        <img src={fll3} alt="" className="fll__image fll__remove" />
        <p className="fll__text">
          A Workshop that guides teams in developing their
          project ideas by providing them with
          brainstorming opportunities, giving advice on
          creating a unique solution, and assistance from a
          guest speaker who works in the water treatment
          industry.
          </p>

        <h1 className="fll__subheader">Programing Workshop</h1>
        <img src={fll4} alt="" className="fll__image fll__remove" />
        <img src={fll5} alt="" className="fll__image fll__remove" />
        <img src={fll6} alt="" className="fll__image fll__stay" />
        <p className="fll__text">
          This workshop taught teams how to code color
          sensors, light sensors, touch sensors, and other
          sensors and helped them develop efficient code
          and improve their coding style.
            </p>

        <h1 className="fll__subheader">Presentation Workshop</h1>
        <img src={fll7} alt="" className="fll__image fll__remove" />
        <img src={fll8} alt="" className="fll__image fll__remove" />
        <img src={fll9} alt="" className="fll__image fll__stay" />
        <p className="fll__text">
          The final workshop provided the teams assistance
          in working together as a team and how to give a
          professional presentation for competition.
          </p>
        <h1 className="fll__header">FLL Around The World</h1>
        <img src={international} alt="" className="fll__image--lg" />
        <p className="fll__text">
          ILITE has reached more than 70,000 minds all over the world teaching STEAM
          by partnering with non-profit organizations like Haitian Angels and the National
          Institute of Health. We bring FLL kits to children in US military families, Ethiopia, Malaysia,
          Haiti, Liberia, Jamaica, and Bolivia, using video conferencing to provide a curriculum and to
          mentor the kids exposing them to the world of STEAM. This helps underprivileged kids experience
          a piece of the technology available today.
        </p>
        <h1 className="fll__header">FLL Summer Camps</h1>
        <h1 className="fll__subheader">Jr. FLL Camp</h1>
        <img src={fll10} alt="" className="fll__image fll__remove" />
        <img src={fll11} alt="" className="fll__image fll__stay" />
        <img src={fll12} alt="" className="fll__image fll__remove" />
        <p className="fll__text">
          Introduces critical thinking and engineering through the use of Jr. FLL challenges for students from
          preschool and kindergarten
        </p>
        <h1 className="fll__subheader">FLL Camp</h1>
        <img src={fll13} alt="" className="fll__image fll__remove" />
        <img src={fll14} alt="" className="fll__image fll__stay" />
        <img src={fll15} alt="" className="fll__image fll__remove" />
        <p className="fll__text">
          Introductory summer camp for third, fourth, and fifth grade students that includes scientific
          experiments that teach basic principles of force, power, and chemistry.
        </p>
      </div>
    </Container>
  );
};

Fll.propTypes = {

};

export default Fll;