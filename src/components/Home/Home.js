import React, { Fragment } from 'react';
import './Home.css';
import { Container, Row, Col, Button } from 'reactstrap';
import { Link, withRouter } from 'react-router-dom';
import home_background from '../../img/home_background.jpg';
import SocialLinks from '../SocialLinks';

import AboutMe from './AboutMe';
import PortfolioPreview from './PortfolioPreview';

const Home = () => {
  const bgImage = {
    backgroundImage: `url(${home_background})`
  };

  return (
    <Fragment>
      <Container fluid className='heroContainer text-center' style={bgImage}>
        <div className='homeInner'>
          <h1 className='welcomeHeader montserrat-9 mb3'>Welcome</h1>
          <h3 className='welcomeSubHeader montserrat-5 mb3'>
            Find out more about me, or view my portfolio, by clicking below.
          </h3>

          <Row className='mb3'>
            <Col xs='6' className='text-right'>
              <Link to='/about'>
                <Button className='homeButton montserrat-5 shadow'>
                  About Me
                </Button>
              </Link>
            </Col>
            <Col xs='6' className='text-left'>
              <Link to='/portfolio'>
                <Button className='homeButton montserrat-5 shadow'>
                  View Work
                </Button>
              </Link>
            </Col>
          </Row>

          <Row className='mb2'>
            <Col xs={{ size: 8, offset: 2 }}>
              <img
                src={require('../../img/headshot.jpg')}
                alt='headshot'
                className='img-fluid homeHeadshot'
              />
            </Col>
          </Row>

          <Row className='mb1'>
            <Col xs='12' className='text-center'>
              <h2 className='homeName montserrat-9 mb1'>Eesa Patel.</h2>
              <h3 className='welcomeSubHeader montserrat-5 mb1'>
                Front End Developer
              </h3>
              <h4 className='welcomeSubHeader montserrat-5'>Leeds, UK</h4>
            </Col>
          </Row>

          <SocialLinks />
        </div>
      </Container>
      <Container fluid className='homeContainer'>
        <AboutMe />
      </Container>
      <Container fluid className='homeContainer'>
        <PortfolioPreview />
      </Container>
    </Fragment>
  );
};

export default withRouter(Home);
