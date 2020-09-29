import React, { Component } from "react";
import "./App.css";
import AppHeader from "./components/AppHeader";
import AppMain from "./components/AppMain";
import { BrowserRouter as Router } from "react-router-dom";
import firebase, { auth } from "./firebase";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      tab: "incomplete",
      tasks: [
        {
          id: 1,
          name: "Welcome to to—do list",
          completed: false,
        },
        {
          id: 2,
          name: "Sign-in to save your data",
          completed: false,
        },
        {
          id: 3,
          name: "Make a to-do list app",
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
    let completed = false;

    this.setState({
      tasks: tasks.map((task) => {
        if (task.id === id) {
          completed = !task.completed;
          task.completed = completed;
        }
        return task;
      }),
    });

    if (this.state.user) {
      firebase.firestore().collection("tasks").doc(id).update({
        completed,
      });
    }
  };

  addTask = async (tasks, name) => {
    if (name !== null && name.trim() !== "") {
      let takenIDArray = tasks.map((task) => task.id);
      let availableIDArray = [];
      for (let i = 0; i < takenIDArray.length + 1; i++) {
        if (!takenIDArray.includes(i)) {
          availableIDArray.push(i);
        }
      }

      this.setState({
        tasks: [
          ...tasks,
          {
            id:
              availableIDArray[
                Math.floor(Math.random() * Math.floor(availableIDArray.length))
              ],
            name,
            completed: false,
          },
        ],
      });

      if (this.state.user) {
        return firebase
          .firestore()
          .collection("tasks")
          .add({
            uid: auth.currentUser.uid,
            name,
            completed: false,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
          })
          .catch(function (error) {
            console.error("Error writing new task to Firebase Database", error);
          })
          .then(this.fetchData());
      }
    }
  };

  deleteTask = async (tasks, id) => {
    this.setState({
      tasks: [...tasks.filter((task) => task.id !== id)],
    });
    if (this.state.user) {
      await firebase.firestore().collection("tasks").doc(id).delete();
    }
  };

  signIn = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    await auth.signInWithPopup(provider);
    this.setState({
      user: auth.currentUser,
    });
    this.fetchData();
  };

  signOut = async () => {
    await auth.signOut();
    this.setState({
      user: auth.currentUser,
    });
  };

  fetchData = async () => {
    let newState = [];

    await firebase
      .firestore()
      .collection("tasks")
      .where("uid", "==", auth.currentUser.uid)
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          let taskData = doc.data();
          taskData.id = doc.id;
          newState.push(taskData);
        });
      })
      .catch(function (error) {
        console.log("Error getting documents: ", error);
      });

    this.setState({
      tasks: newState,
    });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <AppHeader
            activeTasks={
              this.state.tasks.filter((task) => task.completed === false).length
            }
            tab={this.state.tab}
            setTab={this.setTab}
            user={this.state.user}
            signIn={this.signIn}
            signOut={this.signOut}
          />
          <AppMain
            tasks={this.state.tasks}
            toggleCompleted={this.toggleCompleted}
            deleteTask={this.deleteTask}
            addTask={this.addTask}
            user={this.state.user}
          />
        </div>
      </Router>
    );
  }
}

export default App;
