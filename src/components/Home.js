import React from 'react';
import styled from 'styled-components';
import './Home.css';
import { Container, Row, Col, Button } from 'reactstrap';
import home_background from '../img/home_background.jpg';


const Home = () => {

    const bgImage = {
        backgroundImage: `url(${home_background})`
    }

    return (
        <Container fluid className="homeContainer text-center" style={bgImage}>
            <div className="homeInner">
                <h1 className="welcomeHeader montserrat-9 mb3">Welcome</h1>
                <h3 className="welcomeSubHeader montserrat-5 mb3">Find out more about me, or view my portfolio, by clicking below.</h3>
                <Row className="mb3">
                    <Col xs="6" className="text-right">
                        <Button className="homeButton montserrat-5 shadow">
                            About Me
                        </Button>
                    </Col>
                    <Col xs="6" className="text-left">
                        <Button className="homeButton montserrat-5 shadow">
                            View Work
                        </Button>
                    </Col>
                </Row>
                <Row className="mb2">
                    <Col xs={{ size: 8, offset: 2 }}>
                        <img src={require('../img/headshot.jpg')} alt="headshot" className="img-fluid homeHeadshot"/>
                    </Col>
                </Row>
                <Row className="mb3">
                    <Col xs="12" className="text-center">
                        <h2 className="homeName montserrat-9 mb1">Eesa Patel.</h2>
                        <h3 className="welcomeSubHeader montserrat-5 mb1">Front End Developer</h3>
                        <h4 className="welcomeSubHeader montserrat-5 mb3">Leeds, UK</h4>
                    </Col>
                </Row>
                

            </div>
        </Container>
        
    )
}

export default Home
