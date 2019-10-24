import React from "react";

import "./Overlay.css";

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
        <button
          onClick={this.open}
          className="hamburger hamburger--spring"
          type="button"
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>

        <div id="myNav" className="overlay " style={this.state.style}>
          <nav className="header close-btn">
            <button
              onClick={this.close}
              className="hamburger hamburger--spring is-active "
              type="button"
            >
              <span className="hamburger-box ">
                <span className="hamburger-inner"></span>
              </span>
            </button>
          </nav>
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
                window.location.assign("/#monetization");
              }}
              href="#"
            >
              Publishers
            </a>
            <a href="#">Clients</a>
            <a
              onClick={e => {
                this.close(e);
                window.location.assign("/#contact");
              }}
              href="#"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    );
  }
}
