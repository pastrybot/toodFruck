import React, {PropTypes, Component} from 'react';
//import shouldPureComponentUpdate from 'react-pure-render/function';
import {markerStyles} from './MarkerStyles.css';
import {TruckCardComponent} from '../../components';


const TruckMarker = (props) => {

  return (
     <div className={markerStyles}>
      {props.truckMarker.name}
     </div>
  );
}

export default TruckMarker
