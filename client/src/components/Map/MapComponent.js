import React from 'react';
import GoogleMapReact from 'google-map-react';
// import Map from 'google-map-react'; ????
import TruckMarker from '../TruckMarker/TruckMarker';
import {MapStyle} from './MapStyle.css';
import TruckCard from '../TruckCard/TruckCard';

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
MapComponent.defaultProps = {
  styles:  [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"color":"#000000"},{"lightness":13}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#144b53"},{"lightness":14},{"weight":1.4}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#08304b"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#0c4152"},{"lightness":5}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#0b434f"},{"lightness":25}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#000000"}]},{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"color":"#0b3d51"},{"lightness":16}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"}]},{"featureType":"transit","elementType":"all","stylers":[{"color":"#146474"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#021019"}]}]
}



export default MapComponent;
