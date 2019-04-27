import React, { Component } from 'react';
import { Col } from 'reactstrap'


export class Project extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }
    

    render() {
        return (
            <Col xs="12" lg="6">
                <div className="projectSquare">
                    <div className="projectOverlay h-100 w-100 d-flex justify-content-center align-items-center">
                        <h1 className="projectTitle">{this.props.name}</h1>
                    </div>
                </div>
            </Col>        
        )
    }
}

export default Project
