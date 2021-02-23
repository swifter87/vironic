import React from "react";
import { Link } from "react-router-dom";

import "./Overlay.css";

export default class Overlay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      style: {
        left: "100%",
      },
      menu: true,
    };

    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }

  close = (e) => {
    this.setState({
      style: {
        left: "100%",
      },
      menu: !this.state.menu,
    });
  };

  open = (e) => {
    e.preventDefault();
    this.setState({
      style: {
        left: "0%",
      },
      menu: !this.state.menu,
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
              href="/#"
              onClick={(e) => {
                e.preventDefault();
                this.close(e);
                window.location.assign("/#advertise");
              }}
            >
              Buyers{" "}
            </a>
            <a
              href="/#"
              onClick={(e) => {
                e.preventDefault();
                this.close(e);
                window.location.assign("/#monetization");
              }}
            >
              Sellers
            </a>

            <a
              href="/#"
              onClick={(e) => {
                e.preventDefault();
                this.close(e);
                window.location.assign("/#contact");
              }}
            >
              Contact
            </a>
            <Link
              to="/Login"
              style={{ color: "#a3ddcb", fontWeight: "bold" }}
              className="link"
              onClick={(e) => this.close(e)}
            >
              Log in
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
