import React from 'react';
import PropTypes from 'prop-types';
import Container from '../../../templates/container';

const Competition = () => {
  return (
    <Container division="frc" title="Competitions" subtitle="See all of our competitions from throughout our history">
      <div className="competition">
        <div className="tabs">
          <li><a href="#tab12">2017</a></li>
          <li><a href="#tab11">2016</a></li>
          <li><a href="#tab10">2015</a></li>
          <li><a href="#tab9">2014</a></li>
          <li><a href="#tab8">2013</a></li>
          <li><a href="#tab7">2012</a></li>
          <li><a href="#tab6">2011</a></li>
          <li><a href="#tab5">2010</a></li>
          <li><a href="#tab4">2009</a></li>
          <li><a href="#tab3">2008</a></li>
          <li><a href="#tab2">2007</a></li>
          <li><a href="#tab1">2006</a></li>
        </div>
      </div>
    </Container>
  );
};

Competition.propTypes = {

};

export default Competition;
