import Map from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useState } from 'react';
const GlobalMap = () => {
  const viewportHeight = window.innerHeight;
  const viewportWidth = window.innerWidth;

  const [viewState, setViewState] = useState({
    longitude: -100,
    latitude: 40,
    zoom: 3.5,
  });

  return (
    <Map
      {...viewState}
      onMove={(viewport) => setViewState(viewport.viewState)}
      style={{ width: viewportWidth, height: viewportHeight }}
      mapStyle='mapbox://styles/mapbox/streets-v9'
      mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
    />
  );
};
export default GlobalMap;
