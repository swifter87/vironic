import React, { Component } from "react";
import video2 from "../video2.gif";

class Advertisers extends Component {
  render() {
    return (
      <div className="strip-blue">
        <h1 className="title-advertisers">Advertisers</h1>

        <img
          src={video2}
          className="responsive"
          alt=""
          width="525"
          height="350"
          style={{ height: "auto" }}
        />
        <div className="cards">
          <div className="card">
            <h3> Scale</h3>

            <p className="description">
              Global user base lets you scale across non-gaming, gaming, social
              apps, and more. Over 100M monthly unique impressions for  in-app
              and CTV.
            </p>
          </div>
          <div className="card">
            <h3>Inventory</h3>
            <p className="description">
              All screens and environments: Premium display and video ad
              inventory across Desktop, Mobile, In-App and CTV.
            </p>
          </div>
          <div className="card">
            <h3> Brand Safety</h3>
            <p className="description">
              Constant and consistent application of new technologies to ensure
              a transparent trading environment. Certified third-party ad
              quality partner: Pixalate.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Advertisers;
