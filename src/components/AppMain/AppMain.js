import React, { Component } from "react";
import "./AppMain.css";
import MainNewTask from "../MainNewTask";
import MainTaskList from "../MainTaskList";
import MainCompletedTaskList from "../MainCompletedTaskList";
import { Route } from "react-router-dom";

export class AppMain extends Component {
  render() {
    return (
      <div className="app-main">
        <Route
          exact
          path="/"
          render={(props) => (
            <React.Fragment>
              <MainNewTask
                tasks={this.props.tasks}
                addTask={this.props.addTask}
              />
              <MainTaskList
                tasks={this.props.tasks}
                toggleCompleted={this.props.toggleCompleted}
                deleteTask={this.props.deleteTask}
              />
            </React.Fragment>
          )}
        />
        <Route
          path="/completed"
          render={(props) => (
            <React.Fragment>
              <MainCompletedTaskList
                tasks={this.props.tasks}
                toggleCompleted={this.props.toggleCompleted}
                deleteTask={this.props.deleteTask}
              />
            </React.Fragment>
          )}
        />
      </div>
    );
  }
}

export default AppMain;
