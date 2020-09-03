import React from 'react';
import { useState, useEffect } from 'react';
import { Map, TileLayer, Marker, Popup, ImageOverlay } from 'react-leaflet';
import './App.css';
var Leaflet = require('leaflet');

function App() {

  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  const position = [-33.8650, 151.2094];

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  // var center = [-33.8650, 151.2094];
  // const map = L.map('map').setView(position, 13);

  var imageUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Sydney_Opera_House_-_Dec_2008.jpg/1024px-Sydney_Opera_House_-_Dec_2008.jpg';
  // imageBounds = [center, [-36.9650, 154.3094]];

  // L.imageOverlay(imageUrl, imageBounds).addTo(map);

  return (
    <div className="App">
     <Map bounds={[[(windowDimensions.height), 0], [windowDimensions.height, windowDimensions.width]]} zoomControl={true} zoomSnap={0.1} crs={ Leaflet.CRS.Simple }
      attributionControl={false}>
        {/* <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        /> */}
        <ImageOverlay bounds={[[0, 0], [844, 1342]]} url={imageUrl}></ImageOverlay>
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </Map>
    </div>
  );
}

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

export default App;
