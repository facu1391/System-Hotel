import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RoomList from './components/RoomList/RoomList';
import ReservationForm from './components/ReservationForm/ReservationForm';
import ReservationList from './components/ReservationList/ReservationList';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';


function App() {
  return (
    <Router>
      <div>
        <div className="navbar">
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/habitaciones" element={<RoomList />} />
          <Route path="/nueva-reserva" element={<ReservationForm />} />
          <Route path="/reservas" element={<ReservationList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;