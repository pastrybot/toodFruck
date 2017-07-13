import React, { Component } from 'react';
import {TruckForm} from '../../components';
import $ from "jquery";
import {browserHistory} from "react-router";


class PostTruckContainer extends Component {
  state = {
    name: undefined,
    lat: undefined,
    lng: undefined,
    hours: undefined,
    open: false,
    description: undefined,
    img: undefined,
    social: undefined
  }
  updateField(name, value){
    const newState = {};
    newState[name]=value;
    this.setState(newState);
  }

  onChange = this.onChange.bind(this);
  onChange(name, value){
    this.updateField(name, value);
    this.validate();

  }
  validate(){
    this.setState({
      valid: (this.state.name !== undefined )
          && (this.state.location !== undefined)


    })



  }

  handleSubmit = this.handleSubmit.bind(this)
  handleSubmit(event) {
    event.preventDefault()


  const truck={name: this.state.name,
              img: this.state.img,
              lat: Number(this.state.lat),
              lng: Number(this.state.lng),
              hours: this.state.hours,
              open: this.state.open,
              description: this.state.description,
              social: this.state.social
            }
console.log(truck.location)
  $.ajax({
    url: "/api/trucks",
    method: "POST",
    data: truck
  }).done((response) =>
    browserHistory.push('/'))

}

  render() {
    return (
      <div>
        <TruckForm
            handleSubmit={this.handleSubmit}
            onChange={this.onChange}
            valid={this.state.valid}
        />

      </div>
    )
  }
}
export default PostTruckContainer;
