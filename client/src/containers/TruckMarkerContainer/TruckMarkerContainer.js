import React, { Component } from 'react';
import $ from 'jquery';
import TruckMarker from '../../components';

class Active extends React.Component {
  constructor(props) {
    super(props);
    this.handleOpenCard = this.handleOpenCard.bind(this);
    this.handleCloseCard = this.handleCloseCard.bind(this);
    this.state = { isActive: false };
  }
  handleOpenCard(){
    this.setState({isActive: true});
  }

  handleCloseCard() {
    this.setState({isActive: false});
  }

  render() {
    const isActive = this.state.isActive;

    let marker = null;
    if (isActive) {
      marker = <TruckMarker onClick={this.handleCloseCard} />;
    } else {
      marker = <TruckMarker onClick={this.handleOpenCard} />;
    }
  }

}

class TruckMarkerContainer extends Component {
  state = {
    truckMarker: undefined,
    isActive: false,
    loading: true
  }

 loadTruckMarker = this.loadTruckMarker.bind(this)
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

  //updateText = (event) => this.setState({ text: event.target.value })

  render() {
    return (
      <div>
        { (!this.state.loading) ?
          <TruckMarker truckMarker={this.state.truckMarker} />
          : <h5> X </h5>
        }
      </div>
    );
  }

}


export default TruckMarkerContainer;
