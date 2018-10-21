import React from "react";
import {Container, Row} from 'reactstrap';

export default function AreaList (props) {
    return(
        <Row style={{display: "flex", justifyContent: "start"}}>
            {props.children}
        </Row>
    );
}

