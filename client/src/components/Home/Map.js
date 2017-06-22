import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import {MapStyle} from './MapStyle.css';



const Map = ({ text  }) => <div>{text}</div>;

class TruckMap extends Component {
  static defaultProps = {
    center: {lat: 45.6770, lng: -111.0429},
    zoom: 13,
  };


render(){
  const mapStyle = {
      width: '80%',
      height: '100%',
      // border: '1px solid black',
    };

  return (
    <div ref="map" style={mapStyle} className={MapStyle}>
    <GoogleMapReact
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          bootstrapURLKeys={{key:'AIzaSyCsXWyNVyTn1_WFbABZWA0NHk-qsNwx0gg'}}

        >
          <Map
            lat={45.6770}
            lng={-111.0429}
          />
        </GoogleMapReact>
        </div>
      );
    }
  }

export default TruckMap;
