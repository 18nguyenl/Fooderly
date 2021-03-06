import React, { Component } from "react"
import { geoMercator, geoPath } from "d3-geo"
import { feature } from "topojson-client"
// import {objects} from '../resc/tx_counties.topojson'
import {dataset} from '../resc/txc.json'
import './appMap.css';
import { Container, Row, Col } from 'reactstrap'

class AppMap extends Component {

  constructor(props) {
    super(props)
    this.state = {
      worldData: [],
      county: {},
      txc: {},
      currentColor: "black",
      focusCounty: "Tarrant"
      
    }
  }
  projection() {
    let scale = 2000;
    return geoMercator()
      .scale(scale)
      .translate([ scale * 1.9 , scale / 1.45  ])
  }

  componentDidMount() {
    // LOAD


    // GET MAP DATA
    fetch("https://raw.githubusercontent.com/TNRIS/tx.geojson/master/counties/tx_counties.topojson")
      .then(response => {
        if (response.status !== 200) {
          console.log(`There was a problem: ${response.status}`)
          return
        }
        response.json().then(worldData => {
          this.setState({
            worldData: feature(worldData, worldData.objects.tx_counties).features,
          })
        })
      })
      




  }

  changeColor(col){
    if(col === undefined){
      return "#DCE235";
    }
    col = col.cir.slice(0,-1);
    // this.setState({currentColor: col});
    // 25, 157, 48	
    return `rgb(25, ${col * 5}, 48)`;
  }
  
  render() {
    return (
        <Container fluid>
          <Row>
            <svg className="texas_svg" width={ 800 } height={ 450 } viewBox="0 0 800 450">
                <g className="countries">
                
                {
                  
                    this.state.worldData.map((d,i) => 
                    <path
                        key={ `path-${ i }` }
                        d={ geoPath().projection(this.projection())(d) }
                        // className="county"
                        stroke={(dataset[d.properties.COUNTY.slice(0,-7)] && dataset[d.properties.COUNTY.slice(0,-7)].cir.slice(0,-1)  > 30) ? `white` : "black" } //white: POVERTY, blue: we good
                        // stroke={(dataset[d.properties.COUNTY.slice(0,-7)] && dataset[d.properties.COUNTY.slice(0,-7)].cir.slice(0,-1)  > 30) ? `white` : "black" } //white: POVERTY, blue: we good
                        strokeWidth={ .5}
                        className={dataset[d.properties.COUNTY.slice(0,-7)] ? dataset[d.properties.COUNTY.slice(0,-7)].rounded + "|" + d.properties.COUNTY.slice(0,-7) : "none"}
                        // className={(d.properties.COUNTY == data.county) ? `rgb(0, 0, ${data.poverty_perc.slice(0,-1)})` : "red"}
                        // fill="black"
                        fill={(dataset[d.properties.COUNTY.slice(0,-7)]  && dataset[d.properties.COUNTY.slice(0,-7)].cir.slice(0,-1) > 25) ? `rgb(${dataset[d.properties.COUNTY.slice(0,-7)].cir.slice(0,-1) * 6 }, 40, 30)` : this.changeColor(dataset[d.properties.COUNTY.slice(0,-7)])}
                    />
                    )
                  }
                </g>
            </svg>
          </Row>
        </Container>
    )
  }
}

export default AppMap