import React, { useState } from 'react';
import './EventsAvailable.css';

import Navbar from '../Components/UserNav';

const eventsData = [
  { id: 1, name: 'Music Concert', type: '', date: '', location: 'Chennai' },
  { id: 2, name: 'Food Festival', type: '', date: '', location: '' },
  { id: 3, name: 'Art Exhibition', type: '', date: '', location: '' },
  { id: 4, name: 'Art Exhibition', type: '', date: '', location: '' },
  { id: 5, name: 'Art Exhibition', type: '', date: '', location: '' },
  // Add more event data as needed
];

const EventsAvailable = () => {
  const [filter, setFilter] = useState('');
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [formData, setFormData] = useState({
    userName: '',
    submissionDate: '',
    eventDate: '',
    headCount: '',
    amount: ''
  });

  const handleFilterChange = (event) => {
    const value = event.target.value.toLowerCase();
    setFilter(value);
  };

  const filteredEvents = eventsData.filter((event) =>
    event.name.toLowerCase().includes(filter)
  );

  const handleEventClick = (event) => {
    setSelectedEvent(event);
    setShowBookingForm(true);
  };

  const handleCloseModal = () => {
    setSelectedEvent(null);
    setShowBookingForm(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <div>
      <Navbar />
      <div className="all-events-container">
        <h2>All Events</h2>
        <div className="filter-container">
          <label htmlFor="eventType" className='see_filter_word'>Filter by Event Name:</label>
          <input
            type="text"
            id="eventType"
            value={filter}
            onChange={handleFilterChange}
            placeholder="Enter event name"
          />
        </div>
        <div className="dino_events-list">
          {filteredEvents.map((event) => (
            <div key={event.id} className="dino_event-card" onClick={() => handleEventClick(event)}>
              <h3>{event.name}</h3>
              <p>{event.type}</p>
              <p>{event.date}</p>
              <p> {event.location}</p>
            </div>
          ))}
        </div>
        {selectedEvent && showBookingForm && (
          <div className="event-modal">
            <div className="modal-content">
              <span className="close" onClick={handleCloseModal}>&times;</span>
              <h2>{selectedEvent.name}</h2>
              <div className="booking-form-container">
                <h2>Event Booking Form</h2>
                <span className="close-button" onClick={handleCloseModal}>&times;</span>
                <form onSubmit={handleSubmit} className="booking-form">
                  <div className="form-group">
                    <label htmlFor="userName">User Name:</label>
                    <input
                      type="text"
                      id="userName"
                      name="userName"
                      value={formData.userName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="submissionDate">Submission Date:</label>
                    <input
                      type="date"
                      id="submissionDate"
                      name="submissionDate"
                      value={formData.submissionDate}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="eventDate">Event Date:</label>
                    <input
                      type="date"
                      id="eventDate"
                      name="eventDate"
                      value={formData.eventDate}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="headCount">Head Count:</label>
                    <input
                      type="number"
                      id="headCount"
                      name="headCount"
                      value={formData.headCount}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="amount">Amount:</label>
                    <input
                      type="number"
                      id="amount"
                      name="amount"
                      value={formData.amount}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <button type="submit" className="submit-btn">Book Event</button>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventsAvailable