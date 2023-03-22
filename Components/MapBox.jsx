import React from 'react'
import { useState, useEffect } from "react";
import mapboxgl from "mapbox-gl";


mapboxgl.accessToken = "YOUR_ACCESS_TOKEN_HERE";

const Map = () => {
  const [map, setMap] = useState(null);

  useEffect(() => {
    const initializeMap = ({ setMap, mapContainer }) => {
      const map = new mapboxgl.Map({
        container: mapContainer,
        style: "mapbox://styles/mapbox/streets-v11",
        center: [-122.4194, 37.7749],
        zoom: 12,
      });

      map.on("load", () => {
        setMap(map);
        map.resize();
      });
    };

    if (!map) initializeMap({ setMap, mapContainer: mapContainerRef.current });
  }, [map]);
}

  const mapContainerRef = useRef(null);

const mapBox = () => {
  return (
     <div className="h-screen">
      <div
        className="h-full w-full"
        ref={(el) => (mapContainerRef.current = el)}
      />
    </div>
  )
}

export default Mapbox;