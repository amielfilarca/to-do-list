import React, { Component } from "react";
import HeaderDetails from "../HeaderDetails";
import HeaderNav from "../HeaderNav";
import "./AppHeader.css";

export class AppHeader extends Component {
  render() {
    return (
      <header className="app-header">
        <HeaderDetails activeTasks={this.props.activeTasks} />
        <HeaderNav tab={this.props.tab} setTab={this.props.setTab} />
      </header>
    );
  }
}

export default AppHeader;
