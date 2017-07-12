import React from 'react';

const TruckForm = (props) => {
  return (
    <div className={}>
      <form className={form} onSubmit={(event) => props.handleSubmit(event)}>
      <h1 className={}>Enter Truck Name</h1>
        <div className={}>
          <label className={}>Name:</label>
          <input type="text" placeholder="Name"
            onChange={(event) => props.onChange("name", event.target.value)}/>
        </div>
        <div className={}>
          <label className={}>Image:</label>
          <input type="text" placeholder="Image URL"
            onChange={(event) => props.onChange("image", event.target.value)}/>
        </div>
        <div className={}>
          <label className={}>Location:</label>
          <input type="text" placeholder="Location"
            onChange={(event) => props.onChange("Location", event.target.value)}/>
        </div>
        <div className={}>
          <label className={}>Hours:</label>
          <input type="text" placeholder="Open Hours"
            onChange={(event) => props.onChange("hours", event.target.value)}/>
        </div>
        <div className={}>
          <label className={}>Description:</label>
          <input type="text" placeholder="Description"
            onChange={(event) => props.onChange("description", event.target.value)}/>
        </div>
        <div className={}>
          <label className={}>Social Media:</label>
          <input type="text" placeholder="Social Media URL"
            onChange={(event) => props.onChange("social media", event.target.value)}/>
        </div>
          <button disabled={!props.valid} type="submit" className={postBtn}>Post</button>
      </form>
  )
}
export default PostTruckForm;
