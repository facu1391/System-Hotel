import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">Inicio</Link>
      <Link to="/habitaciones">Habitaciones</Link>
      <Link to="/nueva-reserva">Nueva Reserva</Link>
      <Link to="/reservas">Reservas</Link>
    </div>
  );
}

export default Navbar;