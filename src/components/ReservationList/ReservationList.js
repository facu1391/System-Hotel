import React, { useState, useEffect } from 'react';
import './ReservationList.css';

function ReservationList() {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    // Simulando una llamada a la base de datos o API
    setReservations([
      { id: 1, room: 'Habitación Estándar', date: '2023-11-01', guest: 'John Doe' },
      { id: 2, room: 'Suite de Lujo', date: '2023-11-05', guest: 'Jane Doe' },
      { id: 3, room: 'Habitación Familiar', date: '2023-11-10', guest: 'Bob Johnson' },
    ]);
  }, []);

  return (
    <div className="container">
      <h1 className="heading">Reservas Existentes</h1>
      <ul>
        {reservations.map((reservation) => (
          <li key={reservation.id} className="listItem">
            {reservation.room} - {reservation.date} - {reservation.guest}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ReservationList;