import React, { Component } from 'react';
import Navbar from './Navbar';
import { Container, Row } from 'reactstrap';
import './Portfolio.css';
import Project from './Project';


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
                               <Project 
                                    name={project.name}
                                />
                            )
                        }
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Portfolio
