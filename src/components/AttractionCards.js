// src/components/AttractionCards.js
import React from 'react';
import './AttractionCards.css';

// Komponen baru untuk satu kartu daya tarik
function AttractionCard({ attraction, openModal }) {
  return (
    <div className="attraction-card" onClick={() => openModal(attraction)}>
      <img src={attraction.image} alt={attraction.name} className="card-image" />
      <div className="card-content">
        <h3>{attraction.name}</h3>
        <p>{attraction.description}</p>
        <button className="read-more-button">Baca Selengkapnya</button> {/* Tombol opsional */}
      </div>
    </div>
  );
}

function AttractionCards({ attractions, openModal }) { // Menerima openModal sebagai prop
  return (
    <section id="attractions-section" className="attraction-cards-section">
      <div className="container">
        <h2>Daya Tarik Utama</h2>
        <div className="cards-grid">
          {attractions.map(attraction => (
            <AttractionCard
              key={attraction.id}
              attraction={attraction}
              openModal={openModal} // Meneruskan openModal ke AttractionCard
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default AttractionCards;