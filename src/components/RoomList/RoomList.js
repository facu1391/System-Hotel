import React, { useState, useEffect } from 'react';
import './RoomList.css';

function RoomList() {
  const [rooms, setRooms] = useState([]);
  const [sortBy, setSortBy] = useState('name');

  useEffect(() => {
    // Simulando una llamada a la base de datos o API
    const initialRooms = [
      { id: 1, name: 'Habitación Estándar', image: 'standard-room.jpg', description: 'Una habitación cómoda con todas las comodidades esenciales.' },
      { id: 2, name: 'Suite de Lujo', image: 'luxury-suite.jpg', description: 'Una experiencia de alojamiento de lujo con vistas impresionantes.' },
      { id: 3, name: 'Habitación Familiar', image: 'family-room.jpg', description: 'Ideal para familias con amplio espacio y comodidades para todos.' },
    ];

    // Aplicar ordenación
    const sortedRooms = [...initialRooms].sort((a, b) => a[sortBy].localeCompare(b[sortBy]));

    setRooms(sortedRooms);
  }, [sortBy]);

  return (
    <div className="container">
      <h1 className="heading">Habitaciones Disponibles</h1>
      <label>
        Ordenar por:
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="name">Nombre</option>
          <option value="name">Precio</option>
          {/* Agrega opciones adicionales para ordenar según otros criterios */}
        </select>
      </label>
      <div className="room-list">
        {rooms.map((room) => (
          <div key={room.id} className="room-item">
            <img src={room.image} alt={room.name} className="room-image" />
            <h2 className="room-name">{room.name}</h2>
            <p className="room-description">{room.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RoomList;