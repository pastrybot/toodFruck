import React, { Component } from 'react';
import {NavBar} from './components';
import $ from 'jquery';

class App extends Component {

  state = {
    user: undefined,
    isAuthed: undefined
  }
componentDidMount = () => this.getUser();
getUser(){
  $.ajax({
    url: `/api/get_user`,
    method: "GET"
  }).done((response) => {
    console.log(response, "user response")
    if(response.isAuthed === true){
      this.setState({
      user: {
        email: response.user.local.email,
        id: response.user._id
      },
      isAuthed: response.isAuthed
    })
  }else{
    console.log("invalid user")
  }

  })
}



  render() {
    return (
      <div>
        <NavBar />
        <div>
          {React.cloneElement(this.props.children, {...this.state}) }
        </div>


      </div>
    );
  }
}
export default App;
