// src/components/Header.js
import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <h1>Desa Wisata Trosari</h1>
        <nav>
          <ul>
            <li><a href="#map-section">Peta Wisata</a></li>
            <li><a href="#attractions-section">Daya Tarik</a></li>
            <li><a href="#about-us">Tentang Kami</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;