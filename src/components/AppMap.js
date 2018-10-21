
import React, { Component } from "react"
import { geoMercator, geoPath } from "d3-geo"
import { feature } from "topojson-client"
import './appMap.css';

class AppMap extends Component {

  constructor() {
    super()
    this.state = {
      worldData: [],
    }
  }
  projection() {
      let scale = 2800;
    return geoMercator()
      .scale(scale)
      .translate([ scale * 1.9 , scale / 1.48  ])
  }
  componentDidMount() {
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
            <svg  className="texas_svg" width={ 800 } height={ 450 } viewBox="0 0 800 450">
                <g className="countries">
                {
                    this.state.worldData.map((d,i) => (
                    <path
                        key={ `path-${ i }` }
                        d={ geoPath().projection(this.projection())(d) }
                        className="county"
                        stroke="#FFFFFF"
                        strokeWidth={ 0.5 }
                    />
                    ))
                }
                </g>
                <g className="markers">
                <circle
                    cx={ 20 }
                    cy={ 100 }
                    r={ 10 }
                    fill="#E91E63"
                    className="marker"
                />
                </g>
            </svg>
        </div>
    )
  }
}

export default AppMap