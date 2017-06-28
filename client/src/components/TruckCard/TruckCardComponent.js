import React from 'react';
import {TruckCardContainer} from '../../containers';
import {truckCard, name, image, location,
        hours, description, social} from './cardStyle.css';

const TruckCardComponent = (props) => {
  return(
    <div>
      <div className={truckCard}>
        <h2 className={name}>{ props.truck.name }</h2>
        <img className={image} alt="" src={ props.truck.img }/>
          <ol>
            <li className={location}>{ props.truck.location }</li>
            <li className={hours}>{ props.truck.hours }</li>
            <li className={description}>{ props.truck.description }</li>
            <li className={social}>{ props.truck.social }</li>
          </ol>
      </div>
    </div>
  )
}

export default TruckCardComponent;
