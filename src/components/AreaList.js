import React from "react";
import {Container, Row} from 'reactstrap';

export default function AreaList (props) {
    return(
        // <Container>
            <Row>
                {props.children}
            </Row>
        // </Container>
    );
}

