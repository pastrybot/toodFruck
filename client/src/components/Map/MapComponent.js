import React from 'react';import React from 'react';
import GoogleMapReact from 'google-map-react';
// import Map from 'google-map-react'; ????
import TruckMarker from '../TruckMarker/TruckMarker';
import {MapStyle} from './MapStyle.css';
import TruckCard from '../TruckCard/TruckCard'
const MapComponent = (props) => {
  const mapDimensions = {
      width: '80%',
      height: '100%',
    };
  return(
    <div style={mapDimensions} className={MapStyle}>
    <GoogleMapReact
          defaultCenter={props.center}
          defaultZoom={props.zoom}
          bootstrapURLKeys={{key:'AIzaSyCsXWyNVyTn1_WFbABZWA0NHk-qsNwx0gg'}}
    >
    { props.trucks.map((truck, index) =>
        <TruckMarker isActive={props.isActive} lat={truck.location.lat} lng={truck.location.lng} text={truck.name}>
          <TruckCard truck={truck}/>
        </TruckMarker>
    )}
        </GoogleMapReact>
        </div>
  )
}
export default MapComponent;
