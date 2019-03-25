import React, { Component } from 'react';
import './Home.css';
import { Container } from 'reactstrap';
import home_background from '../img/home_background.jpg';


const Home = () => {

    const bgImage = {
        backgroundImage: `url(${home_background})`
    }

    return (
        <Container fluid className="homeContainer" style={bgImage}>
            <p>hello</p>
        </Container>
        
    )
}

export default Home
