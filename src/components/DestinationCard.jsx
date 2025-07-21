import React from 'react';
import { FaStar, FaMapMarkerAlt } from 'react-icons/fa';

export default function DestinationCard({ destination }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
      <div className="relative h-48">
        <img 
          src={destination.image} 
          alt={destination.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
          <h3 className="text-white font-bold text-xl">{destination.name}</h3>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex items-center mb-2">
          <div className="flex items-center text-yellow-400 mr-3">
            <FaStar className="mr-1" />
            <span>4.8</span>
          </div>
          <div className="flex items-center text-gray-500 text-sm">
            <FaMapMarkerAlt className="mr-1" />
            <span>{destination.distance}</span>
          </div>
        </div>
        
        <p className="text-gray-600 mb-3">{destination.description.substring(0, 100)}...</p>
        
        <div className="flex flex-wrap gap-2 mb-3">
          {destination.facilities.slice(0, 3).map((facility, index) => (
            <span key={index} className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
              {facility}
            </span>
          ))}
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {destination.activities.slice(0, 3).map((activity, index) => (
            <span key={index} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
              {activity}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}