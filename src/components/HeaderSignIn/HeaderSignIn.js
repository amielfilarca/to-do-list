import React, { Component } from "react";
import "./HeaderSignIn.css";

export class HeaderSignIn extends Component {
  render() {
    return (
      <button
        onClick={this.props.signIn.bind(this)}
        className="sign-in-button"
      >
        Sign-in
      </button>
    );
  }
}

export default HeaderSignIn;
