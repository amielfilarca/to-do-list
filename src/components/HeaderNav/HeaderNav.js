import React, { Component } from "react";
import "./HeaderNav.css";
import { Link } from "react-router-dom";

export class HeaderNav extends Component {
  render() {
    return (
      <ul className="nav-list">
        <li className="nav-list--item">
          <Link className="nav-list--link" to="/to-do-list/">
            Incomplete Tasks
          </Link>
        </li>
        <li className="nav-list--item">
          <Link className="nav-list--link" to="/to-do-list/completed">
            Completed Tasks
          </Link>
        </li>
      </ul>
    );
  }
}

export default HeaderNav;
