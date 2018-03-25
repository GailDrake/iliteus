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

        {/* 2017 - Steamworks */}
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
              <ul>
                <li>FIRST World Championship, Darwin Division</li>
                <li>CHS Greater DC District</li>
                <li>CHS Central Virginia District</li>
                <li>FIRST Chesapeake District Championship</li>
                <li>Einstein Field (St. Louis)</li>
                <li>Indiana Robotics Invitational</li>
                <li>Rumble in the Roads</li>
                <li>IROC</li>
              </ul>
            </div>
          </div>
        </div>
        {/* 2016 - Stronghold */}
        <div className="competition__event" id="tab11">
          <h1 className="competition__event-header">2016 - Stronghold</h1>
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/VqOKzoHJDjA"
            frameborder="0"
            gesture="media"
            allow="encrypted-media"
            allowfullscreen />
          <div className="competition__event-container">
            <div>
              <h3 className="competition__event-subheader">Awards</h3>
              <ul>
                <li>FIRST World Championship Curie Division: Industrial Design Award</li>
                <li>CHS District Championship: Regional Chairman's Award</li>
                <li>CHS District Championship: Woodie Flowers Finalist Award (Jesse Knight)</li>
                <li>CHS Greater DC District: District Chairman's Award</li>
                <li>CHS Hampton Roads District: District Event Finalist</li>
                <li>CHS Hampton Roads District: Industrial Design Award</li>
                <li>CHS Hampton Roads District: Entrepreneurship Award</li>
                <li>CHS Central Virginia District: Industrial Design Award</li>
              </ul>
            </div>
            <div>
              <h3 className="competition__event-subheader">Competitions Attended</h3>
              <ul>
                <li>CHS District Greater DC</li>
                <li>CHS District Hampton Roads</li>
                <li>FIRST Chesapeake District Championship</li>
                <li>Curie Division</li>
                <li>Battle O' Baltimore</li>
                <li>IROC - ILITE Robotics Offseason Challenge</li>
                <li>Rumble in the Roads</li>
              </ul>
            </div >
          </div >
        </div>
        <div className="competition__event" id="tab10">
          <h1 className="competition__event-header">2015 - Recycle Rush</h1>
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/W6UYFKNGHJ8"
            frameborder="0"
            gesture="media"
            allow="encrypted-media"
            allowfullscreen />
          <div className="competition__event-container">
            <div>
              <h3 className="competition__event-subheader">Awards</h3>
              <ul>
                <li>Greater DC Regional: Regional Chairman’s Award</li>
                <li>Greater DC Regional: Semifinalist</li>
                <li>Greater DC Regional: FIRST Dean’s List Finalist Award (Amr Metwally)</li>
                <li>Greater DC Regional: Safety Hard Hat Award</li>
                <li>Greater Pittsburgh Regional: Imagery Award in honor of Jack Kamen</li>
                <li>Greater Pittsburgh Regional: Quarterfinalist</li>
              </ul>
            </div>
            <div>
              <h3 className="competition__event-subheader">Competitions Attended</h3>
              <ul>
                <li>FIRST World Championship, Carson Division</li>
                <li>CHS Greater DC Regional</li>
                <li>Greater Pittsburgh Regional</li>
                <li>Rumble in the Roads</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="competition__event" id="tab9">
          <h1 className="competition__event-header">2014 - Aerial Assist</h1>
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/W6UYFKNGHJ8"
            frameborder="0"
            gesture="media"
            allow="encrypted-media"
            allowfullscreen />
          <div className="competition__event-container">
            <div>
              <h3 className="competition__event-subheader">Awards</h3>
              <ul>
                <li>FIRST World Championship Galileo Division: Innovation in Control Award</li>
                <li>Greater DC Regional: Regional Chairman’s Award</li>
                <li>Greater DC Regional: Regional Finalist</li>
                <li>Greater DC Regional: Dean's List Finalist (Ben Robson)</li>
                <li>Chesapeake Regional: Volunteer of the Year (Gail Drake)</li>
                <li>Chesapeake Regional: Creativity Award</li>
              </ul>
            </div>
            <div>
              <h3 className="competition__event-subheader">Competitions Attended</h3>
              <ul>
                <li>FIRST World Championship, Galileo Division</li>
                <li>Greater DC Regional</li>
                <li>Chesapeake Regional</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="competition__event" id="tab8">
          <h1 className="competition__event-header">2013 - Ultimate Ascent</h1>
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/wa5MGEZNrf0"
            frameborder="0"
            gesture="media"
            allow="encrypted-media"
            allowfullscreen />
          <div className="competition__event-container">
            <div>
              <h3 className="competition__event-subheader">Awards</h3>
              <ul>
                <li>Washington DC Regional: Regional Chairman’s Award</li>
                <li>Washington DC Regional: Dean's List Finalist (David Powell)</li>
              </ul>
            </div>
            <div>
              <h3 className="competition__event-subheader">Competitions Attended</h3>
              <ul>
                <li>Washington DC Regional</li>
                <li>Chesapeake Regional</li>
                <li>Newton Division</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="competition__event" id="tab9">
          <h1 className="competition__event-header">2013 - Ultimate Ascent</h1>
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/wa5MGEZNrf0"
            frameborder="0"
            gesture="media"
            allow="encrypted-media"
            allowfullscreen />
          <div className="competition__event-container">
            <div>
              <h3 className="competition__event-subheader">Awards</h3>
              <ul>
                <li>Washington DC Regional: Regional Chairman’s Award</li>
                <li>Washington DC Regional: Dean's List Finalist (David Powell)</li>
              </ul>
            </div>
            <div>
              <h3 className="competition__event-subheader">Competitions Attended</h3>
              <ul>
                <li>Washington DC Regional</li>
                <li>Chesapeake Regional</li>
                <li>Newton Division</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="competition__event" id="tab7">
          <h1 className="competition__event-header">2012 - Rebound Rumble</h1>
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/W6UYFKNGHJ8"
            frameborder="0"
            gesture="media"
            allow="encrypted-media"
            allowfullscreen />
          <div className="competition__event-container">
            <div>
              <h3 className="competition__event-subheader">Awards</h3>
              <ul>
                <li>Washington DC Regional: Engineering Inspiration Award</li>
                <li>Virginia Regional: Regional Chairman's Award</li>
                <li>Virginia Regional: Website Award</li>
              </ul>
            </div>
            <div>
              <h3 className="competition__event-subheader">Competitions Attended</h3>
              <ul>
                <li>Virginia Regional</li>
                <li>Washington DC Regional</li>
                <li>FIRST World Championship, Curie Division</li>
              </ul>
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
