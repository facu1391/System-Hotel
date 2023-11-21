import React from 'react';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import RoomList from './components/RoomList/RoomList';
import ReservationForm from './components/ReservationForm/ReservationForm';
import ReservationList from './components/ReservationList/ReservationList';
import Home from './components/Home/Home';
import './Navbar.css';

function App() {
  return (
    <Router>
      <div>
        <div className="navbar">
          <Link to="/">Inicio</Link>
          <Link to="/habitaciones">Habitaciones</Link>
          <Link to="/nueva-reserva">Nueva Reserva</Link>
          <Link to="/reservas">Reservas</Link>
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