import React, { PropTypes, Component } from 'react';
import {MapComponent} from '../../components';

class MapContainer extends Component {
  state={
    isActive: false,
    activeCardId: undefined
  }

toggleCard = this.toggleCard.bind(this);

  static propTypes ={
    center: PropTypes.object,
    zoom: PropTypes.number,
    trucks: PropTypes.array
  }

  static defaultProps = {
    center: {lat: 45.6770, lng: -111.0429}, // [45, -111] is also valid
    zoom: 13,
  };

  toggleCard(id){
    this.setState({isActive: true, activeCardId: id } );
    }

  clickMap = () => this.setState({isActive: false});

render(){
  return (
    <div>
      <MapComponent
        center={this.props.center}
        zoom={this.props.zoom}
        trucks={this.props.trucks}
        isActive={this.state.isActive}
        toggleCard={this.toggleCard}
        activeCardId={this.state.activeCardId}
        clickMap={this.clickMap}
      />
    </div>
      );
    }
  }

export default MapContainer;
