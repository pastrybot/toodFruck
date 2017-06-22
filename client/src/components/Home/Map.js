import React, { PropTypes, Component } from 'react';
import GoogleMapReact from 'google-map-react';
//import shouldPureComponentUpdate from 'react-pure-render/function';
import Map from 'google-map-react';
import MyGreatPlace from './my_great_place';
import {MapStyle} from './MapStyle.css';

const TestMap = ({ text  }) => <div>{text}</div>;

class TruckMap extends Component {
  static propTypes ={
    center: PropTypes.array,
    zoom: PropTypes.number,
    greatPlaceCoords: PropTypes.any,
  }

  static defaultProps = {
    center: {lat: 45.6770, lng: -111.0429},
    zoom: 13,
    greatPlaceCoords: {lat: 45.6770, lng:-111.0429},
  };

  /////
  //shouldComponentUpdate = shouldPureComponentUpdate;

  constructor(props) {
    super(props);
  }
  /////

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
        <MyGreatPlace lat={45.7960} lng={-111.0429} text={'A'} />
        <MyGreatPlace {...this.props.greatPlaceCoords} text={'B'} />
          <TestMap
            lat={45.6770}
            lng={-111.0429}
          />
        </GoogleMapReact>
        </div>
      );
    }
  }

export default TruckMap;
