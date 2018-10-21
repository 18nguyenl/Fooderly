import React, {Component} from 'react'
import WebFont from 'webfontloader'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Container, Row } from 'reactstrap'

library.add(faSearch);

WebFont.load({
    google: {
        families: ['Paytone One', 'sans-serif'],
    }
});

const styles = {
    search: {
        color: "rgba(235, 235, 235, 0.65)",
    },
};

export default class Search extends Component {
    constructor() {
        super();
    }
    
    render() {
        return (
            <Container fluid style={this.props.style}>
                <Row style={styles.row}>
                    <FontAwesomeIcon icon="search" style={styles.search} size="2x"/>
                    
                </Row>
            </Container>
        );
    }
}