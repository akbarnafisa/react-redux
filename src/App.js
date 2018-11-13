import './styles/main.css'

import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Navbar from './components/layout/Navbar'

import Dashboard from './components/dashboard/Dashboard.js'

import ProjectDetails from './components/projects/ProjectDetails'
import CreateProject from './components/projects/CreateProject'

import SignIn from './components/auth/SignIn.js'
import SignUp from './components/auth/SignUp'

import TicTacToe from './components/tictactoe/tictactoe'
import Todo from './components/Todo/Todo'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar></Navbar>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/project/:id" component={ProjectDetails}></Route>
            <Route path="/createproject" component={CreateProject}></Route>
            <Route path="/signin" component={SignIn}></Route>
            <Route path="/signup" component={SignUp}></Route>
            <Route path="/tictactoe" component={TicTacToe}></Route>
            <Route path="/todo" component={Todo}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
