import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';


const Map = ({ text  }) => <div>{text}</div>;

class TruckMap extends Component {
  static defaultProps = {
    center: {lat: 45.6770, lng: -111.0429},
    zoom: 11
  };


render(){
  return (
    <div>
    <GoogleMapReact
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          bootstrapURLKeys={{key:'AIzaSyCsXWyNVyTn1_WFbABZWA0NHk-qsNwx0gg'}}
          style={{height: '80%', width: 400}}
        >
          <Map
            lat={45.6770}
            lng={-111.0429}
            text={'Bozeman'}
          />
        </GoogleMapReact>
        </div>
      );
    }
  }

export default TruckMap;
