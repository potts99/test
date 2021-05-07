/* eslint-disable prettier/prettier */
import React from 'react';
import Box from '@material-ui/core/Box';
import AppAnimate from '../../@crema/core/AppAnimate';

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

const PageOne = () => {
  return (
    <AppAnimate animation='transition.slideUpIn' delay={200}>
      <Box>
      <div>
      <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        minZoom={7}
        scrollWheelZoom={true}
        style={{ height: 800, width: "100%" }}
      >
        <TileLayer
          attribution='&copy;'
          url="https://api.os.uk/maps/raster/v1/zxy//Light_3857/{z}/{x}/{y}.png?key=JsKqrEYFTFOD7Y3jXGS4dpSMC1e0h8if"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
      </Box>
    </AppAnimate>
  );
};

export default PageOne;
