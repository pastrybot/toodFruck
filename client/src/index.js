import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import {HomeContainer} from './containers';

require('bootstrap/dist/css/bootstrap.css');

import App from './App';
//this is where we define the path.  You can name the path anything you want.

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="/home" component={HomeContainer} />
      <IndexRoute component={HomeContainer} />
    </Route>
  </Router>,
  document.getElementById('root')
);
