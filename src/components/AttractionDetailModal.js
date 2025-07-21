// src/components/AttractionDetailModal.js
import React from 'react';
import './AttractionDetailModal.css'; // File CSS untuk modal

function AttractionDetailModal({ attraction, onClose }) {
  if (!attraction) {
    return null; // Jangan render jika tidak ada daya tarik yang dipilih
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}> {/* Mencegah klik di dalam modal menutupnya */}
        <button className="modal-close-button" onClick={onClose}>&times;</button>
        <img src={attraction.image} alt={attraction.name} className="modal-image" />
        <div className="modal-text-content">
          <h2>{attraction.name}</h2>
          <p>{attraction.fullDescription || attraction.description}</p> {/* Gunakan fullDescription jika ada */}
        </div>
      </div>
    </div>
  );
}

export default AttractionDetailModal;