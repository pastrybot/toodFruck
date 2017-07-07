import React, {PropTypes, Component} from 'react';
//import shouldPureComponentUpdate from 'react-pure-render/function';
import {markerStyles, closedMarkerStyles} from './MarkerStyles.css';
import $ from 'jquery';


class MarkerWrapper extends Component {
  static propTypes = {
    text: PropTypes.string
  };

  static defaultProps = {};

  //shouldComponentUpdate = shouldPureComponentUpdate;
  render() {
    console.log(this.props, "PROPS");
    return (
       <div onClick={() => this.props.toggleCard(this.props.id)}
        className={this.props.isActive ? markerStyles : closedMarkerStyles}>
          {this.props.children}
       </div>
    );
  }
}

export default MarkerWrapper;
