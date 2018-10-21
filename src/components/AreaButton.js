import React from 'react'
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

export default function AreaButton (props) {
    // Allow changing colors
    let color = "linear-gradient(90deg, #" + props.beginColor + " 0%, #" + props.endColor + " 100%)";
    let styles = {
        button: {
            display: "flex",
            border: "0",
            borderRadius: "20px",
            background: color,
        },
    };

    return(
         <Col md="1" lg="1">
            <Button style={styles.button}>
                <span style={globalStyles.body}>{props.county}</span>
            </Button>
         </Col>
    );
}