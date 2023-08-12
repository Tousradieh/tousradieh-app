import React, { useEffect, useState } from "react";
import Map from "./NeshanMap";

const GPSLocationTracker = () => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      const options = {
        enableHighAccuracy: true,
        maximumAge: 0,
        timeout: 5000,
      };

      const watchId = navigator.geolocation.watchPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
          setError(null);
        },
        (err) => {
          setError(err.message);
        },
        options
      );

      return () => {
        navigator.geolocation.clearWatch(watchId);
      };
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  }, []);

  return (
    <div>
      <h1>GPS Location Tracker</h1>
      {error ? (
        <p>{error}</p>
      ) : (
        <>
          <p>
            Latitude: {latitude}, Longitude: {longitude}
          </p>
          <Map lat={latitude} lon={longitude} />
        </>
      )}
    </div>
  );
};

export default GPSLocationTracker;
