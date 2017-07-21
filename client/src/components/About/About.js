import React from 'react';
import {about, peeps, solo, whatItIs, contact} from './aboutStyle.css';

const About = (props) => {
  return (
    <div className={about}>
      <h1>The Tood Fruck Crew</h1>
      <div className={peeps}>

        <div className={solo}>
          <figure>
            <img src="https://unsplash.it/200/200/?random" alt="Katie" />
          </figure>
          <h4> Katie </h4>
          <figcaption> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at dui in nibh mollis dignissim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. </figcaption>
        </div>

        <div className={solo}>
          <figure>
            <img src="https://unsplash.it/200/200/?random" alt="Sienna" />
          </figure>
          <h4> Sienna </h4>
          <figcaption> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at dui in nibh mollis dignissim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. </figcaption>
        </div>

        <div className={solo}>
          <figure>
            <img src="https://unsplash.it/200/200/?random" alt="Tyler" />
          </figure>
          <h4> Tyler </h4>
          <figcaption> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at dui in nibh mollis dignissim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. </figcaption>
        </div>
      </div>

      <div className={whatItIs}>
        <h4> Here to make finding nom noms a little less sucky </h4>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
      </div>

      <div className={contact}>
        <h4> Reach out to us:  </h4>
        <label> Your Name </label>
        <input type="text" />
        <label> Email </label>
        <input type="email" />
        <label> Comments & Questions: </label>
        <textarea />
        <button type="button"> submit </button>
      </div>

    </div>
  )
}
export default About;
