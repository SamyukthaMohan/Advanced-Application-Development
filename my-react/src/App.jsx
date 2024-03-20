

import './App.css'
import Landing from './Project/Landing';
import Login from '../src/Project/Login';
import Signup from '../src/Project/Signup';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminLogin from './Admin/AdminLogin';
import AdminPage from './Admin/AdminPage';
import AddEvent from './Project/AddEvent';
import ViewBooking from './Admin/ViewBooking';
import EditEvent from './Admin/EditEvent';
import ListEvent from './Admin/ListEvent';
import EventsAvailable from './Project/EventsAvailable';
import BookingStatus from './Project/BookingStatus';
import PaymentHist from './Project/PaymentHist';
import UserDash from './Project/UserDash';

function App() {
  

  return (
    <div>
    <ListEvent/>
    </div>
    
    )
  }

export default App

  //   <BrowserRouter>
  //   <Routes>
  //     <Route exact path='/' element={<Landing/>}/>
  //     <Route  path="/login" element={<Login/>} />
  //     <Route path="/signup" element={<Signup/>} />
  //     <Route path="/adminlogin" element={<AdminLogin/>} />
  //     <Route path="/admindash" element={<AdminPage/>} />
  //     <Route path="/addevent" element={<AddEvent/>} />
  //     <Route path="/editevent" element={<EditEvent/>} />
  //     <Route path="/view" element={<ViewBooking/>} />
  //     <Route path="/list" element={<ListEvent/>} />
  //     <Route path="/allevents" element={<EventsAvailable/>} />
  //     <Route path="/mypayments" element={<PaymentHist/>} />
  //     <Route path="/mybookings" element={<BookingStatus/>} />
  //     <Route path="/dashboard" element={<UserDash/>} />
  //   </Routes>
  // </BrowserRouter>