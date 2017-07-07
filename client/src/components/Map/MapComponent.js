import React from 'react';
import GoogleMapReact from 'google-map-react';
// import Map from 'google-map-react'; ????
import MarkerWrapper from '../MarkerWrapper/MarkerWrapper';
import {MapStyle, truckPin} from './MapStyle.css';
import TruckCard from '../TruckCard/TruckCard';


const MapComponent = (props) => {
  const mapDimensions = {
      width: '80%',
      height: '100%',
    };
  return(
    <div style={mapDimensions} className={MapStyle}>
    <GoogleMapReact
          onClick={() => props.clickMap()}
          defaultCenter={props.center}
          defaultZoom={props.zoom}
          bootstrapURLKeys={{key:'AIzaSyCsXWyNVyTn1_WFbABZWA0NHk-qsNwx0gg'}}
    >
    { props.trucks.map((truck, index) =>
        <MarkerWrapper id={truck._id} key={index} isActive={props.isActive} toggleCard={props.toggleCard}
          lat={truck.location.lat} lng={truck.location.lng} text={truck.name}>
          { props.isActive && props.activeCardId == truck._id ? <TruckCard truck={truck}/> : <div className={truckPin}>{truck.name}</div>}
        </MarkerWrapper>

    )}
        </GoogleMapReact>
        </div>
  )
}

export default MapComponent;
