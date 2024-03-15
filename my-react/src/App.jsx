import './App.css'
import Login from './Project/Login'
import Signup from './Project/Signup'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  

  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
