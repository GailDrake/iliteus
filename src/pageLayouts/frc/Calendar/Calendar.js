import React from 'react';
<<<<<<< HEAD:src/pageLayouts/frc/About/Calendar/Calendar.js
import Container from '../../../../templates/Container';
=======
import Container from '../../../templates/container';
>>>>>>> master:src/pageLayouts/frc/Calendar/Calendar.js
// import classnames from 'classnames';

const Calendar = () => {
  return (
    <Container title="Calendar" subtitle="The full ILITE Schedule" division="frc">
      <div class="calendar">
        <iframe src="https://calendar.google.com/calendar/embed?src=uc0joshu05recakql2ff8o6r5o%40group.calendar.google.com&ctz=America%2FNew_York" width="100%" height="600" frameborder="0" scrolling="no"></iframe>
      </div>
    </Container>
  );
}

Calendar.propTypes = {

};

export default Calendar;
