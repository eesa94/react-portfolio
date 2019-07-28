import React, { Component } from 'react';
import { Row, Col, Button } from 'reactstrap';
import './Project.css';
import Plx from 'react-plx';

export class Project extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false
    };

    this.mouseEnter = this.mouseEnter.bind(this);
    this.mouseLeave = this.mouseLeave.bind(this);
  }

  mouseEnter = () => {
    this.setState(
      {
        active: true
      },
      () => {
        document.addEventListener('mouseleave', this.mouseLeave);
      }
    );
  };

  mouseLeave = () => {
    this.setState(
      {
        active: false
      },
      () => {
        document.removeEventListener('mouseleave', this.mouseLeave);
      }
    );
  };

  render() {
    const parallaxData = [
      {
        start: 'self',
        startOffset: '1px',
        end: 'self',
        endOffset: '70vh',
        easing: 'easeInOutBack',
        properties: [
          {
            startValue: 1,
            endValue: 1.1,
            property: 'scale',
            unit: ''
          },
          {
            startValue: 1.5,
            endValue: 0,
            property: 'blur',
            unit: ''
          },
          {
            startValue: 0,
            endValue: 1,
            property: 'opacity',
            unit: ''
          }
        ]
      }
    ];

    const projectBackgroundImage = {
      backgroundImage: this.props.image
    };

    const projectImageClass = this.state.active
      ? 'projectImage projectImageActive'
      : 'projectImage';

    const projectInformationClassRight = this.state.active
      ? 'rightActive projectInformationContainer'
      : 'rightInactive projectInformationContainer';

    const projectInformationClassLeft = this.state.active
      ? 'leftActive projectInformationContainer'
      : 'leftInactive projectInformationContainer';

    if (this.props.index % 2 === 0) {
      return (
        <div>
          <div style={{ height: '10vh' }} />
          <Row noGutters className='projectRow'>
            <Col xs='12' lg={{ size: 6, offset: 1, order: 1 }}>
              {/* <Plx
                style={{
                  height: '100%',
                  margin: 'auto'
                }}
                parallaxData={parallaxData}
              > */}
                <div
                  className={projectImageClass}
                  style={projectBackgroundImage}
                  onMouseEnter={this.mouseEnter}
                  onMouseLeave={this.mouseLeave}
                >
                  <div
                    className={
                      this.state.active
                        ? 'projectOverlay projectOverlayActive'
                        : 'projectOverlay'
                    }
                  >
                    <Button
                      href={this.props.url}
                      target='_blank'
                      className={
                        this.state.active
                          ? 'projectLink projectLinkActive'
                          : 'projectLink'
                      }
                    >
                      View Site
                    </Button>
                  </div>
                </div>
              {/* </Plx> */}
            </Col>
            <Col
              xs='12'
              className='d-flex align-items-center'
              lg={{ size: 4, offset: 0, order: 2 }}
            >
              {/* <Plx
                style={{
                  height: '100%',
                  margin: 'auto'
                }}
                parallaxData={parallaxData}
              > */}
                <div
                  style={{ height: '100%' }}
                  className={projectInformationClassRight}
                >
                  <div className='projectInformation'>
                    <h1 className='projectTitle montserrat-7 text-left'>
                      {this.props.name}
                    </h1>
                    <div className='projectTitleUnderline mb2' />
                    <p className='projectDescription montserrat-5 text-left'>
                      {this.props.description}
                    </p>
                  </div>
                </div>
              {/* </Plx> */}
            </Col>
          </Row>
          <div style={{ height: '10vh' }} />
        </div>
      );
    } else {
      return (
        <div>
          <div style={{ height: '10vh' }} />

          <Row noGutters className='projectRow'>
            <Col xs='12' lg={{ size: 6, offset: 0, order: 2 }}>
              {/* <Plx
                style={{
                  height: '100%',
                  margin: 'auto'
                }}
                parallaxData={parallaxData}
              > */}
                <div
                  className={projectImageClass}
                  style={projectBackgroundImage}
                  onMouseEnter={this.mouseEnter}
                  onMouseLeave={this.mouseLeave}
                >
                  <div
                    className={
                      this.state.active
                        ? 'projectOverlay projectOverlayActive'
                        : 'projectOverlay'
                    }
                  >
                    <Button
                      href={this.props.url}
                      target='_blank'
                      className={
                        this.state.active
                          ? 'projectLink projectLinkActive'
                          : 'projectLink'
                      }
                    >
                      View Site
                    </Button>
                  </div>
                </div>
              {/* </Plx> */}
            </Col>
            <Col xs='12' lg={{ size: 4, offset: 1, order: 1 }}>
              {/* <Plx
                style={{
                  height: '100%',
                  margin: 'auto'
                }}
                parallaxData={parallaxData}
              > */}
                <div className={projectInformationClassLeft}>
                  <div className='projectInformation'>
                    <h1 className='projectTitle montserrat-7 text-left'>
                      {this.props.name}
                    </h1>
                    <div className='projectTitleUnderline mb2' />
                    <p className='projectDescription montserrat-5 text-left'>
                      {this.props.description}
                    </p>
                  </div>
                </div>
              {/* </Plx> */}
            </Col>
          </Row>
          <div style={{ height: '10vh' }} />
        </div>
      );
    }
  }
}

export default Project;
