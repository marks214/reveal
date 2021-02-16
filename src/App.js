import React, { useState, useEffect } from 'react';
import { AmplifyAuthenticator } from '@aws-amplify/ui-react';
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import awsconfig from './aws-exports';
import "bootswatch/dist/sketchy/bootstrap.min.css";
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import NavbarBrand from 'react-bootstrap/NavbarBrand'
import Footer from './Components/Footer';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import { Home } from './Pages/Home'
import { FoodSearch } from './Pages/FoodSearch'
import { MealLog } from './Pages/MealLog'
import axios from 'axios';
import './App.css';
import { About } from './Pages/About'
import Amplify, { Cache } from 'aws-amplify';
Amplify.configure(awsconfig);


const App = () => {
  // const backend_url = 'http://localhost:5000'
  const backend_url = 'https://rangereveal.aimeeoz.com'
  axios.defaults.baseURL = backend_url;

  const [authState, setAuthState] = useState();
  const [user, setUser] = useState();

  useEffect(() => {
    onAuthUIStateChange((nextAuthState, authData) => {
      setAuthState(nextAuthState);
      setUser(authData)
      if (authData && authData.signInUserSession) {
        axios.defaults.headers.Authorization = 'Bearer ' + authData.signInUserSession.accessToken.jwtToken;
      }
      console.log(nextAuthState)
      console.log(authData)
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <div>
            <Navbar bg='dark' variant='dark' fixed='top' className="container-fluid">
              <Navbar.Brand><Link className="nav-link" to="/home">HOME</Link></Navbar.Brand>
              <Navbar.Brand><Link className="nav-link" to="/search">FOOD SEARCH</Link></Navbar.Brand>
              <Navbar.Brand><Link className="nav-link" to="/data">DATA</Link></Navbar.Brand>
              <Navbar.Brand><Link className="nav-link" to="/about">ABOUT</Link></Navbar.Brand>
            </Navbar>
          </div>
          <Switch>
            <Route exact path="/about">
              <About />
            </Route>
            {authState === AuthState.SignedIn && user ? (
              <div>
                <Route exact path='/home' >
                  <Home user={user} />
                </Route>
                <Route exact path="/data">
                  <MealLog user={user} />
                </Route>
                <Route exact path="/search">
                  <FoodSearch />
                </Route>
              </div>) : (<div>
                <AmplifyAuthenticator
                />
              </div>)}
          </Switch>
        </Router>
      </header>
      <div className='footer'>
        <footer>
          <Navbar bg='dark' variant='dark' fixed='bottom' className="footer">
              <Navbar.Brand>Aimee Oz &copy; 2021</Navbar.Brand>
          </Navbar>
          </footer>
      </div>
    </div>
  );

}

export default App;
