import React, { Component } from "react";
import ott from "../ott.png";

class UserAquisition extends Component {
  render() {
    return (
      <div className="strip-white">
        <div className="container">
          <div>
            <h1
              className="title-ott "
              style={{
                color: "#a833f7",
              }}
            >
              OTT App Development
            </h1>

            <ul className="text">
              <li className="list">
                We develop an OTT app that is highly functional and
                customization can be done as per the requirements of your
                business.
              </li>

              <li className="list">
                We provide a smooth UI/UX design that offers seamless streaming
                experience to your users including best viewing experience.
              </li>
              <li className="list">
                Our technical experts consistently update your apps with
                innovative tools/technologies to ensure your app that meets
                current market standard.
              </li>
            </ul>
          </div>

          <img
            src={ott}
            className="responsive"
            alt=""
            width="714"
            height="auto"
          ></img>
        </div>

        <div id="monetization"></div>
      </div>
    );
  }
}

export default UserAquisition;
