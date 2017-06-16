import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';

require('bootstrap/dist/css/bootstrap.css');

import App from './App';
//this is where we define the path.  You can name the path anything you want.

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}/>

  </Router>,
  document.getElementById('root')
);
