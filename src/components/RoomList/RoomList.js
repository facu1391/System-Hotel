import React, { useState, useEffect } from 'react';

function RoomList() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    
  }, []);

  return (
    <div>
      <h1>Habitaciones Disponibles</h1>
      <ul>
        {rooms.map((room) => (
          <li key={room.id}>{room.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default RoomList;