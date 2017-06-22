import React, { Component } from 'react';
import $ from 'jquery';
import TruckCardComponent from '../../components';

//stateless function that displays a list of heroes

class TruckCardContainer extends Component {

  state = {
    TruckCard: undefined
  }

 loadTrucks = this.loadTrucks.bind(this)

 componentDidMount= () => this.loadTrucks()

  loadTrucks(){
    $.ajax({
      url: '/api/trucks',
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
          <TruckCardComponent trucks={this.state.trucks}

                      />
          : <h5>loading...</h5>
        }

      </div>
    );
  }

}


export default TruckCardContainer;
