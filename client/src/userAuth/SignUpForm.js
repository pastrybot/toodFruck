import React from 'react';
import GoogleMapReact from 'google-map-react';
import {formContainer, link, buttonOne, buttonTwo} from "./styles.css"

import {Link} from 'react-router';

const SignUpForm = (props) => {
  return (
      <div className={formContainer}>
      <h3> Sign Up </h3>
        <form>
        <div>
          <label>E-mail</label>
          <input
                type="email"
                onChange={(event) => props.updateField('email', event.target.value)}
                />
        </div>
        <div>
          <label>Password</label>
          <input
                type="password"
                 onChange={(event) => props.updateField('password', event.target.value)}
                 />
        </div>
        <div>
          <button className={buttonOne} type="button" onClick={(event) =>
          props.handleSubmit(event)}>Sign Up!</button>
          <button className={buttonTwo} type="button">
            <Link className={link} to={'/login'}>Login</Link>
          </button>
        </div>
        </form>
      </div>
  )
}

export default SignUpForm;
