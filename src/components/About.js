import React, { Component } from 'react';
import Navbar from './Navigation/Navbar';
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  CardText
} from 'reactstrap';
import './About.css';
import { Footer } from './Footer';

const styles = {
  skillsContainer: {
    marginBottom: '100px'
  },
  skillSquare: {
    position: 'relative',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '5px 15px',
    border: '1px solid black',
    overflow: 'hidden',
  },
  skillName: {
    position: 'absolute',
    left: '3%',
    top: '3%',
    fontSize: '3rem',
    opacity: 0,
    transition: '0.8s'
  },
  skillIcon: {
    position: 'relative',
    bottom: '0%',
    top: '0%',
    left: '0%',
    right: '0%',
    fontSize: '12rem',
    transition: '1s'
  }
}

const hoverStyles = {
  skillName: {
    opacity: 1
  },
  skillIcon: {
    top: '50%',
    left: '50%',
    transform: 'rotate(30deg)'
  },
}

class About extends Component {
  constructor(props) {
    super(props);

    this.state = {
      skills: [
        {
          name: 'HTML',
          iconClass: 'fab fa-html5',
          primaryColor: 'orange',
          secondaryColor: 'white'
        },
        {
          name: 'JavaScript',
          iconClass: 'fab fa-js',
          primaryColor: 'yellow',
          secondaryColor: 'black'
        },
        {
          name: 'React JS',
          iconClass: 'fab fa-react',
          primaryColor: 'lightblue',
          secondaryColor: 'darkblue'
        }
      ],
      hoveredSkill: -1
    };
  }

  handleMouseEnter = (index) => {
    this.setState(
      {
        hoveredSkill: index
      },
      () => {
        document.addEventListener('mouseleave', this.handleMouseLeave);
      }
    );
    console.log(
      `entered box ${index}, hoveredSkill set to ${index}`
    );
  };

  handleMouseLeave = (index) => {
    this.setState(
      {
        hoveredSkill: -1
      },
      () => {
        document.removeEventListener('mouseleave', this.handleMouseLeave);
      }
    );
    console.log(
      `left box ${index}, hoveredSkill set to ${this.state.hoveredSkill}`
    );
  };

  render() {
    return (
      <div>
        <Navbar />
        <Container fluid className='pageContainer aboutContainer text-center'>
          <h1 className='pageHeader montserrat-9 mb3'>About Me</h1>
          <Row>
            <Col
              xs={{ size: 10, offset: 1 }}
              md={{ size: 6, offset: 0 }}
              xl={{ size: 4, offset: 2 }}
              className='mb2'
            >
              <Card>
                <CardHeader>
                  <h2 className='montserrat-7'>Background</h2>
                </CardHeader>
                <CardBody>
                  <CardText className='montserrat-5 mb1'>
                    <i className='fas fa-map-marker-alt' />I am a Front End
                    Developer, with a focus on React and UI development.
                  </CardText>
                  <CardText className='montserrat-5 mb1'>
                    <i className='fas fa-briefcase' />I currently work for a
                    digital consultancy in Leeds.
                  </CardText>
                  <CardText className='montserrat-5 mb1'>
                    <i className='fas fa-code' />I have worked with the
                    following technologies. In addition to these I am constantly
                    learning and adding to my skill set.
                  </CardText>
                </CardBody>
              </Card>
            </Col>
            <Col
              xs={{ size: 10, offset: 1 }}
              md={{ size: 6, offset: 0 }}
              xl={{ size: 4, offset: 0 }}
              className='mb2'
            >
              <Card>
                <CardHeader>
                  <h2 className='montserrat-7'>Skills</h2>
                </CardHeader>
                <CardBody>
                  <Row>
                    <Col xs='6'>
                      <h2 className='montserrat-6'>Front End</h2>
                      <CardText className='text-center montserrat-5 mb1'>
                        HTML
                      </CardText>
                      <CardText className='text-center montserrat-5 mb1'>
                        CSS
                      </CardText>
                      <CardText className='text-center montserrat-5 mb1'>
                        Bootstrap
                      </CardText>
                      <CardText className='text-center montserrat-5 mb1'>
                        JavaScript
                      </CardText>
                      <CardText className='text-center montserrat-5 mb1'>
                        React
                      </CardText>
                    </Col>
                    <Col xs='6'>
                      <h2 className='montserrat-6'>Back End</h2>
                      <CardText className='text-center montserrat-5 mb1'>
                        Ruby
                      </CardText>
                      <CardText className='text-center montserrat-5 mb1'>
                        Ruby on Rails
                      </CardText>
                      <CardText className='text-center montserrat-5 mb1'>
                        Firebase
                      </CardText>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
            <Col
              xs={{ size: 10, offset: 1 }}
              xl={{ size: 8, offset: 2 }}
              className='mb2'
            >
              <Card>
                <CardHeader>
                  <h2 className='montserrat-7'>FAQ</h2>
                </CardHeader>
                <CardBody>
                  <CardText className='montserrat-5'>
                    <i className='fas fa-question' />
                    How did you become a web developer
                  </CardText>
                  <CardText className='montserrat-5 mb3'>
                    <i className='fas fa-check' />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Temporibus, hic quod vitae quos nihil velit recusandae
                    voluptatibus ut quaerat aut ex similique tempore quae cumque
                    tenetur accusantium itaque. Totam, iure.
                  </CardText>
                  <CardText className='montserrat-5'>
                    <i className='fas fa-question' />
                    What is your development process
                  </CardText>
                  <CardText className='montserrat-5 mb3'>
                    <i className='fas fa-check' />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Temporibus, hic quod vitae quos nihil velit recusandae
                    voluptatibus ut quaerat aut ex similique tempore quae cumque
                    tenetur accusantium itaque. Totam, iure.
                  </CardText>
                  <CardText className='montserrat-5'>
                    <i className='fas fa-question' />
                    What do you most/least enjoy about web development
                  </CardText>
                  <CardText className='montserrat-5 mb3'>
                    <i className='fas fa-check' />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Temporibus, hic quod vitae quos nihil velit recusandae
                    voluptatibus ut quaerat aut ex similique tempore quae cumque
                    tenetur accusantium itaque. Totam, iure.
                  </CardText>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
        <Container style={styles.skillsContainer}>
          <Row>
            <Col xs={{ size: 6, offset: 3 }}>
              <Row noGutters style={{ height: '180px' }}>
                {this.state.skills.map((skill, index) => (
                  <Col
                    xs='4'
                    key={index}
                    onMouseEnter={this.handleMouseEnter.bind(this, index)}
                    onMouseLeave={this.handleMouseLeave.bind(this, index)}
                  >
                    <div
                      style={styles.skillSquare}
                      // style={this.state.hoveredSkill === index ? {backgroundColor: skill.primaryColor} : {backgroundColor: skill.secondaryColor}}
                    >
                      <span
                        style={this.state.hoveredSkill === index ? {...styles.skillName, ...hoverStyles.skillName} : styles.skillName}
                        // style={this.state.hoveredSkill === index ? {color: skill.secondaryColor} : {color: skill.primaryColor}}

                      >
                        {skill.name}
                      </span>
                      <i
                        className={skill.iconClass} style={this.state.hoveredSkill === index ? {...styles.skillIcon, ...hoverStyles.skillIcon} : styles.skillIcon}
                        // style={this.state.hoveredSkill === index ? {color: skill.secondaryColor} : {color: skill.primaryColor}}

                      />
                    </div>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default About;
