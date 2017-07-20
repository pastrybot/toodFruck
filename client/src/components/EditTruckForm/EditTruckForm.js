import React from 'react';
import {postFormContainer, postButton, latLng} from "./FormStyle.css"
const EditTruckForm = (props) => {
  return (
    <div className={postFormContainer} >
      <h3> Update your info: </h3>
      <form className="" onSubmit={(event) => props.handleSubmit(event)}>
        <div className="">
          <label className="">Name:</label>
          <input type="text" value= {props.name}
            onChange={(event) => props.updateField("name", event.target.value)}/>
        </div>
        <div className={latLng}>
          <div>
            <label className="">Image:</label>
            <input type="url" value={props.img}
              onChange={(event) => props.updateField("img", event.target.value)}/>
          </div>
          <div>
            <label className="">Latitude:</label>
            <input type="text" value={props.lat}
              onChange={(event) => props.updateField("lat", event.target.value)}/>
          </div>
        </div>
        <div className="">
          <label className="">Longitude:</label>
          <input type="text" value={props.lng}
            onChange={(event)=> props.updateField("lng", event.target.value)}/>
        </div>
        <div className="">
          <label className="">Hours:</label>
          <input type="text" value={props.hours}
            onChange={(event) => props.updateField("hours", event.target.value)}/>
        </div>
        <div className="">
          <label className="">Description:</label>
          <input type="text" value={props.description}
            onChange={(event) => props.updateField("description", event.target.value)}/>
        </div>
        <div className="">
          <label className="">Website:</label>
          <input type="text" value={props.website}
            onChange={(event) => props.updateField("website", event.target.value)}/>
        </div>
        <div className="">
          <label className="">Facebook:</label>
          <input type="text" value={props.facebook}
            onChange={(event) => props.updateField("facebook", event.target.value)}/>
        </div>
        <div className="">
          <label className="">Instagram:</label>
          <input type="text" value={props.instagram}
            onChange={(event) => props.updateField("instagram", event.target.value)}/>
        </div>
        <div className="">
          <label className="">Twitter:</label>
          <input type="text" value={props.twitter}
            onChange={(event) => props.updateField("twitter", event.target.value)}/>
        </div>
          <button className={postButton} type="button" onClick={(event) => props.handleSubmit(event)}>Go!</button>
      </form>
      </div>
  )
}
export default EditTruckForm;
