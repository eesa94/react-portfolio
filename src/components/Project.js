import React, { Component } from 'react';
import { Row, Col, Button } from 'reactstrap';
import './Project.css';


export class Project extends Component {
    constructor(props) {
        super(props)

        this.state = {
            active: false
        }

        this.mouseEnter = this.mouseEnter.bind(this);
    }

    
    mouseEnter = () => {
        this.setState({
            active: true
        }, () => {
            document.addEventListener('mouseleave', this.mouseLeave);
        })
    }

    mouseLeave = () => {
        this.setState({
            active: false
        }, () => {
            document.removeEventListener('mouseleave', this.mouseLeave)
        })
    }

    render() {

        const projectImage = {
            backgroundImage: this.props.image
        }

        const projectInformationClassRight = this.state.active ?  "rightActive projectInformationContainer" : "rightInactive projectInformationContainer";

        const projectInformationClassLeft = this.state.active ?  "leftActive projectInformationContainer" : "leftInactive projectInformationContainer";

        if (this.props.index % 2 === 0) {
            return (
                <Row noGutters className="projectRow mb2">
                    <Col xs="12" lg={{size: 5, offset: 1, order: 1}}>
                        <div 
                            className="projectImage h-100 w-100 d-flex justify-content-center align-items-center" 
                            style={projectImage}
                            onMouseEnter={this.mouseEnter}
                            onMouseLeave={this.mouseLeave}
                        >
                            <div className={this.state.active ? "projectOverlay projectOverlayActive" : "projectOverlay"}>
                                <Button href={this.props.url} target="_blank" className={this.state.active ? "projectLink projectLinkActive" : "projectLink"}>
                                View Site
                                </Button>
                            </div>
                        </div>
                    </Col>        
                    <Col xs="12" lg={{size: 4, offset: 0, order: 2}}>
                        <div className={projectInformationClassRight}>
                            <div className="projectInformation">
                                <h1 className="projectTitle montserrat-7 mb2 text-left">{this.props.name}</h1>
                                <p className="projectDescription montserrat-5 text-left">{this.props.description}</p>
                            </div>
                        </div>
                    </Col> 
                </Row>     
            )
        } else {
            return (
                <Row noGutters className="projectRow mb2">
                    <Col xs="12" lg={{size: 5, offset: 0, order: 2}}>
                        <div 
                            className="projectImage h-100 w-100 d-flex justify-content-center align-items-center" 
                            style={projectImage}
                            onMouseEnter={this.mouseEnter}
                            onMouseLeave={this.mouseLeave}
                        >
                            <div className={this.state.active ? "projectOverlay projectOverlayActive" : "projectOverlay"}>
                                <Button href={this.props.url} target="_blank" className={this.state.active ? "projectLink projectLinkActive" : "projectLink"}>
                                View Site
                                </Button>
                            </div>
                        </div>
                    </Col>        
                    <Col xs="12" lg={{size: 4, offset: 2, order: 1}}>
                        <div className={projectInformationClassLeft}>
                            <div className="projectInformation">
                                <h1 className="projectTitle montserrat-7 mb2 text-left">{this.props.name}</h1>
                                <p className="projectDescription montserrat-5 text-left">{this.props.description}</p>
                            </div>
                        </div>
                    </Col>   
                </Row>     

            )
        }
    }
}

export default Project
