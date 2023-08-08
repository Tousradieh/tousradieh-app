import React, { useEffect, useState } from "react";
import Map from "../components/Map";

export default function Location() {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          console.log("Error: ", error);
        },
        { enableHighAccuracy: true }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }, []);

  return (
    <div>
      {/* <Map /> */}

      {location ? (
        <p>
          Your current location is:
          <br />
          Latitude: {location.latitude}
          <br />
          Longitude: {location.longitude}
        </p>
      ) : (
        <p>Fetching your location...</p>
      )}
    </div>
  );
}
