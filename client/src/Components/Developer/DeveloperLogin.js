import React, { Component } from "react";

class DeveloperLogin extends Component {
  constructor() {
    super();
    this.state = {
      Email: "",
      Password: ""
    };
  }
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-lg" />
            <div className="col-lg m-5 p-5">
              <div className="form-group shadow-textarea" />
              <h3>Developer Login</h3>
              <input
                type="text"
                name="Email"
                onChange={this.onChange}
                className="form-control"
                placeholder="Email..."
                value={this.state.Email}
              />
              <br />
              <input
                type="password"
                name="Password"
                onChange={this.onChange}
                className="form-control"
                placeholder="Password..."
                value={this.state.Password}
              />
              <br />
              <button className="btn btn-primary " onClick={this.handleClick}>
                Log-In
              </button>
            </div>
            <div className="col-lg" />
          </div>
        </div>
      </div>
    );
  }
}

export default DeveloperLogin;
