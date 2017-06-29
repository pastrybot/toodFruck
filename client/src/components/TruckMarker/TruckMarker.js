import React, {PropTypes, Component} from 'react';
//import shouldPureComponentUpdate from 'react-pure-render/function';
import {markerStyles, closedMarkerStyles} from './MarkerStyles.css';


class TruckMarker extends Component {
  static propTypes = {
    text: PropTypes.string
  };

  static defaultProps = {};

  //shouldComponentUpdate = shouldPureComponentUpdate;

  render() {
    console.log(this.props, "PROPS");
    return (
       <div className={this.props.isActive ? markerStyles : closedMarkerStyles}>
          {this.props.children}
       </div>
    );
  }
}

export default TruckMarker;
