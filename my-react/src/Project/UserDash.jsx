import React from 'react';
import './UserDash.css';
import UserNav from '../Components/UserNav';
// import SideBar from '../Components/Sidebar'
import AdminSideBar from '../Components/AdminSideBar';
import CardUser from '../Components/CardUser';

function UserDash() {
  return (
    <div>
    <UserNav />
    <div className="dino_dashboard">
    
    <div className="user-dashboard">
      <div className="banner">
        <img className='dash_img' src="https://plus.unsplash.com/premium_photo-1682126157704-beacbab4906f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGV2ZW50JTIwcGxhbm5pbmd8ZW58MHx8MHx8fDA%3D" width={"200px"} alt="Banner" />
      </div>
      <div className="user_event-grid">
        <CardUser eventName="Event 1" charges="$10" eventDetails="Details about Event 1" />
        <CardUser eventName="Event 2" charges="$15" eventDetails="Details about Event 2" />
        <CardUser eventName="Event 3" charges="$20" eventDetails="Details about Event 3" />
        <CardUser eventName="Event 4" charges="$20" eventDetails="Details about Event 4" />
        <CardUser eventName="Event 5" charges="$20" eventDetails="Details about Event 5" />
        <CardUser eventName="Event 6" charges="$20" eventDetails="Details about Event 6" />
        {/* Add more EventCard components as needed */}
      </div>
    </div>
    </div>
    </div>
    );
  }
  
  export default UserDash;
//   <div className="dino_main-content">
//     <div className="dino_header">
//       <h1>Event Management Dashboard</h1>
//     </div>
//     <div className="dino_statistics">
//       <h2>Statistics</h2>
//       <p>Total Events: 10</p>
//       <p>Total Attendees: 100</p>
//       <p>Total Revenue: $10000</p>
//       {/* Add more statistics as needed */}
//     </div>
//     <div className="dino_upcoming-events">
//       <h2>Upcoming Events</h2>
//       <ul>
//         <li>Event 1 - Date</li>
//         <li>Event 2 - Date</li>
//         {/* Add more upcoming events as needed */}
//       </ul>
//     </div>

//     <div className="dino_tasks">
//       <h2>Tasks</h2>
//       <ul>
//         <li>Task 1</li>
//         <li>Task 2</li>
//         {/* Add more tasks as needed */}
//       </ul>
//     </div>
//     {/* Add more sections as needed */}
//   </div>
// </div>