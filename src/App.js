import React, { Component } from "react";
import "./App.css";
import AppHeader from "./components/AppHeader";
import AppMain from "./components/AppMain";
import { BrowserRouter as Router } from "react-router-dom";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: "incomplete",
      tasks: [
        {
          id: 1,
          name: "Learn React",
          completed: false,
        },
        {
          id: 2,
          name: "Take a break",
          completed: false,
        },
        {
          id: 3,
          name: "Make to-do list app",
          completed: true,
        },
      ],
    };
  }

  setTab = (tabName) => {
    this.setState({
      tab: tabName,
    });
  };

  toggleCompleted = (tasks, id) => {
    this.setState({
      tasks: tasks.map((task) => {
        if (task.id === id) {
          task.completed = !task.completed;
        }
        return task;
      }),
    });
  };

  addTask = (tasks, name) => {
    if (name !== null && name.trim() !== "") {
      this.setState({
        tasks: [
          ...tasks,
          {
            id: Math.floor(Math.random() * Math.floor(1000)) + 1,
            name,
            completed: false,
          },
        ],
      });
    }
  };

  deleteTask = (tasks, id) => {
    this.setState({
      tasks: [...tasks.filter((task) => task.id !== id)],
    });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <AppHeader
            activeTasks={this.state.tasks.length}
            tab={this.state.tab}
            setTab={this.setTab}
          />
          <AppMain
            tasks={this.state.tasks}
            toggleCompleted={this.toggleCompleted}
            deleteTask={this.deleteTask}
            addTask={this.addTask}
          />
        </div>
      </Router>
    );
  }
}

export default App;
