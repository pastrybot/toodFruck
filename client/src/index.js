/*
- HomeContainer (loads all trucks from server)
  - HomeComponent
    - Map Container (keeps track of map state)
      - MapComponent (Google Map React)
        - TruckMarker(s)
          - TruckCard
*/


import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router'
require('bootstrap/dist/css/bootstrap.css');

import App from './App';
import {HomeContainer, AboutContainer, PostTruckContainer, EditTruckContainer, TruckListContainer} from './containers';
import SignUpContainer from './userAuth/SignUpContainer';
import LoginContainer from './userAuth/LoginContainer';

//this is where we define the path.  You can name the path anything you want.

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="/home" component={HomeContainer} />
      <Route path="/about" component={AboutContainer}/>
      <Route path="/login" component={LoginContainer}/>
      <Route path="/signup" component={SignUpContainer}/>
      <Route path="/signup/newTruck" component={PostTruckContainer}/>
      <Route path="/login/EditTruckForm" component={EditTruckContainer}/>
      <Route path="/trucks" component={TruckListContainer}/>
      <IndexRoute component={HomeContainer} />
    </Route>
  </Router>,
  document.getElementById('root')
);
