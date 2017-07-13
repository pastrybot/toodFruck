import React from 'react';
import GoogleMapReact from 'google-map-react';
import {formContainer, formContent} from './styles.css';
import {Link} from 'react-router';

const SignUpForm = (props) => {
  return (
      <div className={formContainer}>
        <form className={formContent}>
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
          <button className="btn btn-primary" type="button" onClick={(event) =>
          props.handleSubmit(event)}>Sign Up!</button>
          <Link className="btn btn-default" to={'/login'}>Back to Login</Link>
        </div>
        </form>
      </div>
  )
}

export default SignUpForm;
