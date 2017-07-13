import React from 'react';
import {Link} from 'react-router';
import {formContainer, link, buttonOne, buttonTwo} from "./styles.css"

const Login = (props) => {
  return (
      <div className={formContainer}>
        <h3>Login</h3>
        <p> Register your food truck and get it on the map!</p>
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
          props.handleSubmit(event)}>Login!</button>
          <button className={buttonTwo} type="button">
            <Link className={link} to={'/signup'}>Sign Up</Link>
          </button>
        </div>
        </form>
      </div>
  )
}

export default Login;
