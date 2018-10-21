import React, { Component } from 'react'
import {Col, Button} from 'reactstrap'
import WebFont from 'webfontloader'

WebFont.load({
    google: {
      families: ['K2D', 'sans-serif']
    }
});

var globalStyles = {
    body: {
        fontFamily: "'K2D', sans-serif",
        fontSize: "90%",
        color: "rgba(255, 255, 255, 0.9)",
    },
}

export default class AreaButton extends Component {
    constructor() {
        super();
        this.state = {
            countySelected: "N/A",
        }
    }

    // Allow changing colors
    render() {
        let color = "linear-gradient(90deg, #" + this.props.beginColor + " 0%, #" + this.props.endColor + " 100%)";
        let styles = {
            button: {
                margin: "15px 15px",
                border: "0",
                borderRadius: "20px",
                background: color,
                zIndex: "10",
            },
        };
        return(
            <Button 
                style={styles.button}
                onClick={() => {
                    this.setState({countySelected: this.props.county});
                }}
            >
                <span style={globalStyles.body}>{this.props.county}</span>
            </Button>
        );
    }
}
