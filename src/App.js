import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Routes as RouterRoutes, Route as RouterRoute } from 'react-router-dom'; // Renombrar las importaciones
import RoomList from './components/RoomList/RoomList';
import ReservationForm from './components/ReservationForm/ReservationForm';
import ReservationList from './components/ReservationList/ReservationList';
import Home from './components/Home/Home'; // Asegúrate de importar el componente Home

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/habitaciones">Habitaciones</Link>
            </li>
            <li>
              <Link to="/nueva-reserva">Nueva Reserva</Link>
            </li>
            <li>
              <Link to="/reservas">Reservas</Link>
            </li>
          </ul>
        </nav>

        <RouterRoutes>
          <RouterRoute path="/" element={<Home />} />
          <RouterRoute path="/habitaciones" element={<RoomList />} />
          <RouterRoute path="/nueva-reserva" element={<ReservationForm />} />
          <RouterRoute path="/reservas" element={<ReservationList />} />
        </RouterRoutes>
      </div>
    </Router>
  );
}

export default App;