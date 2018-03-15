import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import routes from './Routes';
import { Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
            {/* <Link to="/"> Home </Link>
            <Link to="/about"> About </Link>
            <Link to="/products"> Products </Link> */}
        { routes }
      </div>
    );
  }
}

export default App;
