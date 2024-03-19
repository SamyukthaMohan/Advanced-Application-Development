import React, { useState } from 'react';
import './ViewBooking.css'; // Import CSS file for styling

// Sample event data
const events = [
  { id: 1, eventType: 'Workshop', description: 'Lorem ipsum dolor sit amet', totalPackage: 200, participantsCount: 50, charges: 100 },
  { id: 2, eventType: 'Seminar', description: 'Consectetur adipiscing elit', totalPackage: 150, participantsCount: 30, charges: 50 },
  { id: 3, eventType: 'Conference', description: 'Sed do eiusmod tempor incididunt', totalPackage: 300, participantsCount: 100, charges: 200 },
  { id: 4, eventType: 'Training', description: 'Ut labore et dolore magna aliqua', totalPackage: 250, participantsCount: 70, charges: 150 },
];

function EventList() {
  const [eventList, setEventList] = useState(events);

  const handleEdit = (id) => {
    // Handle edit action, for example, navigate to edit page
    console.log('Edit event with ID:', id);
  };

  const handleDelete = (id) => {
    // Handle delete action, update event list
    const updatedEventList = eventList.filter(event => event.id !== id);
    setEventList(updatedEventList);
  };

  return (
    <div className="vb_event-list">
      <div className="vb_event-header">
        <div>Event ID</div>
        <div>Event Type</div>
        <div>Description</div>
        <div>Total Packages</div>
        <div>Participants Count</div>
        <div>Charges</div>
        <div>Actions</div>
      </div>
      {eventList.map(event => (
        <div key={event.id} className="vb_event-item">
          <div>{event.id}</div>
          <div>{event.eventType}</div>
          <div>{event.description}</div>
          <div>{event.totalPackage}</div>
          <div>{event.participantsCount}</div>
          <div>{event.charges}</div>
          <div>
            <button onClick={() => handleEdit(event.id)}>Edit</button>
            <button onClick={() => handleDelete(event.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default EventList;
