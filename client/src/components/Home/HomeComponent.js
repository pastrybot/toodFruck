import React from 'react';
import {MapContainer} from '../../containers';

const HomeComponent = (props) => {
  return(
    <div>
      <MapContainer
          trucks={props.trucks}
        />
    </div>
  )
}

export default HomeComponent;
