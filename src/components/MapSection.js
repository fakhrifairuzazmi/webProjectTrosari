// src/components/MapSection.js
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import './MapSection.css';

// Fix default icon issues with Webpack
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

function MapSection({ attractions }) {
  const center = [-8.138693228575015, 110.66151408628707]; // Contoh koordinat tengah desa

  return (
    <section id="map-section" className="map-section">
      <div className="container">
        <h2>Jelajahi Peta Wisata</h2>
        <MapContainer center={center} zoom={18} scrollWheelZoom={false} className="leaflet-container">
  <TileLayer
    attribution=''
    url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
    maxZoom={19}
  />
  {attractions.map(attraction => (
    <Marker key={attraction.id} position={attraction.coordinates}>
      <Popup>
        <h3>{attraction.name}</h3>
        <p>{attraction.description}</p>
        <img 
          src={attraction.image} 
          alt={attraction.name} 
          style={{ 
            width: '100px', 
            height: 'auto', 
            borderRadius: '5px', 
            marginTop: '10px' 
          }} 
        />
      </Popup>
    </Marker>
  ))}
</MapContainer>
      </div>
    </section>
  );
}

export default MapSection;