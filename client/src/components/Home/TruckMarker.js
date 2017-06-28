import React, {PropTypes, Component} from 'react';
//import shouldPureComponentUpdate from 'react-pure-render/function';
import {markerStyles} from './MarkerStyles.css';
import {TruckCardComponent} from '../../components';


export default class TruckMarker extends Component {
  static propTypes = {
    text: PropTypes.string,
    isActive: false
  };


  static defaultProps = {};

  //shouldComponentUpdate = shouldPureComponentUpdate;

  render() {
    return (
       <div className={markerStyles} onClick={(event) => this.props.setActive(event)}>
        {this.props.isActive ? <TruckCardComponent /> : this.props.text}
       </div>
    );
  }
}
