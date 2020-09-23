import React, { Component } from "react";

class Monetizaion extends Component {
  render() {
    return (
      <div>
        <div className="strip-green">
          <h1 className="title-advertisers">Monetization</h1>

          <div className="boxes">
            <div className="box">
              <h1 className="subline"> Global Demand</h1>
              <p className="subline-text">
                We help you monetize your audience with global demand from the
                world’s largest mobile advertisers. Maximize your yield through
                brand safe content and dedicated service.
              </p>
            </div>
            <div className="box">
              <h1 className="subline"> Engaging Ad Formats</h1>
              <p className="subline-text ">
                Excite users with ad formats that enhance your app experience.
                <br></br>
                Power your full screen, vertical, and in-feed placements with
                the highest quality ads
              </p>
            </div>
            <div className="box">
              <h1 className="subline"> Transparent Reporting</h1>
              <p className="subline-text">
                Reporting on all advertiser campaigns running across publishers’
                websites: campaign & viewability reports, audience insights and
                inventory quality analysis.
              </p>
            </div>

            <div className="box">
              <h1 className="subline">
                {" "}
                Programmatic Integration <br></br>
              </h1>
              <p id="contact" className="subline-text">
                We provide automated solutions for you to maximize your revenue
                potential, while preserving the viewer experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Monetizaion;
