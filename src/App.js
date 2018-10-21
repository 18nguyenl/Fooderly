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
    );
  }
}

export default App;
