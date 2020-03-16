import React from 'react';
import GetDocumentation from "../../pageLayouts/ilite/history/GetDocumentation"

const createAwards = (awards) => {
    console.log(awards);
    if (awards) {
        return awards.map(award => <li>{award.name}</li>)
    }
    else {
        return;
    }
}

const createCompetitions = (competitions) => {
    if (competitions) {
        return competitions.map(comp => <li>{comp.name}</li>)
    }
    else {
        return;
    }
}

const createImgTag = (image, year) => {
    if (image) {
        return (
            <img
                src={require(`../../assets/${image}`)}
                alt={year + " Banner"}
                className="history__image"
            />
        );
    }
    else {
        return;
    }
}

const HistoryTab = ({ image, heading, video, year, tabNumber, competitions, awards }) => {
    return (
        <div className="history-tab">
            <div className="history__event" id={"tab" + tabNumber}>
                <h1 className="history__event-header">
                    {heading}
                </h1>
                <div className="history__embed">
                    <iframe
                        title="Video"
                        width="100%"
                        height="315"
                        src={video}
                        frameborder="0"
                        gesture="media"
                        allow="encrypted-media"
                        allowfullscreen
                    />
                </div>
                <div className="history__event-container">
                    <div className="history__awards">
                        <h3 className="history__event-subheader">Awards</h3>
                        <ul>
                            {
                                createAwards(awards)
                            }
                            {/* <li>CHS District Championship: Chairman's Award</li>
                <li>CHS District Oxon Hill Event: Imagery Award</li>
                <li>CHS District Bethesda Event: Chairman's Award</li>
                <li>CHS District Bethesda Event: Event Winner</li> */}
                        </ul>
                    </div>
                    <div className="history__attended">
                        <h3 className="history__event-subheader">
                            Competitions Attended
                    </h3>
                        <ul>
                            {createCompetitions(competitions)}
                            {/* <li>FIRST Chesapeake District Championship</li>
                <li>FIRST Chesapeake District Oxon Hill MD Event</li>
                <li>FIRST Chesapeake District Bethesda MD Event</li> */}
                        </ul>
                    </div>
                </div>
            </div>

            {createImgTag(image, year)}

            {GetDocumentation(parseInt(year))}
        </div>
    )
}
export default HistoryTab;