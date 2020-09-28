import React, { Component } from "react";
import "./MainTaskList.css";
import MainTaskListItem from "../MainTaskListItem";

export class MainTaskList extends Component {
  render() {
    const { tasks } = this.props;

    return (
      <ul className="task-list">
        {tasks.map((task) =>
          task.completed ? null : (
            <MainTaskListItem
              task={task}
              key={task.id}
              toggleCompleted={this.props.toggleCompleted}
              deleteTask={this.props.deleteTask}
              tasks={this.props.tasks}
            />
          )
        )}
      </ul>
    );
  }
}

export default MainTaskList;
