import React from 'react';
import documentation from '../../../lib/documentation.json';

const GetDocumentation = (year) => {
  return (
    <table className="history__documentation">
      {/* <tr>
        <th colspan="3">{year}</th>
      </tr> */}
      <tr>
        <th>Event Name</th>
        <th>Minds Reached</th>
        <th>Resources</th>
      </tr>
      {getEvents(year)}
    </table>
  );
};

function getEvents(year) {
  return documentation.map(event => {
    if (event.year === year) {
      return (
        <tr>
          <td>{event.eventName}</td>
          <td>{event.mindsReached}</td>
          <td>
            {getLinks(event.Links)}
          </td>
        </tr>
      );
    }
    else {
      return null;
    }
  });
}

function getLinks(links) {
  return links.map(link => {
    return (
      <a href={link.linkURL} target="_blank" rel="noopener noreferrer" className="history__documentation__link">{link.linkName}</a>
    );
  });
}

export default GetDocumentation;