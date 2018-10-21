
import React, { Component } from "react"
import { geoMercator, geoPath } from "d3-geo"
import { feature } from "topojson-client"

class AppMap extends Component {
  constructor() {
    super()
    this.state = {
      worldData: [],
    }
  }
  projection() {
    return geoMercator()
      .scale(1500)
      .translate([ 2900 , 1080  ])
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
            <svg  width={ 800 } height={ 450 } viewBox="0 0 800 450">
                <g className="countries">
                {
                    this.state.worldData.map((d,i) => (
                    <path
                        key={ `path-${ i }` }
                        d={ geoPath().projection(this.projection())(d) }
                        className="country"
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