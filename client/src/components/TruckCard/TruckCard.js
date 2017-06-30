import React from 'react';
import {truckCard, name, image, location,
 hours, description, info, wrapper, facebook, instagram, icons, twitter } from './cardStyle.css';
import {Link} from 'react-router';

  const TruckCard = (props) => {
    return(
      <div className={wrapper}>
        <div className={truckCard}>
          <h2 className={name}>{ props.truck.name }</h2>
          <img className={image} alt="" src={ props.truck.img }/>
            <div className={info}>
              <div className={hours}>Hours: { props.truck.hours }</div>
              <div className={description}>{ props.truck.description }</div>
              <div className={icons}>
                <a target="_blank" href={"https://www.facebook.com/"+ props.truck.social.facebook}>
                  <div className={facebook}></div>
                </a>
                <a target="_blank" href={"http://www.instagram.com/"+ props.truck.social.instagram}>
                  <div className={instagram}></div>
                </a>
                <a target="_blank" href={"https://twitter.com/"+ props.truck.social.twitter}>
                  <div className={twitter}></div>
                </a>
              </div>

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
