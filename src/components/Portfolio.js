import React, { Component } from 'react';
import Navbar from './Navbar';
import { Container, Row, Col } from 'reactstrap';


export class Portfolio extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }


    render() {
        return (
            <div>
                <Navbar />
                <Container fluid className="pageContainer portfolioContainer text-center">
                    <h1>Portfolio</h1>
                </Container>
            </div>
        )
    }
}

export default Portfolio
