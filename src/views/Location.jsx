import React, { useEffect, useState } from "react";
import GPSLocationTracker from "../components/GPSTracker";

export default function Location() {
  const [location, setLocation] = useState(null);
  return (
    <div>
      <h1>Hello to my application</h1>
      <GPSLocationTracker />
    </div>
  );
}
