import React from 'react';
import {postFormContainer, postButton, latLng} from "./FormStyle.css"
const EditTruckForm = (props) => {
  return (
    <div className={postFormContainer} >
      <h3> Add your truck: </h3>
      <form className="" onSubmit={(event) => props.handleSubmit(event)}>
        <div className="">
          <label className="">Name:</label>
          <input type="text" value= {props.name}
            onChange={(event) => props.onChange("name", event.target.value)}/>
        </div>
        <div className={latLng}>
          <div>
            <label className="">Image:</label>
            <input type="url" value={props.img}
              onChange={(event) => props.onChange("img", event.target.value)}/>
          </div>
          <div>
            <label className="">Latitude:</label>
            <input type="text" value={props.lat}
              onChange={(event) => props.onChange("lat", event.target.value)}/>
          </div>
        </div>
        <div className="">
          <label className="">Longitude:</label>
          <input type="text" value={props.lng}
            onChange={(event)=> props.onChange("lng", event.target.value)}/>
        </div>
        <div className="">
          <label className="">Hours:</label>
          <input type="text" value={props.hours}
            onChange={(event) => props.onChange("hours", event.target.value)}/>
        </div>
        <div className="">
          <label className="">Description:</label>
          <input type="text" value={props.description}
            onChange={(event) => props.onChange("description", event.target.value)}/>
        </div>
        <div className="">
          <label className="">Website:</label>
          <input type="text" value={props.website}
            onChange={(event) => props.onChange("website", event.target.value)}/>
        </div>
        <div className="">
          <label className="">Facebook:</label>
          <input type="text" value={props.facebook}
            onChange={(event) => props.onChange("facebook", event.target.value)}/>
        </div>
        <div className="">
          <label className="">Instagram:</label>
          <input type="text" value={props.instagram}
            onChange={(event) => props.onChange("instagram", event.target.value)}/>
        </div>
        <div className="">
          <label className="">Twitter:</label>
          <input type="text" value={props.twitter}
            onChange={(event) => props.onChange("twitter", event.target.value)}/>
        </div>
          <button className={postButton} type="button" onClick={(event) => props.handleSubmit(event)}>Go!</button>
      </form>
      </div>
  )
}
export default EditTruckForm;
