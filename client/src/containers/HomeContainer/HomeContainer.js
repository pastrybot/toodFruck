import React, {Component} from 'react';
import {Home} from '../../components';
import $ from 'jquery';

class HomeContainer extends Component{

  state = {
    trucks: undefined,
    loaded: false
  }

  componentDidMount = () => this.loadTrucks()

  loadTrucks(){
    $.ajax({
      url: '/api/trucks',
      method: 'GET'
    }).done((response) => {
      console.log(response, "I am a truck's data");
      this.setState({ trucks: response.data, loaded: true })
    })
  }

  render(){
    return(
      <div>
        { this.state.loaded ?
          <Home
              trucks={this.state.trucks}
          /> : null }
      </div>
    )
  }
}

export default HomeContainer;
