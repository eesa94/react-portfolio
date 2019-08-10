import React from 'react';
import './Home.css';
import { Container, Row, Col, Button } from 'reactstrap';
import { Link, withRouter } from 'react-router-dom';
import bruno_thethe_qRCQBDtIPW0_unsplash_edit from '../../img/bruno_thethe_qRCQBDtIPW0_unsplash_edit.jpg';
import SocialLinks from '../SocialLinks';

const Home = () => {
  const bgImage = {
    backgroundImage: `url(${bruno_thethe_qRCQBDtIPW0_unsplash_edit})`
  };

  return (
    <Container fluid className='heroContainer text-left' style={bgImage}>
      <div className='overlay'>
        <Row>
          <Col lg={{ size: 11, offset: 1 }}>
            <h1 className='welcomeHeader montserrat-9'>Eesa Patel.</h1>
          </Col>
        </Row>
        <Row>
          <Col lg={{ size: 10, offset: 2 }} style={{ marginBottom: '100px' }}>
            <h3 className='montserrat-7 white'>Welcome to my personal site.</h3>
          </Col>

          <Col lg={{ size: 9, offset: 3 }}>
            <h3 className='welcomeSubHeader montserrat-7 white' id='line1'>
              front end developer.
            </h3>

            <h3 className='welcomeSubHeader montserrat-7 white' id='line2'>
              Leeds.
            </h3>

            <h3 className='welcomeSubHeader montserrat-7 white' id='line3'>
              modern, aesthetic minimalism.
            </h3>
          </Col>
        </Row>
        <Row>
          <Col lg={{ size: 2, offset: 8 }}>
            <div className='linksContainer'>
              <Link to='/portfolio'>
                <Button className='homeButton montserrat-5 shadow'>
                  View Portfolio
                </Button>
              </Link>
              <Link to='/contact'>
                <Button className='homeButton montserrat-5 shadow'>
                  Contact Me
                </Button>
              </Link>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default withRouter(Home);
