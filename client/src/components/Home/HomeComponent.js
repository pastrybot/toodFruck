import React from 'react';
import TruckMap from './Map.js';

const HomeComponent = (props) => {
  return(
    <div>
      <TruckMap
          trucks={props.trucks}
        />
    </div>
  )
}

export default HomeComponent;
