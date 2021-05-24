/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import Box from '@material-ui/core/Box';
import styles from '../../styles/Home.module.css';
import ReactLeafletKml from "react-leaflet-kml";

import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet-defaulticon-compatibility';

const PageOne = () => {
  const [kml, setKml] = useState(null);


  // const kmlText = 'YOUR KML FILE AS TEXT';
  // const parser = new DOMParser();
  // const kml = parser.parseFromString(kmlText, 'text/xml');

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/aviklai/react-leaflet-kml/master/src/assets/example1.kml"
    )
      .then((res) => res.text())
      .then((kmlText) => {
        console.log(kmlText)
        const parser = new DOMParser();
        const kml = parser.parseFromString(kmlText, "text/xml");
        setKml(kml);
      });
  }, []);

  return (
      <Box>
        <div>
          <MapContainer
            center={[53.4725, -2.2989]}
            zoom={13}
            minZoom={7}
            scrollWheelZoom={true}
            style={{height: '99vh', width: '100%'}}
            className='grayscale-invert'>
            <TileLayer
              className={styles.grayscaleInvert}
              attribution='&copy;'
              url='https://api.os.uk/maps/raster/v1/zxy//Light_3857/{z}/{x}/{y}.png?key=JsKqrEYFTFOD7Y3jXGS4dpSMC1e0h8if'
            />
            <Marker position={[51.505, -0.09]}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
            {kml && <ReactLeafletKml kml={kml} />}
          </MapContainer>
        </div>
      </Box>
  );
};

export default PageOne;
