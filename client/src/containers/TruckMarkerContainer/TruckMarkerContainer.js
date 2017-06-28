import React, { Component } from 'react';
import $ from 'jquery';
import TruckMarkerComponent from '../../components';

//stateless function that displays a list of heroes

class TruckMarkerContainer extends Component {

  state = {
    TruckMarker: undefined
  }

 loadTrucks = this.loadTrucks.bind(this)

 componentDidMount= () => this.loadTrucks()

  loadTruckMarker(){
    $.ajax({
      url: `/api/trucks/${this.props.params.truck_id}`,
      method: 'GET'
    }).done((response) => {
      console.log(response, "I am data");
      this.setState({ trucks: response.data })
    })
  }

  updateText = (event) => this.setState({ text: event.target.value })




    //any time we change text, it will auto-bind, and auto-update with the event-handler

  render() {
    return (
      <div className="">

        { this.state.trucks ?
          <TruckMarkerComponent truckMarker={this.state.truckMarker}

                      />
          : <h5>loading...</h5>
        }

      </div>
    );
  }

}


export default TruckMarkerContainer;
