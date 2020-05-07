import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar.js';
import Dashboard from './components/dashboard/Dashboard';
import SeedDetails from './components/seeds/SeedDetails';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateSeed from './components/seeds/CreateSeed'
import PrivateRoute from './components/routes/PrivateRoute';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <PrivateRoute exact path='/' component={Dashboard} />
            <PrivateRoute path='/seed/:id' component={SeedDetails} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <PrivateRoute path='/create' component={CreateSeed} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
