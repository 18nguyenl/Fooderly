import React from "react";
import {Container, Row} from 'reactstrap';

export default function AreaList (props) {
    return(
        <Row style={{display: "flex", justifyContent: "start", marginBottom: "25px"}}>
            {props.children}
        </Row>
    );
}

