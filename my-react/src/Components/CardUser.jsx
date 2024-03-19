// EventCard.jsx

import React from 'react';

const EventCard = ({ eventName, charges, eventDetails }) => {
  return (
    <div className="user_event-card">
      <img src="https://media.istockphoto.com/id/1482130377/photo/2023-calendar-event-planner-timetable-agenda-plan-on-organize-schedule-event-planner-agenda.webp?b=1&s=170667a&w=0&k=20&c=QfbIfgtGzUOkkFr-nhGKuVDTlbbsiO84kA_LBT16HhA=" alt="Event" />
      <h3>{eventName}</h3>
      <p>Charges: {charges}</p>
      <p>{eventDetails}</p>
    </div>
  );
};

export default EventCard;
