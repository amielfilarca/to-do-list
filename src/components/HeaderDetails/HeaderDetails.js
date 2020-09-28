import React, { Component } from "react";
import { format } from "date-fns";
import "./HeaderDetails.css";

export class HeaderDetails extends Component {
  render() {
    const currentDate = format(new Date(), "EEEE, LLLL d");
    const activeTasks = `${this.props.activeTasks} Active Tasks`;

    return (
      <div className="header-details">
        <p className="header-details--current-date">{currentDate}</p>
        <p className="header-details--active-tasks">{activeTasks}</p>
      </div>
    );
  }
}

export default HeaderDetails;
