import React, { useState, useEffect } from 'react';

function ReservationList() {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    
  }, []);

  return (
    <div>
      <h1>Reservas Existentes</h1>
      <ul>
        {reservations.map((reservation) => (
          <li key={reservation.id}>
            {reservation.room} - {reservation.date} - {reservation.guest}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ReservationList;