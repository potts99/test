import * as React from 'react';
import {LayersControl, MapContainer, TileLayer} from 'react-leaflet';
import ReactLeafletKml from 'react-leaflet-kml';

// import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
// import 'leaflet-defaulticon-compatibility';

import 'leaflet/dist/leaflet.css';

const PageOne = () => {
  const [kml, setKml] = React.useState(null);

  const innerBounds = [
    [60.505, -13.09],
    [49.505, 3.09],
  ];

  React.useEffect(() => {
    fetch(
      'https://raw.githubusercontent.com/potts99/test/main/src/modules/pages/Pages/Map.kml',
      {},
    )
      .then((res) => res.text())
      .then((kmlText) => {
        console.log(kmlText);
        const parser = new DOMParser();
        const kml = parser.parseFromString(kmlText, 'text/xml');
        setKml(kml);
      });
  }, []);

  return (
    <div>
      <MapContainer
        style={{height: '100vh', width: '100%'}}
        zoom={17}
        center={[53.4725, -2.2989]}
        bounds={innerBounds}>
        <LayersControl position='topright'>
          <LayersControl.BaseLayer checked name='Dark'>
            <TileLayer
              className='grayscaleInvert'
              url='https://api.os.uk/maps/raster/v1/zxy//Light_3857/{z}/{x}/{y}.png?key=JsKqrEYFTFOD7Y3jXGS4dpSMC1e0h8if'
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <LayersControl.BaseLayer name='Light'>
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url='https://api.os.uk/maps/raster/v1/zxy//Light_3857/{z}/{x}/{y}.png?key=JsKqrEYFTFOD7Y3jXGS4dpSMC1e0h8if'
              />
            </LayersControl.BaseLayer>
          </LayersControl.BaseLayer>
        </LayersControl>
        {kml && <ReactLeafletKml kml={kml} />}
      </MapContainer>
    </div>
  );
};

export default PageOne;
