import React from "react";

import "./Overlay.css";
import { Z_ASCII } from "zlib";

export default class Overlay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      style: {
        left: "100%"
      },
      menu: true
    };

    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }

  close = e => {
    e.preventDefault();
    this.setState({
      style: {
        left: "100%"
      },
      menu: !this.state.menu
    });
  };

  open = e => {
    e.preventDefault();
    this.setState({
      style: {
        left: "0%"
      },
      menu: !this.state.menu
    });
  };

  render() {
    return (
      <div>
        {this.state.menu ? (
          <button
            onClick={this.open}
            className="hamburger hamburger--spring"
            type="button"
          >
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
        ) : (
          <button
            onClick={this.close}
            className="hamburger hamburger--spring is-active "
            type="button"
            style={{ zIndex: "30" }}
          >
            <span className="hamburger-box ">
              <span className="hamburger-inner"></span>
            </span>
          </button>
        )}

        <div id="myNav" className="overlay " style={this.state.style}>
          <div className="overlay-content">
            <a
              onClick={e => {
                this.close(e);
                window.location.assign("/#advertise");
              }}
            >
              Advertisers{" "}
            </a>
            <a
              onClick={e => {
                this.close(e);

                // window.location.assign("/#monetization");
              }}
              href="#"
            >
              Publishers
            </a>

            <a
              onClick={e => {
                this.close(e);
                window.location.assign("/#contact");
              }}
              href="#"
            >
              Contact
            </a>
            <a href="/login">Login</a>
          </div>
        </div>
      </div>
    );
  }
}
