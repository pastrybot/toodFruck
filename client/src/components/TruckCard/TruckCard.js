import React from 'react';
import {truckCard, photobooth, gradient, location,
 hours, description, info, facebook, instagram, twitter, social } from './cardStyle.css';
import {Link} from 'react-router';

  const TruckCard = (props) => {
    return(
        <div className={truckCard}>
          <div className={photobooth}>
            <div className={gradient}></div>
              <h2>{ props.truck.name }</h2>
              <img alt="" src={ props.truck.img }/>
          </div>
          <div className={info}>
            <div className={hours}>🕒 { props.truck.hours }</div>
            <div className={description}>{ props.truck.description }</div>
            <div className={social}>
            <a target="_blank" href={"http://www."+ props.truck.facebook}>
              <figure className={facebook}></figure>
            </a>
            <a target="_blank" href={"http://www.instagram.com/"+ props.truck.instagram}>
              <figure className={instagram}></figure>
            </a>
            <a target="_blank" href={"https://twitter.com/"+ props.truck.twitter}>
              <figure className={twitter}></figure>
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
// <div className={info}>
//
//   <a target="_blank" href={"http://www."+ props.truck.social.facebook}>
//   <figure className={facebook}></figure>
//   <a target="_blank" href={"http://www.instagram.com/"+ props.truck.social.instagram}>
//   <div className={instagram}></div>
//   </a>
//   <a target="_blank" href={"https://twitter.com/"+ props.truck.social.twitter}>
//   <div className={twitter}></div>
//   </a>
// </div>
