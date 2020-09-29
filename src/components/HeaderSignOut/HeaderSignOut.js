import React, { Component } from "react";
import "./HeaderSignOut.css";

export class HeaderSignOut extends Component {
  render() {
    return (
      <button onClick={this.props.signOut.bind(this)} className="sign-out-button">
        Sign-out
      </button>
    );
  }
}

export default HeaderSignOut;
