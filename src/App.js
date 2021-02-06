import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link, Switch, Route, Redirect } from 'react-router-dom';
import { Home } from './Pages/Home'
import { FoodSearch } from './Pages/FoodSearch'
import { Login } from './Components/Login'
import { MealLog } from './Pages/MealLog'
import axios from 'axios';
import logo from './RangeRevealLogo.svg';
import './App.css';
import {login, authFetch, useAuth, logout} from "./auth"
// import { Logo } from './Components/Logo'

// login, thanks to: https://yasoob.me/posts/how-to-setup-and-deploy-jwt-auth-using-react-and-flask/
const PrivateRoute = ({ component: Component, ...rest }) => {
  const [logged] = useAuth();

  return <Route {...rest} render={(props) => (
    logged
      ? <Component {...props} />
      : <Redirect to='/login' />
  )} />
}

function App() {

  return (
    <div className="App">
      <div className="container">
        <div className="text">
          {/* <Logo /> */}
        </div>
      </div>
      <header className="App-header">
        <img src={logo} alt="Logo" className="App-logo" />
        <Router>
          <div>
            <nav>
              <ul>
                <li className='App-list'>
                  <Link to='/login'>Login</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div>
            {/* navigation bar with links to pages */}
            <Link className="App-link" to="/home">HOME</Link>&nbsp;|&nbsp;
            <Link className="App-link" to="/search">FOOD SEARCH</Link>&nbsp;|&nbsp;
            <Link className="App-link" to="/data">DATA</Link>&nbsp;|&nbsp;
            <Link className="App-link" to="/about">ABOUT</Link>
          </div>
          <Switch>
            <Route exact path='/login'>
              <Login />
            </Route>
            <Route exact path='/home'>
              <Home />
            </Route>
            <Route exact path="/about">
              <p>about page placeholder</p>
            </Route>
            <PrivateRoute exact path="/data" component={MealLog} />
            <PrivateRoute path="/search" component={FoodSearch} />
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
