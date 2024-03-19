import React from 'react'
import NavBar from '../Components/NavBar'
import './Landing.css'
import Images from '../Images/logo.png'
import EventCard from '../Components/EventCard'
import { Link } from 'react-router-dom'

function Landing() {
  return (
    <div>
    <NavBar/>
    <div className='background'></div>
    
    <div className="home-page">
    <div className="content">
      <h1>Built for the events<br/> of today—and tomorrow</h1>
      <p >Everything you need to craft impactful <br/>event experiences all while staying technologically relevant, now and always.

      </p>
      <video  playsinline width="161" height="400"  autoPlay  loop controls className='video'>
  <source src="//www.zohowebstatic.com/sites/zweb/images/backstage/home/banner-intro.webm" type="video/webm"/>

</video>
    </div>
    <div>
    <h1 className='head1'>CORPORATE <br></br>EVENT<br/> ORGANISERS</h1>
    <p className='head1_para'>BIZGather is the Best Event Management Company specialized<br/> 
    in Organising Corporate Events, Conference Events, Entertainment<br/> 
    Events like Music and Dance Shows, Fashion Shows, Live Medical Video<br/>
     Conferences. We are constantly developing new ideas and concepts.<br/>
     We are the Best Event Management Company ,Our mission<br/>
      is to produce a unique and memorable occasion for you and your guests.</p>
      
    </div>
    <div className='services'><h1 className='head2'>OUR SERVICES</h1>
    <div className="home_container">
      <img  src="https://plus.unsplash.com/premium_photo-1661764509528-5fdf0621db16?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1lZXRpbmd8ZW58MHx8MHx8fDA%3D" alt="Avatar" className="image" style={{ width: '100%' }} />
      <div className="middle">
        <div className="text"><h4>PRODUCT LAUNCH </h4><br/>Transforming visions into realities, our product launches redefine innovation<br/> and captivate audiences worldwide</div>
      </div>
      <img className='image1' src='https://images.unsplash.com/photo-1523521803700-b3bcaeab0150?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGV2ZW50JTIwcGxhbm5pbmd8ZW58MHx8MHx8fDA%3D'></img>
    </div>
    <img src={Images} className='image_logo'></img>
    </div>
    <div><h1 className='head3'>HOW WE WORK..</h1>
    <h6 className='head3_para'>We pride ourselves on offering a personalised service, with one<br/> dedicated account team. this tailored approach, along with our<br/>
     flexibility in services, has allowed us to build strong client relationships, keeping <br/>
     our clients coming back to us time and time again. we offer extensive choices to <br/>
     our clients with vast knowledge of venues and suppliers in Chennai.</h6>
    </div>
    <div className='land_card1'><img className='card1_img' src='https://images.unsplash.com/photo-1561489396-888724a1543d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29uZmVyZW5jZXxlbnwwfHwwfHx8MA%3D%3D'></img>
    <h4 className='card1_h4'>In-person events</h4>
    <h6>Keep it all together at the venue</h6></div>
    <div className='land_card2'> <img className='card2_img' src='https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></img></div>
    <div className='land_card3'><img  className='card3_img' src='https://plus.unsplash.com/premium_photo-1661690088942-d968065868d0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29ya3Nob3B8ZW58MHx8MHx8fDA%3D'></img> </div>
    </div>
    <div className='land_end'>
    <h1 className='head4'>END-TO-END <br/>Events Planning</h1>
    <p className='head4_para'>BIZGather is the Best Event Management company.<br/> We offer professional Planning 
    and Event Management<br/> services for Corporate Events,
     Conference Events,<br/> Product Launch Events, Fashion and Entertainment Events.<br/> 
     You can be very confident in the creative<br/> design and expertise of <br/>our event planners to 
     carefully plan your<br/> events and turning into a grand Successful Event</p>
    <img className='land_end_image' src='https://images.unsplash.com/photo-1597310026633-31f90e388964?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8RXhwZXJpZW50aWFsJTIwZXZlbnRzfGVufDB8fDB8fHww'></img>

    </div>
    <footer>
        <div className="home_footer-content">
          <div className="home_footer-section1">
            <h3>About Us</h3>
            <p className='p'>Learn more about our company and mission.</p>
          </div>
          <div className="home_footer-section2">
            <h3 className='home_cont'>Contact Us</h3>
            <p className='home_email'>Email: info@jobportal.com</p>
            <p className='home_ph'>Phone: +1234567890</p>
          </div>
          <div className="home_footer-para">
            <h3>Follow Us</h3>
            <p className='home_para'>Stay connected on social media:</p>
            <div className="home_social-icons">
              <a href="#">Facebook</a>
              <a href="#">Twitter</a>
              <a href="#">LinkedIn</a>
            </div>
          </div>
        </div>
        <p className="home_copyright">&copy; 2024 JobPortal. All rights reserved.</p>
      </footer>
    </div>
    
    
    
    )
}

export default Landing 

    // <img className='main_img' src='https://images.unsplash.com/photo-1578574577315-3fbeb0cecdc2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNvcnBvcmF0ZSUyMGV2ZW50JTIwbWFuYWdlbWVudHxlbnwwfHwwfHx8MA%3D%3D' height={500} width={1100}/>
    