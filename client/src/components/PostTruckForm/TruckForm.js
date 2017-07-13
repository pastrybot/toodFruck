import React from 'react';
import {formContainer} from "./FormStyle.css"
const PostTruckForm = (props) => {
  return (
    <div className={formContainer} >
      <form className="" onSubmit={(event) => props.handleSubmit(event)}>
      <h1 className="">Enter Truck Name</h1>
        <div className="">
          <label className="">Name:</label>
          <input type="text" placeholder="Name"
            onChange={(event) => props.onChange("name", event.target.value)}/>
        </div>
        <div className="">
          <label className="">Image:</label>
          <input type="text" placeholder="Image URL"
            onChange={(event) => props.onChange("image", event.target.value)}/>
        </div>
        <div className="">
          <label className="">Latitude:</label>
          <input type="text" placeholder="Latitude"
            onChange={(event) => props.onChange("lat", event.target.value)}/>
        </div>
        <div className="">
          <label className="">Longitude:</label>
          <input type="text" placeholder="Longitude"
            onChange={(event)=> props.onChange("lng", event.target.value)}/>
        </div>
        <div className="">
          <label className="">Hours:</label>
          <input type="text" placeholder="Open Hours"
            onChange={(event) => props.onChange("hours", event.target.value)}/>
        </div>
        <div className="">
          <label className="">Description:</label>
          <input type="text" placeholder="Description"
            onChange={(event) => props.onChange("description", event.target.value)}/>
        </div>
          <button type="button" onClick={(event) => props.handleSubmit(event)}>Post</button>
      </form>
      </div>
  )
}
export default PostTruckForm;
