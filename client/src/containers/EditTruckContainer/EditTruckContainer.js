import React, {Component} from 'react';
import {EditTruckForm} from '../../components';
import $ from 'jquery';
import { browserHistory} from 'react-router';

class EditTruckContainer extends Component{
  state={
    isFetching: true,
    name: undefined,
    img: undefined,
    lat: undefined,
    lng: undefined,
    website: undefined,
    description: undefined,
    twitter: undefined,
    facebook: undefined,
    instagram: undefined,
    hours: undefined,
    open: undefined,

  }
componentDidMount = () => this.loadTrucks();
  handleSubmit = this.handleSubmit.bind(this);
  updateField = this.updateField.bind(this);

  updateField(field, value){
    const newState = {};
    newState[field] = value;
    this.setState(newState);
  }

  loadTrucks(){
    $.ajax({
      url:`/api/trucks/${this.props.user.truck_id}`,
      method: 'GET'
    }).done((data) => {
      console.log(data)
      this.setState({ isFetching: false,
                      name: data.name,
                      img: data.img,
                      lat: data.lat,
                      lng: data.lng,
                      website: data.website,
                      description: data.description,
                      twitter: data.twitter,
                      facebook: data.facebook,
                      instagram: data.instagram,
                      hours: data.hours,
                      open: data.open,

              })
    })
    console.log(this.props.user)
  }

  handleSubmit(event){
    event.preventDefault()
    const data = {
      name: this.state.name,
      img: this.state.img,
      lat: this.state.lat,
      lng: this.state.lng,
      website: this.state.website,
      description: this.state.description,
      twitter: this.state.twitter,
      facebook: this.state.facebook,
      instagram: this.state.instagram,
      hours: this.state.hours,
      open: this.state.open
    }
    $.ajax({
      url:`/api/trucks/${this.props.user.truck_id}`,
      method: 'PUT',
      data: data
    }).done((response) => browserHistory.push('/')

    )
}

  render(){
    return(
      <div>
      <EditTruckForm
          name= {this.state.name}
          img= {this.state.img}
          lat= {this.state.lat}
          lng= {this.state.lng}
          website= {this.state.website}
          description= {this.state.description}
          twitter= {this.state.twitter}
          facebook= {this.state.facebook}
          instagram= {this.state.instagram}
          hours= {this.state.hours}
          open= {this.state.open}
          updateField={this.updateField}
          handleSubmit={this.handleSubmit}

      />



      </div>



    )
  }
}

export default EditTruckContainer;
