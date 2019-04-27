import React, { Component } from 'react';
import Navbar from './Navbar';
import { Container, Row, Col } from 'reactstrap';
import './Portfolio.css'


export class Portfolio extends Component {
    constructor(props) {
        super(props)

        this.state = {
            projects: [
                {
                    name: "Project 1",
                    url: "",
                    github: "",                    
                },
                {
                    name: "Project 2",
                    url: "",
                    github: "",                    
                },
            ]
        }
    }


    render() {
        return (
            <div>
                <Navbar />
                <Container fluid className="pageContainer portfolioContainer text-center">
                    <h1 className="montserrat-9 mb3">Portfolio</h1>
                    <Row noGutters>
                        {
                            this.state.projects.map(project => 
                                <Col xs="12" lg="6">
                                    <div className="projectSquare">
                                        <div className="projectOverlay h-100 w-100 d-flex justify-content-center align-items-center">
                                            <h1 className="projectTitle">{project.name}</h1>
                                        </div>
                                    </div>
                                </Col>
                            )
                        }
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Portfolio
