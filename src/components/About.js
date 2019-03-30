import React, { Component } from 'react'
import Navbar from './Navbar';
import { Container, Row, Col } from 'reactstrap';


export class About extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }


    render() {
        return (
            <div>
                <Navbar />
                <Container fluid className="pageContainer aboutContainer text-center">
                    <h1>about me</h1>
                </Container>
            </div>
        )
    }
}

export default About
