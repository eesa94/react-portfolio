import React, { Component } from 'react'
import Navbar from './Navbar';
import { Container, Row, Col, Card, CardHeader, CardBody, CardText } from 'reactstrap';
import './About.css'


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
                    <h1 className="montserrat-9 mb3">About Me</h1>
                    <Row>
                        <Col
                        xs={{ size: 10, offset: 1 }}
                        md={{ size: 6, offset: 0}}
                        xl={{ size: 4, offset: 2 }}
                        className="mb2"
                        >
                            <Card>
                                <CardHeader>
                                    <h2 className="montserrat-7">Background</h2>
                                </CardHeader>
                                <CardBody>
                                    <CardText>
                                        <p className="montserrat-5 mb1">I am a front end dev</p>
                                    </CardText>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col
                        xs={{ size: 10, offset: 1 }}
                        md={{ size: 6, offset: 0}}
                        xl={{ size: 4, offset: 0 }}
                        className="mb2"
                        >
                            <Card>
                                <CardHeader>
                                    <h2 className="montserrat-7">Skills</h2>
                                </CardHeader>
                                <CardBody>
                                    <CardText>
                                        <p className="montserrat-5 mb1">These are my skillz</p>
                                    </CardText>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col
                        xs={{ size: 10, offset: 1 }}
                        xl={{ size: 8, offset: 2 }}
                        className="mb2"
                        >
                            <Card>
                                <CardHeader>
                                    <h2 className="montserrat-7">FAQ</h2>
                                </CardHeader>
                                <CardBody>
                                    <CardText>
                                        <p className="montserrat-5 mb1">random shite</p>
                                    </CardText>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default About
