import React, {Component} from 'react';
import $ from "jquery";
import {TruckList} from '../../components'

class TruckListContainer extends Component {

  state = {
    trucks: undefined
  }

  componentDidMount = () => this.loadTrucks()

  loadTrucks(){
      $.ajax({
        url: "/api/trucks",
        method: "GET"
      }).done((response) => {
        let trucks = response.data.reverse();
        this.setState({ trucks: response.data })
      })
    }

  render() {
    return(
    <div>
      {this.state.trucks ?
        <TruckList trucks={this.state.trucks}/> : null}
    </div>
    )
  }
}
export default TruckListContainer;
