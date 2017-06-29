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
import {HomeContainer, AboutContainer, TruckCardContainer} from './containers';
//this is where we define the path.  You can name the path anything you want.

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="/home" component={HomeContainer} />
      <Route path="/about" component={AboutContainer}/>
      <Route path="/trucks" component={TruckCardContainer}/>
      <IndexRoute component={HomeContainer} />
    </Route>
  </Router>,
  document.getElementById('root')
);
