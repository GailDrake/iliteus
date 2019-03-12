import React from 'react';
import PropTypes from 'prop-types';
import Container from '../../../templates/container';
import Tabs, { Tab } from '../../../components/Tabs';

const Competition = () => {
  return (
    <Container division="frc" title="Competitions" subtitle="See all of our competitions from throughout our history" id="top">
      <div className="competition">
        <Tabs>
          {/* 2019 - Destination: Deep Space */}
          <Tab name="2019">
            <div className="competition__event" id="tab14">
              <h1 className="competition__event-header">2019 - Destination: Deep Space</h1>
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/Mew6G_og-PI"
                frameborder="0"
                gesture="media"
                allow="encrypted-media"
                allowfullscreen />
              <div className="competition__event-container">
                <div className="competition__awards">
                  <h3 className="competition__event-subheader">Awards</h3>
                  <ul>
                    <li>CHS District Bethesda Event: Chairman's Award</li>
                    <li>CHS District Bethesda Event: Event Winner</li>
                  </ul>
                </div>
                <div className="competition__attended">
                  <h3 className="competition__event-subheader">Competitions Attended</h3>
                  <ul>
                    <li>FIRST Chesapeake District Bethesda MD Event</li>
                  </ul>
                </div>
              </div>
            </div>
          </Tab>
          {/* 2018 - Power Up */}
          <Tab name="2018">
            <div className="competition__event" id="tab13">
              <h1 className="competition__event-header">2018 - Power Up</h1>
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/HZbdwYiCY74"
                frameborder="0"
                gesture="media"
                allow="encrypted-media"
                allowfullscreen />
              <div className="competition__event-container">
                <div className="competition__awards">
                  <h3 className="competition__event-subheader">Awards</h3>
                  <ul>
                    <li>FIRST World Championship: Woodie Flowers Award(Gail Drake)</li>
                    <li>CHS District Championship: Regional Chairman's Award</li>
                    <li>CHS District Championship: District Championship Winner</li>
                    <li>CHS Greater DC District: District Chairman's Award</li>
                    <li>CHS Greater DC District: District Event Winner</li>
                    <li>CHS Southern Maryland District: Excellence in Engineering Award </li>
                  </ul>
                </div>
                <div className="competition__attended">
                  <h3 className="competition__event-subheader">Competitions Attended</h3>
                  <ul>
                    <li>FIRST World Championship, Carson Division</li>
                    <li>CHS Greater DC District</li>
                    <li>FIRST Chesapeake District Championship</li>
                    <li>Rumble in the Roads</li>
                    <li>IROC</li>
                  </ul>
                </div>
              </div>
            </div>
          </Tab>
          {/* 2017 - Steamworks */}
          <Tab name="2017">
            <div className="competition__event" id="tab12">
              <h1 className="competition__event-header">2017 - Steamworks</h1>
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/EMiNmJW7enI"
                frameborder="0"
                gesture="media"
                allow="encrypted-media"
                allowfullscreen />
              <div className="competition__event-container">
                <div className="competition__awards">
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
                <div className="competition__attended">
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
          </Tab>
          {/* 2016 - Stronghold */}
          <Tab name="2016">
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
                <div className="competition__awards">
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
                <div className="competition__attended">
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
          </Tab>
          {/* 2015 - Recycle Rush */}
          <Tab name="2015">
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
                <div className="competition__awards">
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
                <div className="competition__attended">
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
          </Tab>
          {/* 2014 - Aerial Assist */}
          <Tab name="2014">
            <div className="competition__event" id="tab9">
              <h1 className="competition__event-header">2014 - Aerial Assist</h1>
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/oxp4dkMQ1Vo"
                frameborder="0"
                gesture="media"
                allow="encrypted-media"
                allowfullscreen />
              <div className="competition__event-container">
                <div className="competition__awards">
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
                <div className="competition__attended">
                  <h3 className="competition__event-subheader">Competitions Attended</h3>
                  <ul>
                    <li>FIRST World Championship, Galileo Division</li>
                    <li>Greater DC Regional</li>
                    <li>Chesapeake Regional</li>
                  </ul>
                </div>
              </div>
            </div>
          </Tab>
          {/* 2013 - Ultimate Ascent */}
          <Tab name="2013">
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
                <div className="competition__awards">
                  <h3 className="competition__event-subheader">Awards</h3>
                  <ul>
                    <li>Washington DC Regional: Regional Chairman’s Award</li>
                    <li>Washington DC Regional: Dean's List Finalist (David Powell)</li>
                  </ul>
                </div>
                <div className="competition__attended">
                  <h3 className="competition__event-subheader">Competitions Attended</h3>
                  <ul>
                    <li>Washington DC Regional</li>
                    <li>Chesapeake Regional</li>
                    <li>Newton Division</li>
                  </ul>
                </div>
              </div>
            </div>
          </Tab>
          {/* 2012 - Rebound Rumble */}
          <Tab name="2012">
            <div className="competition__event" id="tab7">
              <h1 className="competition__event-header">2012 - Rebound Rumble</h1>
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/-bRXOTLQvoE"
                frameborder="0"
                gesture="media"
                allow="encrypted-media"
                allowfullscreen />
              <div className="competition__event-container">
                <div className="competition__awards">
                  <h3 className="competition__event-subheader">Awards</h3>
                  <ul>
                    <li>Washington DC Regional: Engineering Inspiration Award</li>
                    <li>Virginia Regional: Regional Chairman's Award</li>
                    <li>Virginia Regional: Website Award</li>
                  </ul>
                </div>
                <div className="competition__attended">
                  <h3 className="competition__event-subheader">Competitions Attended</h3>
                  <ul>
                    <li>Virginia Regional</li>
                    <li>Washington DC Regional</li>
                    <li>FIRST World Championship, Curie Division</li>
                  </ul>
                </div>
              </div>
            </div>
          </Tab>
          {/* 2011 - Logomotion */}
          <Tab name="2011">
            <div className="competition__event" id="tab6">
              <h1 className="competition__event-header">2011 - Logomotion</h1>
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/aH_9QHZpsfs"
                frameborder="0"
                gesture="media"
                allow="encrypted-media"
                allowfullscreen />
              <div className="competition__event-container">
                <div className="competition__awards">
                  <h3 className="competition__event-subheader">Awards</h3>
                  <ul>
                    <li>Washington DC Regional: Engineering Inspiration Award</li>
                    <li>Virginia Regional: Regional Chairman’s Award</li>
                    <li>Virginia Regional: Best Website Award</li>
                    <li>Virginia Regional: Quarterfinalist</li>
                  </ul>
                </div>
                <div className="competition__attended">
                  <h3 className="competition__event-subheader">Competitions Attended</h3>
                  <ul>
                    <li>Virginia Regional</li>
                    <li>Washington DC Regional</li>
                    <li>FIRST World Championship, Galileo Division</li>
                  </ul>
                </div>
              </div>
            </div>
          </Tab>
          {/* 2010 - Breakaway */}
          <Tab name="2010">
            <div className="competition__event" id="tab5">
              <h1 className="competition__event-header">2010 - Breakaway</h1>
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/Bb1P43OSfOU"
                frameborder="0"
                gesture="media"
                allow="encrypted-media"
                allowfullscreen />
              <div className="competition__event-container">
                <div className="competition__awards">
                  <h3 className="competition__event-subheader">Awards</h3>
                  <ul>
                    <li>Washington DC Regional: Engineering Inspiration Award</li>
                    <li>Washington DC Regional: Finalist</li>
                    <li>Washington DC Regional: Woodie Flowers Finalist Award (Professor Gail Drake) </li>
                    <li>Virginia Regional: Engineering Inspiration Award</li>
                    <li>Virginia Regional: Finali</li>
                  </ul>
                </div>
                <div className="competition__attended">
                  <h3 className="competition__event-subheader">Competitions Attended</h3>
                  <ul>
                    <li>Washington DC Regional</li>
                  </ul>
                </div>
              </div>
            </div>
          </Tab>
          {/* 2009 - Lunacy */}
          <Tab name="2009">
            <div className="competition__event" id="tab4">
              <h1 className="competition__event-header">2009 - Lunacy</h1>
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/nEh3Wzd1jDI"
                frameborder="0"
                gesture="media"
                allow="encrypted-media"
                allowfullscreen />
              <div className="competition__event-container">
                <div className="competition__awards">
                  <h3 className="competition__event-subheader">Awards</h3>
                  <ul>
                    <li>Washington DC Regional: Quarterfinalist</li>
                  </ul>
                </div>
                <div className="competition__attended">
                  <h3 className="competition__event-subheader">Competitions Attended</h3>
                  <ul>
                    <li>Washington DC Regional</li>
                    <li>Florida Regional</li>
                    <li>FIRST World Championship, Galileo Division</li>
                  </ul>
                </div>
              </div>
            </div>
          </Tab>
          {/* 2008 - Overdrive */}
          <Tab name="2008">
            <div className="competition__event" id="tab3">
              <h1 className="competition__event-header">2008 - Overdrive</h1>
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/D5oL7aLH0T4"
                frameborder="0"
                gesture="media"
                allow="encrypted-media"
                allowfullscreen />
              <div className="competition__event-container">
                <div className="competition__awards">
                  <h3 className="competition__event-subheader">Awards</h3>
                  <ul>
                    <li>Washington DC Regional: Engineering Inspiration Award</li>
                    <li>Florida Regional: Imagery Award</li>
                  </ul>
                </div>
                <div className="competition__attended">
                  <h3 className="competition__event-subheader">Competitions Attended</h3>
                  <ul>
                    <li>NASA/VCU Regional </li>
                    <li>Philadelphia Regional</li>
                    <li>FIRST World Championship, Galileo Division</li>
                  </ul>
                </div>
              </div>
            </div>
          </Tab>
          {/* 2007 - Rack n' Roll */}
          <Tab name="2007">
            <div className="competition__event" id="tab2">
              <h1 className="competition__event-header">2007 - Rack n' Roll</h1>
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/khTGSKvDyS4"
                frameborder="0"
                gesture="media"
                allow="encrypted-media"
                allowfullscreen />
              <div className="competition__event-container">
                <div className="competition__awards">
                  <h3 className="competition__event-subheader">Awards</h3>
                  <ul>
                    <li>NASA/VCU Regional: Regional Engineering Inspiration Award</li>
                    <li>NASA/VCU Regional: Quarterfinalist</li>
                  </ul>
                </div>
                <div className="competition__attended">
                  <h3 className="competition__event-subheader">Competitions Attended</h3>
                  <ul>
                    <li>NASA/VCU Regional </li>
                    <li>Las Vegas Regional</li>
                    <li>FIRST World Championship, Newton Division</li>
                  </ul>
                </div>
              </div>
            </div>
          </Tab>
          {/* 2006 - Aim High */}
          <Tab name="2006">
            <div className="competition__event" id="tab2">
              <h1 className="competition__event-header">2006 - Aim High</h1>
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/1Vuwjse90AA"
                frameborder="0"
                gesture="media"
                allow="encrypted-media"
                allowfullscreen />
              <div className="competition__event-container">
                <div className="competition__awards">
                  <h3 className="competition__event-subheader">Awards</h3>
                  <ul>
                    <li>NASA/VCU Regional: Quarterfinalist</li>
                    <li>Las Vegas Regional: Best Website Award</li>
                    <li>Las Vegas Regional: Quarterfinalist</li>
                  </ul>
                </div>
                <div className="competition__attended">
                  <h3 className="competition__event-subheader">Competitions Attended</h3>
                  <ul>
                    <li>NASA/VCU Regional </li>
                    <li>Palmetto Regional</li>
                    <li>FIRST World Championship, Curie Division</li>
                  </ul>
                </div>
              </div>
            </div>
          </Tab>
        </Tabs>
      </div >
    </Container >
  );
};

Competition.propTypes = {

};

export default Competition;
