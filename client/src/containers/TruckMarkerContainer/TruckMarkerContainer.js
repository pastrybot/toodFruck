import React, { Component } from 'react';
import $ from 'jquery';
import TruckMarker from '../../components';

class TruckMarkerContainer extends Component {

  state = {
    truckMarker: undefined,
    isActive: false
  }

 loadTruckMarker = this.loadTruckMarker.bind(this)
 componentDidMount= () => this.loadTruckMarker()

  loadTruckMarker(){
    $.ajax({
      url: `/api/trucks/${this.props.id}`,
      method: 'GET'
    }).done((response) => {
      console.log(response, "I am data");
      this.setState({ truckMarker: response })
    })
  }

  updateText = (event) => this.setState({ text: event.target.value })


  render() {
    return (
      <div className="">

        { this.state.truckMarker ?
          <TruckMarker truckMarker={this.state.truckMarker} />
          : <h5>loading...</h5>
        }

      </div>
    );
  }

}


export default TruckMarkerContainer;
