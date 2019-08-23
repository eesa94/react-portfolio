import React from 'react';
import './Home.css';
import { Container, Row, Col, Button } from 'reactstrap';
import { Link, withRouter } from 'react-router-dom';
import bruno_thethe_qRCQBDtIPW0_unsplash_edit from '../../img/bruno_thethe_qRCQBDtIPW0_unsplash_edit.jpg';
import SocialLinks from '../SocialLinks';
import SkillIcon from '../Portfolio/SkillIcon';
import { skillsArray } from '../../store/skillsData';

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
          <Col lg={{ size: 6, offset: 2 }} style={{ marginBottom: '100px' }}>
            <h1 className='welcomeSubHeader montserrat-7 white'>
              Hey, I'm Eesa.
            </h1>

            <h3 className='welcomeSubHeader montserrat-7 white'>
              I'm a front end developer based in Leeds, who is passionate about
              building modern, responsive user interfaces.
            </h3>
          </Col>
        </Row>
        <Row>
          {/* <Col lg={{ size: 2, offset: 8 }}>
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
          </Col> */}
          <Col
            lg={{ size: 3, offset: 6 }}
            style={{
              padding: '20px 15px',
              textAlign: 'center',
              backgroundColor: 'rgba(0,0,0,0.7'
            }}
          >
            <Row>
              {skillsArray.map((skill, index) => (
                <Col xs='4' key={index} style={{ marginBottom: '15px' }}>
                  <SkillIcon icon={skill.icon} color={skill.color} />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default withRouter(Home);
