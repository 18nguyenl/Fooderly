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
import Legend from './components/Legend.js'

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
    background: "linear-gradient(180deg, #069E27 0%, #1E1E1E 50.83%)",
  },
  logo: {
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    top: "4vh", 
    left: "4w",
    fontFamily: "'Paytone One', sans-serif",
    color: "rgba(255, 255, 255, 60)",
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
    letterSpacing: "1px",
    fontSize: "20px",
    lineHeight: "2",
    position: "relative",
    minHeight: "50px",
    minWidth: "180px",
    maxHeight: "250px",
    maxWidth: "40vw",
    marginLeft: "30vw",
    top: "17vh",
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
  constructor() {
    super();
    this.state = {
      areas: [
        <AreaButton county="Tarrant County" beginColor="FFA800" endColor="EBEF1F"/>,
        <AreaButton county="Jones County" beginColor="069E27" endColor="79DA17"/>,
        <AreaButton county="Harp County" beginColor="069E27" endColor="79DA17"/>,
        <AreaButton county="Jes County" beginColor="F56615" endColor="FFBF1B"/>,
        <AreaButton county="McTinny County" beginColor="80CF00" endColor="E1E515"/>,
        <AreaButton county="Kale County" beginColor="FF0000" endColor="FF800B"/>,
        <AreaButton county="Harper County" beginColor="F53E15" endColor="FFBF1B"/>,
        <AreaButton county="Erjes County" beginColor="F53E15" endColor="FFBF1B"/>,
        <AreaButton county="Gudalupe County" beginColor="F56615" endColor="FF800B"/>,
        <AreaButton county="McCumb County" beginColor="FF9900" endColor="EBEF1F"/>,
        <AreaButton county="Parm County" beginColor="80CF00" endColor="E1E515"/>,
        <AreaButton county="Oops County" beginColor="FFA800" endColor="EBEF1F"/>,
        <AreaButton county="Tarrr County" beginColor="F53E15" endColor="FF800B"/>,
        <AreaButton county="Jonas County" beginColor="F56615" endColor="FFBF1B"/>,
        <AreaButton county="Yogu County" beginColor="F56615" endColor="FFBF1B"/>,
        <AreaButton county="Quop County" beginColor="FF0000" endColor="FF800B"/>,
        <AreaButton county="Wartyes County" beginColor="FF0000" endColor="FF800B"/>,
        <AreaButton county="Illop County" beginColor="FFA800" endColor="EBEF1F"/>,
        <AreaButton county="Furnst County" beginColor="80CF00" endColor="E1E515"/>,
        <AreaButton county="MacMummy County" beginColor="80CF00" endColor="E1E515"/>
      ],
    };
  }

  
  render() {
    return (
      <Container fluid style={styles.app}>
      <div style={styles.logo}>
        {/* <FontAwesomeIcon icon="bars" size="2x" style={{color: "#EBEBEB", display: "inline-block"}}/> */}
        <span style={{display: "inline-block", marginLeft: "0px", fontSize: "40px"}}>FOODERLY</span>
      </div>
      
      <section style={styles.jumbotron}>
      <img src={JumboImage} style={styles.jumbotronImage}/>
      <p style={styles.intro}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ullamcorper sit amet nibh nec sodales. Nunc quis placerat quam. Nulla at volutpat sapien. Donec et erat tempus, vehicula mi et, vehicula turpis. Donec metus lacus, mollis id nisi sed, dictum dignissim felis. Duis porttitor risus at sem dignissim imperdiet. Duis ornare mollis ipsum aliquam suscipit. 
      </p>
      </section>
      <section>
      <h1 style={styles.h1}>
      AREAS IN TEXAS
      </h1>
      
      <Search style={styles.search}/>
      
      <AreaList>
        {
          this.state.areas.splice((this.state.areas.length >= 18) ? this.state.areas.length - 18 : 0)
        }
      </AreaList>
      </section>
      <Container fluid style={{marginBottom: "7vh"}}>
        <Row>
          <Col md="7">
            <AppMap></AppMap>
          </Col>
          <Col md="5">
            <Legend />
          </Col>
        </Row>
      </Container>
      
      {/* <Footer></Footer> */}
      </Container>
      );
    }
  }
  
  export default App;
  