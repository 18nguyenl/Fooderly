
import React, { Component } from "react"
import { geoMercator, geoPath } from "d3-geo"
import { feature } from "topojson-client"
import {objects} from '../resc/tx_counties.topojson'
import {dataset} from '../resc/county.json'
import './appMap.css';

class AppMap extends Component {

  constructor() {
    super()
    this.state = {
      worldData: [],
      county: {}
      
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


  render() {
    return (
        <div>
            <svg className="texas_svg" width={ 800 } height={ 450 } viewBox="0 0 800 450">
                <g className="countries">
                {
                    this.state.worldData.map((d,i) => 
                    
                    <path
                        key={ `path-${ i }` }
                        d={ geoPath().projection(this.projection())(d) }
                        // className="county"
                        stroke={(dataset[d.properties.COUNTY] && dataset[d.properties.COUNTY].poverty_perc.slice(0, -1) > 30 ) ? "white" : "green" }
                        strokeWidth={ (dataset[d.properties.COUNTY] && dataset[d.properties.COUNTY].poverty_perc.slice(0, -1) > 30 ) ?  1 : 0.5 }
                        // className={"#"+ d.properties.COUNTY}
                        // className={(d.properties.COUNTY == data.county) ? `rgb(0, 0, ${data.poverty_perc.slice(0,-1)})` : "red"}
                        fill={(dataset[d.properties.COUNTY]) ? `rgb(${dataset[d.properties.COUNTY].poverty_perc.slice(0,-1) * 20 }, ${dataset[d.properties.COUNTY].poverty_perc.slice(0,-1) * 1.5},0)` : "black"}
                    />
                    )
                }
                </g>
                 
            </svg>
        </div>
    )
  }
}

export default AppMap