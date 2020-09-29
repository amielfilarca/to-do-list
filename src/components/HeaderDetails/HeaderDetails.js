import React, { Component } from "react";
import { format } from "date-fns";
import "./HeaderDetails.css";

export class HeaderDetails extends Component {
  render() {
    const currentDate = format(new Date(), "EEEE, LLLL d");
    const activeTasks = `${this.props.activeTasks} Active Tasks`;
    let greeting = null;
    if (this.props.user) {
      greeting = `Welcome ${this.props.user.displayName}, you have`;
    }
    return (
      <div className="header-details">
        <p className="header-details--current-date">{currentDate}</p>
        {this.props.user && <p>{greeting}</p>}
        <p className="header-details--active-tasks">{activeTasks}</p>
      </div>
    );
  }
}

export default HeaderDetails;
