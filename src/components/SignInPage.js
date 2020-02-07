import React, { Component } from "react";

export class SignInPage extends Component {
  render() {
    return (
      <div className="ui clearing segment Page">
        <h1 className="ui center aligned header">Sign In</h1>
        <form className="ui large form">
          <div className="field">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" required />
          </div>
          <div className="field">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" required />
          </div>

          <input
            className="ui right floated orange button"
            type="submit"
            value="Sign In"
          />
        </form>
      </div>
    );
  }
}
