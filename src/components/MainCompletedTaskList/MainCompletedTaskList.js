import React, { Component } from "react";
import "./MainCompletedTaskList.css";
import MainCompletedTaskListItem from "../MainCompletedTaskListItem";

export class MainCompletedTaskList extends Component {
  render() {
    const tasks = this.props.tasks;
    return (
      <ul className="completed-task-list">
        {tasks.map((task) =>
          task.completed ? (
            <MainCompletedTaskListItem
              task={task}
              key={task.id}
              tasks={this.props.tasks}
              toggleCompleted={this.props.toggleCompleted}
              deleteTask={this.props.deleteTask}
            />
          ) : null
        )}
      </ul>
    );
  }
}

export default MainCompletedTaskList;
