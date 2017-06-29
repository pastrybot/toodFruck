import React, { Component } from 'react';
import $ from 'jquery';
import TruckCard from '../../components';

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

  render() {
    return (
      <div>

        { this.state.trucks ?
          <TruckCard trucks={this.state.trucks}

                      />
          : <h5>loading...</h5>
        }

      </div>
    );
  }

}


export default TruckCardContainer;
