import React, { useState, useEffect } from 'react';
import { withAuthenticator, AmplifySignOut, AmplifyAuthenticator } from '@aws-amplify/ui-react';
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import "bootswatch/dist/sketchy/bootstrap.min.css";
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import { BrowserRouter as Router, Link, Switch, Route, Redirect, useParams } from 'react-router-dom';
import { Home } from './Pages/Home'
import { FoodSearch } from './Pages/FoodSearch'
import { MealLog } from './Pages/MealLog'
import './App.css';
import { About } from './Pages/About'


const App = () => {

  const [authState, setAuthState] = useState();
  const [user, setUser] = useState();

    useEffect(() => {
        onAuthUIStateChange((nextAuthState, authData) => {
            setAuthState(nextAuthState);
            setUser(authData)
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
              <Navbar.Brand><Link className="App-link" to="/home">HOME</Link></Navbar.Brand>
              <Navbar.Brand><Link className="App-link" to="/search">FOOD SEARCH</Link></Navbar.Brand>
              <Navbar.Brand><Link className="App-link" to="/data">DATA</Link></Navbar.Brand>
              <Navbar.Brand><Link className="App-link" to="/about">ABOUT</Link></Navbar.Brand>
            </Navbar>
          </div>
          <Switch>
            <Route exact path="/about">
              <About />
            </Route>
            {authState === AuthState.SignedIn && user ? (
              <div>
              <Route exact path='/home' >
                <Home user={user}/>
              </Route>
              <Route exact path="/data">
                <MealLog />
              </Route>
              <Route exact path="/search">
                <FoodSearch />
              </Route>
              </div>) :(
            <AmplifyAuthenticator/> ) }
          </Switch>
        </Router>
      </header>
    </div>
  );

}

export default App;
