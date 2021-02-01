import React, { useState, useEffect } from 'react';
import { BrowserRouter, Link, Switch, Route, Router } from 'react-router-dom';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

function App() {
  const [test, setTest] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    axios.get('/')
      .then(response => {
        const result = response.data;
        console.log(result);
        setTest(result);
      })
      .catch((error) => {
        setErrorMessage(error.message);
        console.log(errorMessage);
      });
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <div>
            {/* navigation bar with links to pages */}
            <Link className="App-link" to="/">HOME</Link>&nbsp;|&nbsp;
            <Link className="App-link" to="/search">FOOD SEARCH</Link>&nbsp;|&nbsp;
            <Link className="App-link" to="/data">DATA</Link>&nbsp;|&nbsp;
            <Link className="App-link" to="/about">ABOUT</Link>
          </div>
          <Switch>
            <Route exact path='/'>
              <p>Home placeholder</p>
            </Route>
            <Route exact path="/data">
              <p>user data placeholder</p>
            </Route>
            <Route exact path="/about">
              <p>about page placeholder</p>
            </Route>
            <Route path="/:food">
              <p>food search placeholder</p>
            </Route>
          </Switch>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
