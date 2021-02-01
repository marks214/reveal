import React, { useState, useEffect } from 'react';
import { BrowserRouter, Link, Switch, Route, Router } from 'react-router-dom';
import { Home } from './Pages/Home'
import { FoodSearch } from './Pages/FoodSearch'
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <div>
            {/* navigation bar with links to pages */}
            <Link className="App-link" to="/home">HOME</Link>&nbsp;|&nbsp;
            <Link className="App-link" to="/search">FOOD SEARCH</Link>&nbsp;|&nbsp;
            <Link className="App-link" to="/data">DATA</Link>&nbsp;|&nbsp;
            <Link className="App-link" to="/about">ABOUT</Link>
          </div>
          <Switch>
            <Route exact path='/home'>
              <Home />
            </Route>
            <Route exact path="/data">
              <p>user data placeholder</p>
            </Route>
            <Route exact path="/about">
              <p>about page placeholder</p>
            </Route>
            <Route path="/:food">
              <FoodSearch />
            </Route>
          </Switch>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
