import React from 'react';
import { Link } from 'react-router';
import {listFlex, truckCard, photobooth, gradient, location,
 hours, description, info, facebook, instagram, twitter, social} from './truckListStyle.css';

const TruckList = (props) => {
  return (
  <div>
    <div className= {listFlex}>
      { props.trucks.map((truck, index) => {
        return (
          <div className={truckCard}>
            <div className={photobooth}>
              <div className={gradient}></div>
                <h2>{ truck.name ? truck.name : "no name"}</h2>
                <img alt="" src={ truck.img }/>
            </div>
            <div className={info}>
              <div className={hours}>🕒 { truck.hours }</div>
              <div className={description}>{ truck.description }</div>
              <div className={social}>
                <a target="_blank" href={"http://www.facebook.com/"+ truck.facebook}>
                  <figure className={facebook}></figure>
                </a>
                <a target="_blank" href={"http://www.instagram.com/"+ truck.instagram}>
                  <figure className={instagram}></figure>
                </a>
                <a target="_blank" href={"https://twitter.com/"+ truck.twitter}>
                  <figure className={twitter}></figure>
                </a>
              </div>
            </div>
        </div>
        )}
      )}
    </div>
  </div>
)}
export default TruckList;
