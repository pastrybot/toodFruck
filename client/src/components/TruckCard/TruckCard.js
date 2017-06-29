import React from 'react';
import {truckCard, name, image, location,
 hours, description, social} from './cardStyle.css';

  const TruckCard = (props) => {
    return(
      <div>
      <div className={truckCard}>
        <h2 className={name}>{ props.truck.name }</h2>
        <img className={image} alt="" src={ props.truck.img }/>

       <div className={hours}>{ props.truck.hours }</div>
       <div className={description}>{ props.truck.description }</div>

      </div>
      </div>
    )
  }
export default TruckCard;

// <img className={image} alt="" src={ props.truck.img }/>
//   <ol>
// <div className={location}>{ props.truck.location }</div>
//<div className={social}>{ props.truck.social }</div>
//   </ol>
