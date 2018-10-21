import React, { Component } from 'react'
import WebFont from 'webfontloader'
import { Row, Col, Container} from 'reactstrap'

WebFont.load({
    google: {
      families: ['Paytone One', 'K2D', 'sans-serif']
    }
});

const styles = {
    box: {
        borderRadius: "45px",
        height: "450px",
        width: "auto",
        boxSizing: "border-box",
        border: "2px solid #D4D4D4",
        margin: (window.innerHeight > window.innerWidth) ? "30px 0 0 0" : "0 20px",
        padding: "20px 30px",
        paddingLeft: "50px",
        color: "rgba(0, 0, 0, 0)",
        display: "flex",
        alignItems: "center",
    },
    text: {
        fontFamily: "'K2D', sans-serif",
        fontSize: "25px",
        color: "white",
        display: "block",
        margin: "19px 0",
        marginLeft: "35px",
    }
}

function KeyCircle (props) {
    return(
        <div
            style={
                {
                    background: props.gradient,
                    height: "30px",
                    width: "30px",
                    margin: "22px 0",
                    borderRadius: "30px",
                }
            }
        ></div>
    );
}

function Text (props) {
    return(
      <span style={styles.text}>
          {props.children}
      </span>  
    );
}

export default function Legend (props) {
    return(
        <div style={styles.box}>
            <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
                <KeyCircle gradient="linear-gradient(90deg, #FF0000 0%, #FF800B 72.38%)"/>
                <KeyCircle gradient="linear-gradient(90deg, #F56615 9.39%, #FFBF1B 100%)"/>
                <KeyCircle gradient="linear-gradient(90deg, #FFA800 0%, #EBEF1F 100%)"/>
                <KeyCircle gradient="linear-gradient(90deg, #80CF00 0%, #E1E515 100%)"/>
                <KeyCircle gradient="linear-gradient(90deg, #069E27 16.02%, #79DA17 100%)"/>
            </div>
            <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
                <Text>extremely hungry</Text>
                <Text>more hungry</Text>
                <Text>slightly hungry</Text>
                <Text>less hungry</Text>
                <Text>not hungry</Text>
            </div>
        </div>
    );
}