import React, { Component } from "react";
import user from "../user3.gif";

class UserAquisition extends Component {
  render() {
    return (
      <div className="strip-white">
        <div className="container">
          <div>
            <h1
              className="title-advertisers left"
              style={{
                color: "#a833f7",
              }}
            >
              App Developers
            </h1>

            <ul className="text">
              <li className="list">
                Premium CPMs based on direct brand and agency sales partnerships
              </li>
              <li className="list">
                Multiple non-SDK integration options, such as RTB, S2S,
                Traditional AdTag
              </li>

              <li className="list">
                Sophisticated publisher reporting UI or APIs providing data
                against your supply
              </li>
            </ul>
          </div>

          <img
            src={user}
            className="responsive"
            alt=""
            width="214"
            height="462"
          ></img>
        </div>

        {/* Swifter provides publishers monetization opportunities with a suite
              of cross-platform ad formats that range from video (in-stream and
              interactive in-stream video), to rich media and native units. All
              our ad formats adhere to the latest VAST, VPAID or MRAID standards. */}

        <div id="monetization"></div>
      </div>
    );
  }
}

export default UserAquisition;
