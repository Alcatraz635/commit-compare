import React from 'react';
import Users from '../users/Users';
import logo from './logo.svg';
import './App.css';

const App = () => (
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to React</h2>
    </div>
    <Users />
  </div>
);

export default App;
