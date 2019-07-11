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

export class About extends Component {
  constructor(props) {
    super(props);

    this.state = {
      skills: [
        {
          name: 'HTML',
          iconClass: 'fab fa-html5',
          nameColor: 'orange',
          iconColor: 'orange',
          backgroundColor: 'white'
        },
        {
          name: 'JavaScript',
          iconClass: 'fab fa-js',
          nameColor: 'yellow',
          iconColor: 'yellow',
          backgroundColor: 'black'
        },
        {
          name: 'React JS',
          iconClass: 'fab fa-react',
          nameColor: 'white',
          iconColor: 'lightblue',
          backgroundColor: 'darkblue'
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
      `entered box ${index}, hoveredSkill set to ${this.state.hoveredSkill}`
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
        <Container className='skillsContainer'>
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
                      className='skillSquare'
                      style={{ backgroundColor: skill.backgroundColor }}
                    >
                      <span
                        className='skillName'
                        style={{ color: skill.nameColor }}
                      >
                        {skill.name}
                      </span>
                      <i
                        className={'skillIcon ' + skill.iconClass}
                        style={{ color: skill.iconColor }}
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
