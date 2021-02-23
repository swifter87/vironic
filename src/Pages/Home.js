import React, { Component } from "react";
import backVideo from "../IMG_2144.mp4";

class Home extends Component {
  render() {
    return (
      <div className="container-home">
        <div className="image-text">
          <p className="first-text">Programmatic TV advertising</p>
          <p className="second-text">
            Whether you’re looking for a Connected TV advertising platform to
            launch CTV ads, or an OTT advertising platform to access OTT
            inventory, Vironic has got you covered.
          </p>
        </div>

        <video
          width="700"
          height="500"
          autoPlay
          className="responsive-home"
          muted
        >
          <source src={backVideo} type="video/mp4"></source>
        </video>

        <div id="advertise"></div>
      </div>
    );
  }
}

export default Home;
