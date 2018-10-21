import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AppMap from './components/AppMap.js'
import Footer from './components/Footer'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Row, Col, Container} from 'reactstrap'
import WebFont from 'webfontloader'
import AreaList from './components/AreaList'
import AreaButton from './components/AreaButton'
import Search from './components/Search'
import JumboImage from './resc/wheat.png'

library.add(faBars);

WebFont.load({
  google: {
    families: ['Paytone One', 'K2D', 'sans-serif']
  }
});

const styles = {
  app: {
    padding: "0",
    paddingLeft: "4vw",
    paddingRight: "5vw",
    minHeight: "100vh",
    minWidth: "100vw",
    background: "linear-gradient(180deg, #FF9595 0%, #1E1E1E 50.83%)",
  },
  logo: {
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    top: "4vh", 
    left: "4w",
    fontFamily: "'Paytone One', sans-serif",
    color: "#BC1E1E",
  },
  jumbotron: {
    height: "60vh",
    marginBottom: "3vh",
    padding: "3vh 3vw",
  },
  jumbotronImage: {
    position: "absolute",
    display: "inline-block",
    zIndex: "0",
    left: "4vw",
    top: "5vh",
    mixBlendMode: "multiply",
  },
  intro: {
    overflowY: "hidden",
    color: "#EBEBEB",
    fontFamily: "'K2D', sans-serif",
    lineHeight: "2",
    position: "relative",
    minHeight: "50px",
    minWidth: "180px",
    maxHeight: "200px",
    maxWidth: "40vw",
    marginLeft: "30vw",
    top: "15vh",
    left: "10vw",
    right: "10vw",
  },
  h1: {
    position: "relative", 
    overflowY: "hidden",
    color: "#EBEBEB",
    fontFamily: "'Paytone One', sans-serif",
    fontSize: "48px",
    marginBottom: "15px",
    letterSpacing: "3px",
  },
  search: {
    marginTop: "30px",
    marginBottom: "70px",
  }
}

class App extends Component {
  render() {
    return (
      <Container fluid style={styles.app}>
          <div style={styles.logo}>
            <FontAwesomeIcon icon="bars" size="2x" style={{color: "#EBEBEB", display: "inline-block"}}/>
            <span style={{display: "inline-block", marginLeft: "30px", fontSize: "40px"}}>FOODERLY</span>
          </div>

          <section style={styles.jumbotron}>
            <img src={JumboImage} style={styles.jumbotronImage}/>
            <p style={styles.intro}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ullamcorper sit amet nibh nec sodales. Nunc quis placerat quam. Nulla at volutpat sapien. Donec et erat tempus, vehicula mi et, vehicula turpis. Donec metus lacus, mollis id nisi sed, dictum dignissim felis. Duis porttitor risus at sem dignissim imperdiet. Duis ornare mollis ipsum aliquam suscipit. 
            </p>
          </section>
          <section>
            <h1 style={styles.h1}>
              AREAS IN NEED
            </h1>

            <Search style={styles.search}/>

            <AreaList>
              <AreaButton county="Tarrant County" beginColor="FF0000" endColor="FF800B"/>
              <AreaButton county="Jones County" beginColor="FF0000" endColor="FF800B"/>
              <AreaButton county="Harp County" beginColor="FF0000" endColor="FF800B"/>
              <AreaButton county="Jes County" beginColor="FF0000" endColor="FF800B"/>
              <AreaButton county="Tarrant County" beginColor="FF0000" endColor="FF800B"/>
              <AreaButton county="Jones County" beginColor="FF0000" endColor="FF800B"/>
              <AreaButton county="Harp County" beginColor="F53E15" endColor="FFBF1B"/>
              <AreaButton county="Jes County" beginColor="F53E15" endColor="FFBF1B"/>
              <AreaButton county="Tarrant County" beginColor="FF9900" endColor="FF800B"/>
              <AreaButton county="Jones County" beginColor="FF9900" endColor="EBEF1F"/>
              <AreaButton county="Harp County" beginColor="F53E15" endColor="FFBF1B"/>
              <AreaButton county="Jes County" beginColor="F53E15" endColor="FFBF1B"/>
              <AreaButton county="Tarrant County" beginColor="F53E15" endColor="FF800B"/>
              <AreaButton county="Jones County" beginColor="FF9900" endColor="EBEF1F"/>
              <AreaButton county="Harp County" beginColor="FF0000" endColor="FF800B"/>
              <AreaButton county="Jes County" beginColor="FF0000" endColor="FF800B"/>
              <AreaButton county="Tarrant County" beginColor="FF0000" endColor="FF800B"/>
              <AreaButton county="Jones County" beginColor="FF0000" endColor="FF800B"/>
              <AreaButton county="Harp County" beginColor="FF0000" endColor="FF800B"/>
              <AreaButton county="Jes County" beginColor="FF0000" endColor="FF800B"/>
            </AreaList>
          </section>
          <AppMap></AppMap>
          
          {/* <Footer></Footer> */}
      </Container>
    );
  }
}

export default App;
