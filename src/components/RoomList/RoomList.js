import React, { useState, useEffect } from 'react';
import './RoomList.css';

function RoomList() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    // Simulando una llamada a la base de datos o API
    setRooms([
      { id: 1, name: 'Habitación Estándar' },
      { id: 2, name: 'Suite de Lujo' },
      { id: 3, name: 'Habitación Familiar' },
    ]);
  }, []);

  return (
    <div className="container">
      <h1 className="heading">Habitaciones Disponibles</h1>
      <ul>
        {rooms.map((room) => (
          <li key={room.id} className="listItem">
            {room.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RoomList;