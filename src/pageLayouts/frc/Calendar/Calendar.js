import React from 'react';
import Container from '../../../templates/container';

const Calendar = () => {
  return (
    <Container title="Calendar" subtitle="A calendar of ILITE events and meetings">
      <div className="calendar">
        <iframe src="https://calendar.google.com/calendar/embed?src=kdfokjk6lboe7p2f3or7nn4ea4%40group.calendar.google.com&ctz=America%2FNew_York" frameborder="0" className="calendar__embed" />
      </div>
    </Container>
  );
};

export default Calendar;