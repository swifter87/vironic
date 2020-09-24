import React, { Component } from "react";

import image from "../mobile.png";

class Home extends Component {
  render() {
    return (
      <div className="container-home">
        <div className="image-text">
          <p className="first-text">Smart TV application development</p>
          <p className="second-text">
            We help agencies, direct advertisers, and trading desks scale
            programmatic marketing efforts and maximize revenues.
          </p>
          {/* <button className="primary-btn">Sign Up</button> */}
        </div>

        <img
          src={image}
          className="responsive-home"
          alt="image"
          width="600"
          height="400"
        />
        <div id="advertise"></div>
      </div>
    );
  }
}

export default Home;
