import React, { useState, useEffect } from 'react';
import "bootswatch/dist/sketchy/bootstrap.min.css";
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import { BrowserRouter as Router, Link, Switch, Route, Redirect } from 'react-router-dom';
import { Home } from './Pages/Home'
import { FoodSearch } from './Pages/FoodSearch'
import { Login } from './Components/Login'
import { MealLog } from './Pages/MealLog'
import axios from 'axios';
import logo from './RangeRevealLogo.svg';
import './App.css';
import { login, authFetch, useAuth, logout } from "./auth"
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
        {/* <img src={logo} alt="Logo" className="App-logo" /> */}
        <Router>
          <div>
            {/* navigation bar with links to pages */}
            <Navbar bg='dark' variant='dark' fixed='top' className="container-fluid">
                <Navbar.Brand><Link className="App-link" to="/home">HOME</Link></Navbar.Brand>
                <Navbar.Brand><Link className="App-link" to="/search">FOOD SEARCH</Link></Navbar.Brand>
                <Navbar.Brand><Link className="App-link" to="/data">DATA</Link></Navbar.Brand>
                <Navbar.Brand><Link className="App-link" to="/about">ABOUT</Link></Navbar.Brand>
                <Navbar.Brand className='ml-auto'><Link className="App-link" to='/login'>Login</Link></Navbar.Brand>
            </Navbar>
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
