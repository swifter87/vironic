import React, { Component } from "react";

class Advertisers extends Component {
  render() {
    return (
      <div className="strip-blue">
        <h1 className="title-advertisers">Advertisers</h1>
        {/* <div className="image_background responsive"></div> */}

        <h4 className="ad-title">
          Programmatically reach your audiences across both Vironic-owned apps
          and eading publishers’ apps through direct inventory and third-party
          exchanges.
        </h4>

        <div className="cards">
          <div className="card">
            <h3> Cross-platform</h3>

            <p className="description">
              We allow you to easily tap into the fastest growing user segment
              and reach your desired audiences on all devices whether it’s
              Android, Apple, or Roku.
            </p>
          </div>
          <div className="card">
            <h3>Viewable Impressions</h3>
            <p className="description">
              We understand the importance of your brand impact. That’s why we
              focus on ensuring our publishers deliver the most viewable
              impressions.
            </p>
          </div>
          <div className="card">
            <h3> Brand Safety</h3>
            <p className="description">
              We have a low acceptance rate and we only allow publishers with
              controlled and regulated quality content into our network.
            </p>
          </div>
          <div className="card">
            <h3> Premium Content</h3>
            <p className="description">
              Lots of traffic doesn’t necessarily equal leads and sales,
              therefore we aim for the best traffic rather than most traffic by
              working with premium publishers only.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Advertisers;
