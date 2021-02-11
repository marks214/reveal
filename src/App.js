import React, { useState, useEffect } from 'react';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import "bootswatch/dist/sketchy/bootstrap.min.css";
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import { BrowserRouter as Router, Link, Switch, Route, Redirect, useParams } from 'react-router-dom';
import { Home } from './Pages/Home'
import { FoodSearch } from './Pages/FoodSearch'
import { MealLog } from './Pages/MealLog'
import axios from 'axios';
import './App.css';
import { About } from './Pages/About'
import { Login } from './Components/Login'
import { isLogin } from './utils/index';
import {login, authFetch, useAuth, logout} from "./utils/index"

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [logged] = useAuth();

  return <Route {...rest} render={(props) => (
    logged
      ? <Component {...props} />
      : <Redirect to='/home' />
  )} />
}

const App = ({ }) => {
  const [userName, setUserName] = useState(null);
  const backend_url = 'http://localhost:5000' //'https://rangereveal.aimeeoz.com'
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <div>
            {/* navigation bar with links to pages */}
            <Navbar bg='dark' variant='dark' fixed='top' className="container-fluid">
              <Navbar.Brand><Link className="App-link" to="/home">HOME</Link></Navbar.Brand>
              <Navbar.Brand><Link className="App-link" to="/search">FOOD SEARCH</Link></Navbar.Brand>
              <Navbar.Brand><Link className="App-link" to="/data">DATA</Link></Navbar.Brand>
              <Navbar.Brand><Link className="App-link" to="/about">ABOUT</Link></Navbar.Brand>
              {/* <Navbar.Brand className='ml-auto'><Link className="App-link" to='/login'><button>Login</button></Link></Navbar.Brand>
              <Navbar.Brand className=''><Link className="App-link" to='/login'><button>Logout</button></Link></Navbar.Brand> */}
            </Navbar>
          </div>
          <Switch>
            {/* <Route exact path='/login' component={() => {
              window.location.href = 'http://localhost:5000/api/sign_in';
              return null;
            }}> */}
            <Route exact path='/home' >
              <Home/> 
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/data">
              <MealLog/>
              </Route> 
            <Route exact path="/search">
              <FoodSearch />
            </Route>
          </Switch>
        </Router>
      </header>
    </div>
  );

  function Child() {
    let { username } = useParams();
    setUserName(username);
    console.log('here')
    console.log(userName)
    return (
      <div>{console.log(userName)}</div>
    )
    

  }
}

export default App;
