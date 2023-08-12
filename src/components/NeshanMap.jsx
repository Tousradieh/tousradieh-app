import NeshanMap from "@neshan-maps-platform/react-openlayers";
import "@neshan-maps-platform/react-openlayers/dist/style.css";

import React from "react";

const Map = ({ lat, lon }) => {
  return (
    <NeshanMap
      mapKey="web.1fe2c1243ba64672a96352e22a0bedcd"
      center={{ latitude: lat, longitude: lon }}
      zoom={14}
    ></NeshanMap>
  );
};
export default Map;
