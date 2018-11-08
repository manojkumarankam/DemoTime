import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Router, Route } from "react-router-dom";
import { history } from "./history/history";
import ListTask from "./appComponents/list-task";
import AddEditTask from "./appComponents/add-edit-task";

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <Route exact path="/" component={ListTask}></Route>
          <Route exact path="/list-task" component={ListTask}></Route>
          <Route exact path="/add-edit-task/:id" component={AddEditTask}></Route>
        </div>
      </Router>
    );
  }
}

export default App;
