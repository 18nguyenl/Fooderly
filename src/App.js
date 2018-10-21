import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AppMap from './components/AppMap.js'
import Footer from './components/Footer'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Container} from 'reactstrap'
import AreaList from './components/AreaList'
import AreaButton from './components/AreaButton'
import WebFont from 'webfontloader'

library.add(faBars);

WebFont.load({
  google: {
    families: ['Paytone One', 'sans-serif']
  }
});

const styles = {
  app: {
    minHeight: "100vh",
    minWidth: "100vw",
    background: "linear-gradient(180deg, #FF9595 0%, #1E1E1E 50.83%)",
  },
  jumbotron: {
    height: "45vh",
  },
  h1: {
    color: "#EBEBEB",
    fontFamily: "'Paytone One', sans-serif",
    fontSize: "48px",
    marginBottom: "1.5em",
    letterSpacing: "3px",
  },
}

class App extends Component {
  render() {
    return (
      <Container fluid style={styles.app}>
          <section style={styles.jumbotron}>

          </section>
          <section>
            <h1 style={styles.h1}>
              <span style={styles.h1}>AREAS IN NEED</span>
            </h1>

            <AreaList>
              <AreaButton county="Tarrant County" beginColor="FF0000" endColor="FF800B"/>
              <AreaButton county="Jones County" beginColor="FF0000" endColor="FF800B"/>
              <AreaButton county="Harp County" beginColor="FF0000" endColor="FF800B"/>
              <AreaButton county="Jes County" beginColor="FF0000" endColor="FF800B"/>
            </AreaList>
          </section>
          <FontAwesomeIcon icon="bars"/>
          <AppMap></AppMap>
          
          <Footer></Footer>
      </Container>
    );
  }
}

export default App;
