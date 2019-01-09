import React, { Component } from 'react';
import { Route } from 'react-router';
import { LogIn } from './components/LogIn';
import { TeamLeaderPage } from './components/TeamLeaderPage';
import { Employees } from './components/Employees';




export default class App extends Component {
    displayName = App.name;


  render() {
      return (
          <div>
              <Route exact path='/' component={LogIn} />
              <Route path='/TeamLeader' component={TeamLeaderPage} />
              <Route path='/Employees' component={Employees} />
          </div>
    );
  }
}
