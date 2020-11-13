import React, { Component } from "react";
import backVideo from "../preview.mp4";

import image from "../programmatic_main.png";

class Home extends Component {
  render() {
    return (
      <div className="container-home">
        {/* <video autoPlay muted className="background-video">
          <source src={backVideo} type="video/mp4"></source>
        </video> */}
        <div className="image-text">
          <p className="first-text">Programmatic video advertising</p>
          <p className="second-text">
            We help agencies, direct advertisers, and trading desks scale
            programmatic marketing efforts and maximize revenues.
          </p>
        </div>

        <img
          src={image}
          className="responsive-home"
          alt=""
          width="600"
          height="400"
        />
        <div id="advertise"></div>
      </div>
    );
  }
}

export default Home;
