import React from 'react'
import AdminBar from '../Components/AdminBar'
import EventCard from '../Components/EventCard'
import './AdminPage.css'
import Images from '../Images/logo.png'


function AdminPage() {
  return (
    <div>
    <AdminBar/>
    <div className="admind_content-wrapper">
       
        <div className="admind_main-content">
          <h2>Welcome to Our Event Management System!</h2>
          <p className='admind_para'>This is the home page of our application. You can navigate to different sections using the links in the sidebar.</p>
          <div className="event-list">
            <EventCard title="Music Festival" date="
            " image={'https://plus.unsplash.com/premium_photo-1681830630610-9f26c9729b75?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bXVzaWMlMjBmZXN0aXZhbHxlbnwwfHwwfHx8MA%3D%3D'} />
            <EventCard title="Tech Conference" date="" image={'https://images.unsplash.com/photo-1582192730841-2a682d7375f9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} />
            <EventCard title="Food Expo" date="" image={'https://media.istockphoto.com/id/891451722/photo/food-truck-burger.jpg?s=612x612&w=0&k=20&c=s_hRracLMLQ3EIR5tM8vjwoLyFoaN0PYkuyW6UkqCn0='} />
            <EventCard title="Product Launch" date="" image={'https://media.istockphoto.com/id/1414910820/photo/product-development-launching-analysis-and-market-validation-mvp-minimum-viable-product.webp?b=1&s=170667a&w=0&k=20&c=xBrIw3SxgcUWZUYwn4KI7B8cAvX6ePLEAdQIulzMSW0='} />  
            <EventCard title="Share-holder meeting" date="" image={'https://images.unsplash.com/photo-1552581234-26160f608093?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWVldGluZ3xlbnwwfHwwfHx8MA%3D%3D'} />  
            <EventCard title="Trade shows" date="" image={'https://images.unsplash.com/photo-1511829667472-8942b2c0b0b2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} />  
            <EventCard title="Awards" date="" image={'https://media.istockphoto.com/id/955087966/photo/winner-trophy-on-sky-background.webp?b=1&s=170667a&w=0&k=20&c=taEBaCM8Qx4X5HHseKY214XSLQVzFHziRjnnTQ52sDg='} />  
            <EventCard title="Incentive Programs" date="" image={'https://images.unsplash.com/photo-1648913133706-57b52812afde?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8SW5jZW50aXZlJTIwcHJvZ3JhbXN8ZW58MHx8MHx8fDA%3D'} />  
            <EventCard title="Experiential" date="" image={'https://images.unsplash.com/photo-1607892379516-5ff729bbc620?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8RXhwZXJpZW50aWFsJTIwZXZlbnRzfGVufDB8fDB8fHww'} /> 
            {/* Add more event cards here */}
            </div>
            </div>
            </div>
            
    
    </div>
  )
}

export default AdminPage
