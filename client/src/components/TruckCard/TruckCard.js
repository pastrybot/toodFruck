import React from 'react';
import {truckCard, name, image, location,
 hours, description, info, wrapper, facebook } from './cardStyle.css';
import {Link} from 'react-router';

  const TruckCard = (props) => {
    return(
      <div className={wrapper}>
        <div className={truckCard}>
          <h2 className={name}>{ props.truck.name }</h2>
          <img className={image} alt="" src={ props.truck.img }/>
            <div className={info}>
              <div className={hours}>{ props.truck.hours }</div>
              <div className={description}>{ props.truck.description }</div>
              <a target="_blank" href={"http://www."+ props.truck.social.facebook}>
                <div className={facebook}></div>
              </a>
              
            </div>
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
