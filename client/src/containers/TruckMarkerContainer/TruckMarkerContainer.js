import React, { Component } from 'react';
import $ from 'jquery';
import {TruckMarker} from '../../components';

class TruckMarkerContainer extends Component {
  state = {
    truckMarker: undefined,
    loading: true
  }



  loadTruckMarker = this.loadTruckMarker.bind(this);



 componentDidMount= () => this.loadTruckMarker()

  loadTruckMarker(){
    $.ajax({
      url: `/api/trucks/${this.props.id}`,
      method: 'GET'
    }).done((response) => {
      console.log(response, "I am data");
      this.setState({ truckMarker: response, loading: false })
    })
  }

  render() {
    return (
      <div>
        { (!this.state.loading) ?
          <TruckMarker truckMarker={this.state.truckMarker}

                        />

          : <h5> X </h5>
        }
      </div>
    );
  }

}


export default TruckMarkerContainer;
