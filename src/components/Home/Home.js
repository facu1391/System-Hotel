import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="container">
      <img
        className="hotel-image"
        src="../../../assets/HOTEL.jpg"
        alt="Hotel Cama Sutra"
      />
      <h1 className="heading">Bienvenido al Hotel Cama Sutra</h1>
      <p className="paragraph">¡Su destino para unas vacaciones inolvidables!</p>
      <Link to="/habitaciones" className="cta-button">
        Ver Habitaciones
      </Link>

      <div className="info-section">
        <h2 className="info-heading">Nuestros Servicios</h2>
        <p className="info-paragraph">
          Ofrecemos comodidades de primera clase, desde piscinas hasta servicios de spa.
        </p>
      </div>
    </div>
  );
}

export default Home;