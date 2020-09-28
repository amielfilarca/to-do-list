import React, { Component } from "react";
import "./MainNewTask.css";

export class MainNewTask extends Component {
  state = {
    name: "",
  };

  updateState = (e) => this.setState({ name: e.target.value });

  addTask = () => {
    this.props.addTask(this.props.tasks, this.state.name);
    this.setState({ name: "" });
  };

  keyPress(e) {
    if (e.keyCode === 13) {
      this.addTask();
    }
  }

  render() {
    return (
      <div className="new-task">
        <input
          className="new-task--text-input"
          type="text"
          placeholder="Enter a task..."
          value={this.state.name}
          onChange={this.updateState}
          onKeyDown={this.keyPress.bind(this)}
        />
        <button onClick={this.addTask} className="new-task--add-button">
          Add Task
        </button>
      </div>
    );
  }
}

export default MainNewTask;
