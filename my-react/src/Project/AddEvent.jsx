import React, { useState } from 'react';
import './AddEvent.css'; // Import CSS file for styling
import { Link } from 'react-router-dom';

function AddEvent() {
  const [eventType, setEventType] = useState('');
  const [description, setDescription] = useState('');
  const [totalPackage, setTotalPackage] = useState('');
  const [participantsCount, setParticipantsCount] = useState('');
  const [charges, setCharges] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const eventDetails = {
      eventType,
      description,
      totalPackage,
      participantsCount,
      charges
    };
    console.log(eventDetails);
    // Additional logic for handling the event data
    // For example, you can send it to a server or store it locally
  };

  return (
    <form onSubmit={handleSubmit} className="event-form">
      <label htmlFor="eventType">Event Type:</label>
      <input type="text" id="eventType" value={eventType} onChange={(e) => setEventType(e.target.value)} required />

      <label htmlFor="description">Description:</label>
      <input type="text" id="description" value={description} onChange={(e) => setDescription(e.target.value)} required />

      <label htmlFor="totalPackage">Total Package:</label>
      <input type="number" id="totalPackage" value={totalPackage} onChange={(e) => setTotalPackage(e.target.value)} required />

      <label htmlFor="participantsCount">Participants Count:</label>
      <input type="number" id="participantsCount" value={participantsCount} onChange={(e) => setParticipantsCount(e.target.value)} required />

      <label htmlFor="charges">Charges:</label>
      <input type="number" id="charges" value={charges} onChange={(e) => setCharges(e.target.value)} required />

      <Link to="/admindash"><button type="submit">Add Event</button></Link>
    </form>
  );
}

export default AddEvent;
