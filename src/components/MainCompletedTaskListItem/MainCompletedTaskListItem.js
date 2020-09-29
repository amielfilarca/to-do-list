import React, { Component } from "react";
import "./MainCompletedTaskListItem.css";

export class MainCompletedTaskListItem extends Component {
  render() {
    const { id, name } = this.props.task;
    const tasks = this.props.tasks;
    return (
      <li className="completed-task-list-item">
        <button
          onClick={this.props.toggleCompleted.bind(this, tasks, id)}
          className="completed-task-list-item--mark-incomplete-button"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.33929 4.46777H7.33929V7.02487C8.52931 6.08978 10.0299 5.53207 11.6607 5.53207C15.5267 5.53207 18.6607 8.66608 18.6607 12.5321C18.6607 16.3981 15.5267 19.5321 11.6607 19.5321C9.51025 19.5321 7.58625 18.5623 6.30219 17.0363L7.92151 15.8515C8.83741 16.8825 10.1732 17.5321 11.6607 17.5321C14.4222 17.5321 16.6607 15.2935 16.6607 12.5321C16.6607 9.77065 14.4222 7.53207 11.6607 7.53207C10.5739 7.53207 9.56805 7.87884 8.74779 8.46777L11.3393 8.46777V10.4678H5.33929V4.46777Z"
              fill="currentColor"
            />
          </svg>
        </button>
        <p className="completed-task-list-item--task-name">{name}</p>
        <button
          onClick={this.props.deleteTask.bind(this, tasks, id)}
          className="completed-task-list-item--delete-button svg"
        >
          <svg
            className="svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="svg"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17 5V4C17 2.89543 16.1046 2 15 2H9C7.89543 2 7 2.89543 7 4V5H4C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H5V18C5 19.6569 6.34315 21 8 21H16C17.6569 21 19 19.6569 19 18V7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H17ZM15 4H9V5H15V4ZM17 7H7V18C7 18.5523 7.44772 19 8 19H16C16.5523 19 17 18.5523 17 18V7Z"
              fill="currentColor"
            />
            <path className="svg" d="M9 9H11V17H9V9Z" fill="currentColor" />
            <path className="svg" d="M13 9H15V17H13V9Z" fill="currentColor" />
          </svg>
        </button>
      </li>
    );
  }
}

export default MainCompletedTaskListItem;
