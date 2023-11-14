import React, { useState } from 'react';

function ReservationForm() {
  const [formData, setFormData] = useState({ room: '', date: '', guest: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
   
  };

  return (
    <div>
      <h1>Nueva Reserva</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Habitación"
          value={formData.room}
          onChange={(e) => setFormData({ ...formData, room: e.target.value })}
        />
        <input
          type="date"
          placeholder="Fecha"
          value={formData.date}
          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
        />
        <input
          type="text"
          placeholder="Huésped"
          value={formData.guest}
          onChange={(e) => setFormData({ ...formData, guest: e.target.value })}
        />
        <button type="submit">Reservar</button>
      </form>
    </div>
  );
}

export default ReservationForm;