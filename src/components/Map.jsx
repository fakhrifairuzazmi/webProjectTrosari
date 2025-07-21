import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { FaMapMarkerAlt, FaStar } from 'react-icons/fa';

const customIcon = L.divIcon({
  html: `<div style="color:#E53E3E;font-size:2rem;"><FaMapMarkerAlt /></div>`,
  className: 'bg-transparent border-none',
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

export default function Map({ destinations }) {
  return (
    <div className="h-[500px] w-full rounded-2xl overflow-hidden shadow-xl relative">
      <MapContainer 
        center={[-7.504, 110.2]} 
        zoom={9} 
        style={{ height: '100%', width: '100%' }}
        className="z-0"
      >
        <TileLayer
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        
        {destinations.map(dest => (
          <Marker 
            key={dest.id} 
            position={dest.position}
            icon={customIcon}
          >
            <Popup className="custom-popup">
              <div className="p-2">
                <h3 className="font-bold text-lg">{dest.name}</h3>
                <p className="text-gray-600 text-sm">{dest.description.substring(0, 100)}...</p>
                <button className="mt-2 px-3 py-1 bg-green-500 text-white rounded-lg text-sm">
                  Lihat Detail
                </button>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      
      <div className="absolute bottom-4 right-4 z-[1000] bg-white p-2 rounded-lg shadow-md">
        <p className="text-xs text-gray-500">Geser dan zoom untuk eksplorasi</p>
      </div>
    </div>
  );
}