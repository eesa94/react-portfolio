import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import './Project.css';


export class Project extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }
    

    render() {

        const projectImage = {
            backgroundImage: this.props.image
        }

        return (
            <Row className="projectRow">
                <Col xs="12" lg="6">
                    <div className="projectImage h-100 w-100 d-flex justify-content-center align-items-center" style={projectImage}>
                    </div>
                </Col>        
                <Col xs="12" lg="6">
                    <div className="projectInformation h-100 w-100 d-flex justify-content-center align-items-center flex-column">
                        <h1 className="projectTitle montserrat-7 mb2">{this.props.name}</h1>
                        <p className="montserrat-5 mb2">{this.props.description}</p>
                    </div>
                </Col>   
            </Row>     
        )
    }
}

export default Project
