import React from "react";

import "./Login.css";
export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      message: "",
    };
  }

  change(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  onSubmit = (e) => {
    e.preventDefault();

    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          email: this.state.email,
          pass: this.state.password,
        },
      }),
    }).then(function () {});
    this.setState({
      email: "",
      password: "",
      message: "ERROR: Invalid user credentials.",
    });
    this.forceUpdate();
  };

  render() {
    return (
      <div>
        <div className="login-container">
          <h2 className="login">Log in </h2>
          <h4 className="error-message"> {this.state.message}</h4>
          <form onSubmit={this.onSubmit}>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Email"
              onChange={(e) => this.change(e)}
              required
              value={this.state.email}
            ></input>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              onChange={(e) => this.change(e)}
              required
              value={this.state.password}
            ></input>
            <div className="login-div">
              <button className="primary-btn" value="Login">
                Login
              </button>
              <a href="/" className="password-line">
                Reset password
              </a>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
