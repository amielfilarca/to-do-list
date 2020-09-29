import React, { Component } from "react";
import "./AppHeader.css";
import HeaderDetails from "../HeaderDetails";
import HeaderNav from "../HeaderNav";
import HeaderSignIn from "../HeaderSignIn";
import HeaderSignOut from "../HeaderSignOut";

export class AppHeader extends Component {
  render() {
    return (
      <header className="app-header">
        <HeaderDetails
          activeTasks={this.props.activeTasks}
          user={this.props.user}
        />
        <HeaderNav tab={this.props.tab} setTab={this.props.setTab} />
        {this.props.user ? (
          <HeaderSignOut signOut={this.props.signOut} />
        ) : (
          <HeaderSignIn signIn={this.props.signIn} />
        )}
      </header>
    );
  }
}

export default AppHeader;
