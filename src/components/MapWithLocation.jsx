'use client'; // Penting untuk Next.js 13+

import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Circle, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix marker icons
const DefaultIcon = L.icon({
  iconUrl: '/images/marker-icon.png',
  iconRetinaUrl: '/images/marker-icon-2x.png',
  shadowUrl: '/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

L.Marker.prototype.options.icon = DefaultIcon;

const UserLocationIcon = new L.Icon({
  iconUrl: '/images/marker-icon-blue.png',
  iconRetinaUrl: '/images/marker-icon-blue-2x.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

function LocationMarker() {
  const [position, setPosition] = useState(null);
  const [accuracy, setAccuracy] = useState(null);
  const [error, setError] = useState(null);
  const map = useMap();

  useEffect(() => {
    if (!navigator.geolocation) {
      setError('Browser tidak mendukung geolokasi');
      return;
    }

    const options = {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 0
    };

    const watchId = navigator.geolocation.watchPosition(
      (pos) => {
        const { latitude, longitude, accuracy } = pos.coords;
        const newPos = L.latLng(latitude, longitude);
        setPosition(newPos);
        setAccuracy(accuracy);
        map.flyTo(newPos, 17);
      },
      (err) => {
        setError(`Error: ${err.message}`);
      },
      options
    );

    return () => navigator.geolocation.clearWatch(watchId);
  }, [map]);

  if (error) return <div className="map-error">{error}</div>;
  if (!position) return <div className="map-loading">Mendeteksi lokasi...</div>;

  return (
    <>
      <Circle
        center={position}
        radius={accuracy}
        color="blue"
        fillOpacity={0.2}
      />
      <Marker position={position} icon={UserLocationIcon}>
        <Popup>
          <b>Lokasi Anda</b> <br />
          Akurasi: ~{Math.round(accuracy)} meter
        </Popup>
      </Marker>
    </>
  );
}

export default function MapWithLocation() {
  const [mapReady, setMapReady] = useState(false);

  useEffect(() => {
    setMapReady(true);
  }, []);

  if (!mapReady) return <div className="map-loading">Memuat peta...</div>;

  return (
    <div className="map-container">
      <MapContainer
        center={[-7.505, 110.205]}
        zoom={15}
        style={{ height: '500px', width: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        />
        <LocationMarker />
      </MapContainer>
    </div>
  );
}