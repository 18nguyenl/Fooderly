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
    input: {
        fontFamily: "Paytone One, sans-serif",
        fontSize: "30px",
        marginLeft: "30px",
        height: "30px",
        border: "none",
        outline: "none",
        backgroundColor: "rgba(0, 0, 0, 0)",
        color: "rgba(235, 235, 235, 0.65)",
    },
};

export default class Search extends Component {
    constructor() {
        super();
        this.state = {
            searchText: "SEARCH AREA HERE",
        };
    }
    
    render() {
        return (
            <Container fluid style={this.props.style}>
                <Row style={styles.row}>
                    <FontAwesomeIcon icon="search" style={styles.search} size="2x"/>
                    <input
                        placeholder={this.state.searchText}
                        placeholderTextColor="rgba(235, 235, 235, 0.65)"
                        style={styles.input}
                    ></input>
                </Row>
            </Container>
        );
    }
}