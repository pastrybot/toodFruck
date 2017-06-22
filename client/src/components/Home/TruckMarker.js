import React, {PropTypes, Component} from 'react';
//import shouldPureComponentUpdate from 'react-pure-render/function';
import {markerStyles} from './MarkerStyles.js';


export default class TruckMarker extends Component {
  static propTypes = {
    text: PropTypes.string
  };

  static defaultProps = {};

  //shouldComponentUpdate = shouldPureComponentUpdate;

  render() {
    return (
       <div style={markerStyles}>
          {this.props.text}
       </div>
    );
  }
}
