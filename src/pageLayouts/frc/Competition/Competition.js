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
        <div className="competition__event" id="tab12">
          <h1 className="competition__event-header">2017 - Steamworks</h1>
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/MM_JWAON6PI"
            frameborder="0"
            gesture="media"
            allow="encrypted-media"
            allowfullscreen />
          <div className="competition__event-container">
            <div>
              <h3 className="competition__event-subheader">Awards</h3>
              <ul>
                <li>FIRST World Championship: Chairman's Award Finalist</li>
                <li>CHS District Championship: Regional Chairman's Award</li>
                <li>CHS District Championship: District Championship Finalist</li>
                <li>CHS Greater DC District: District Chairman's Award</li>
                <li>CHS Greater DC District: District Event Winner</li>
                <li>CHS Central Virginia District: District Event Winner</li>
                <li>CHS Central Virginia District: Industrial Design Award</li>
              </ul>
            </div>
            <div>
              <h3 className="competition__event-subheader">Competitions Attended</h3>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

Competition.propTypes = {

};

export default Competition;
