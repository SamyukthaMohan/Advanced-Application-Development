import React from 'react';
import UserNav from "../Components/UserNav";
import './UserDash.css'; // Importing CSS file for styling

const UserDash = () => {
  return (
    <div>
    <UserNav/>
    <div className="dashboard">
      <div className="grid-box event1">
      <img className='event1_img' src='https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=600'/>Event 1</div>
      <div className="grid-box event2">Event 2</div>
      <div className="grid-box event3">Event 3</div>
      <div className="grid-box event4">Event 4</div>
      <div className="grid-box event4">Event 4</div>
      <div className="grid-box event4">Event 4</div>
      <div className="grid-box event4">Event 4</div>
      <div className="grid-box event4">Event 4</div>
      <div className="grid-box event4">Event 4</div>
      <div className="grid-box event4">Event 4</div>
      <div className="grid-box event4">Event 4</div>
      {/* Add more grid boxes for additional events */}
    </div>
    </div>
  );
};

export default UserDash;
