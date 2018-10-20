import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AppMap from './components/AppMap.js'
import Footer from './components/Footer'



class App extends Component {
  render() {
    return (
      <div>
        <AppMap></AppMap>
        
        <Footer></Footer>
        
      </div>
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </div>
    );
  }
}

export default App;
