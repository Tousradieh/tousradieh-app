import { useEffect, useRef, useState } from "react";
import "@neshan-maps-platform/react-openlayers/dist/style.css";

import NeshanMap from "@neshan-maps-platform/react-openlayers";

function Map() {
  const [current, setCurrent] = useState({
    latitude: 0,
    longitude: 0,
  });
  useEffect(() => {
    // Get the current position using the Geolocation API
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          const { latitude, longitude } = position.coords;
          setCurrent({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });

          // Set the map view to the current position
        },
        function (error) {
          console.error("Error getting location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);
  return (
    <>
      <NeshanMap
        mapKey="web.1fe2c1243ba64672a96352e22a0bedcd"
        center={current}
      ></NeshanMap>
    </>
  );
}

export default Map;
