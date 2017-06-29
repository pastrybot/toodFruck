import React, { PropTypes, Component } from 'react';
import {MapComponent} from '../../components';

class MapContainer extends Component {
  state={
    isActive: true
  }

  static propTypes ={
    center: PropTypes.object,
    zoom: PropTypes.number,
    trucks: PropTypes.array
  }

  static defaultProps = {
    center: {lat: 45.6770, lng: -111.0429}, // [45, -111] is also valid
    zoom: 13,
  };

render(){
  return (
    <div>
      <MapComponent
        center={this.props.center}
        zoom={this.props.zoom}
        trucks={this.props.trucks}
        isActive={this.state.isActive}
      />
    </div>
      );
    }

  }

export default MapContainer;
