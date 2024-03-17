import './App.css'
import Landing from './Project/Landing';
import Login from './Project/Login'
import Signup from './Project/Signup'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  

  return (
    <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Landing/>}/>
      <Route  path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
