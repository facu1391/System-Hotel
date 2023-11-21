import React, { useState } from 'react';
import './ReservationForm.css';

function ReservationForm() {
  const [formData, setFormData] = useState({ room: '', date: '', guest: '' });
  const [formErrors, setFormErrors] = useState({});
  const [formSuccess, setFormSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación básica
    if (!formData.room || !formData.date || !formData.guest) {
      setFormErrors({ message: 'Todos los campos son obligatorios' });
      return;
    }

    

    setFormSuccess('¡Reserva exitosa!');
    setFormData({ room: '', date: '', guest: '' });
    setFormErrors({});
  };

  return (
    <div className="container">
      <h1 className="title">Nueva Reserva</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="room"
          placeholder="Habitación"
          value={formData.room}
          onChange={handleChange}
          className="input"
        />
        <input
          type="date"
          name="date"
          placeholder="Fecha"
          value={formData.date}
          onChange={handleChange}
          className="input"
        />
        <input
          type="text"
          name="guest"
          placeholder="Huésped"
          value={formData.guest}
          onChange={handleChange}
          className="input"
        />
        {formErrors.message && <p className="error">{formErrors.message}</p>}
        {formSuccess && <p className="success">{formSuccess}</p>}
        <button type="submit" className="button">
          Reservar
        </button>
      </form>
    </div>
  );
}

export default ReservationForm;