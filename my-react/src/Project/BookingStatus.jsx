import React, { useState, useEffect } from 'react';
import './BookingStatus.css';
import UserNav from '../Components/UserNav';

const mockBookingData = [
  { id: 1, eventName: 'Music Concert', organizer: 'John Doe', date: '2024-03-20', status: 'verified' },
  { id: 2, eventName: 'Food Festival', organizer: 'Jane Smith', date: '2024-03-25', status: 'pending' },
  { id: 3, eventName: 'Art Exhibition', organizer: 'Alice Johnson', date: '2024-03-30', status: 'verified' },
  // Add more booking data as needed
];

const BookingStatus = () => {
  const [bookingStatus, setBookingStatus] = useState([]);

  useEffect(() => {
    // Simulate fetching booking data from an API
    // Replace this with actual API call
    setBookingStatus(mockBookingData);
  }, []);

  const handlePay = (bookingId) => {
    // Implement payment functionality here
    console.log(`Payment initiated for Booking ID: ${bookingId}`);
  };

  return (
    <div>
    <UserNav />
    <div className="booking-status-container">
      <h2 className="booking-status-heading">Booking Status</h2>
      <div className="booking-status-table-container">
        <table className="booking-status-table">
          <thead>
            <tr>
              <th>Booking ID</th>
              <th>Event Name</th>
              <th>Organizer</th>
              <th>Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {bookingStatus.map(booking => (
              <tr key={booking.id} className={"booking-status-${booking.status.toLowerCase()}"}>
                <td>{booking.id}</td>
                <td>{booking.eventName}</td>
                <td>{booking.organizer}</td>
                <td>{booking.date}</td>
                <td>{booking.status}</td>
                <td>
                  {booking.status === 'verified' && (
                    <button onClick={() => handlePay(booking.id)} className="pay-btn">Pay</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
};

export default BookingStatus;