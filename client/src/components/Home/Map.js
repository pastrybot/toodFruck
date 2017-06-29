import React, { PropTypes, Component } from 'react';
import GoogleMapReact from 'google-map-react';
//import shouldPureComponentUpdate from 'react-pure-render/function';
import Map from 'google-map-react';
import TruckMarker from './TruckMarker';
import {MapStyle} from './MapStyle.css';

const TestMap = ({ text  }) => <div>{text}</div>;

class TruckMap extends Component {
  static propTypes ={
    center: PropTypes.array,
    zoom: PropTypes.number,
    TruckMarkerCoords: PropTypes.any,
    trucks: PropTypes.array
  }

  static defaultProps = {
    center: {lat: 45.6770, lng: -111.0429}, // [45, -111] is also valid
    zoom: 13,
    TruckMarkerCoords: {lat: 45.6770, lng:-111.0429},
  };

  constructor(props) {
    super(props);
  }

render(){
  const mapStyle = {
      width: '80%',
      height: '100%',
    };

  return (
    <div ref="map" style={mapStyle} className={MapStyle}>
    <GoogleMapReact
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          bootstrapURLKeys={{key:'AIzaSyCsXWyNVyTn1_WFbABZWA0NHk-qsNwx0gg'}}

        >
        { this.props.trucks.map((truck, index) =>
            <TruckMarker lat={truck.location.lat} lng={truck.location.lng} text={truck.name}/>
        )}

        </GoogleMapReact>
        </div>
      );
    }
  }

export default TruckMap;
