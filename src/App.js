import React from "react";

import "./App.css";
import logo from "./swifter_black.png";
import image from "./mobile.png";

import video2 from "./video2.gif";
import user from "./user.gif";

import Form from "./Form";
import Overlay from "./Overlay";

export default class App extends React.Component {
  render() {
    return (
      <div className="main">
        <div>
          <nav className="header">
            <div>
              <img src={logo} alt="Logo" className="logo" />
            </div>
            <Overlay />
            <div className="navigation">
              <a href="#">Home</a>
              <a href="#advertise">Advertisers</a>
              <a href="#monetization">Publishers</a>
              <a href="#contact">Contact</a>
            </div>
          </nav>

          <div className="container-home">
            <div className="image-text">
              <p className="first-text">Grow your mobile business</p>
              <p className="second-text">
                Whether you need to acquire high-quality users, boost engagement
                and retention, or maximize ad revenue, Swifter has you covered.
              </p>
              <button className="primary-btn">Find out more</button>
            </div>
            <div></div>
            <img
              src={image}
              className="responsive-home"
              alt="image"
              width="600"
              height="400"
            />
          </div>
          <div className="strip-blue" id="advertise">
            <h1 className="title-advertisers">Advertisers</h1>

            <img
              src={video2}
              className="responsive"
              alt="image"
              width="525"
              height="350"
              style={{ height: "auto" }}
            />
            <div className="cards">
              <div className="card">
                <h3>Inventory At Scale</h3>

                <p className="description">
                  Global user base lets you scale across non-gaming, gaming,
                  social apps, and more. Over 500M monthly unique users for
                  mobile in-app alone.
                </p>
              </div>
              <div className="card">
                <h3>Vpaid Mobile </h3>
                <p className="description">
                  Directly track viewability, completion and click-through rates
                  to see how individual ads are performing and devise improved
                  ways of engaging with mobile audiences.
                </p>
              </div>
              <div className="card">
                <h3> Brand Safety</h3>
                <p className="description">
                  Constant and consistent application of new technologies to
                  ensure a transparent trading environment. Certified
                  third-party ad quality partners: Pixalate, WhiteOps.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="strip-white">
          <div className="container">
            <div>
              <h1
                className="title-advertisers left"
                style={{
                  color: "#00abcd"
                }}
              >
                User Aquisition
              </h1>

              <ul className="text">
                <li className="list">
                  Tap into a database of 2 billion mobile profiles to identify
                  the most valuable players for your game
                </li>
                <li className="list">
                  Reach mobile app users programmatically in 165+ countries,
                  across 65,000 apps
                </li>
                <li className="list">Increase in-app purchases through</li>
                <li className="list">
                  CPA optimization Optimize for mobile gamers, not just installs
                </li>
              </ul>
            </div>

            <img
              src={user}
              className="responsive"
              alt="image"
              width="214"
              height="462"
            ></img>
          </div>

          {/* Swifter provides publishers monetization opportunities with a suite
              of cross-platform ad formats that range from video (in-stream and
              interactive in-stream video), to rich media and native units. All
              our ad formats adhere to the latest VAST, VPAID or MRAID standards. */}
        </div>
        <div className="strip-green" id="monetization">
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
              <p className="subline-text">
                We provide automated solutions for you to maximize your revenue
                potential, while preserving the viewer experience.
              </p>
            </div>
          </div>
        </div>

        <Form />
        <footer className="footer">
          <p>@ Copyright 2019 Global Promoting Services LTD.</p>
          <p>483 Green Lanes, London, N13 4BS, UK</p>
        </footer>
      </div>
    );
  }
}
