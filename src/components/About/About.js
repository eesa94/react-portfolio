import React, { Fragment } from 'react';
import Navbar from '../Navigation/Navbar';
import { Container } from 'reactstrap';
import './About.css';
import { Footer } from '../Footer';

const About = () => {
  return (
    <Fragment>
      <Navbar />
      <Container
        fluid
        style={{
          paddingTop: '120px',
          backgroundColor: 'rgba(2, 18, 43, 1)'
        }}
      >
        <div className='row' style={{ minHeight: '100vh' }}>
          <div
            className='col-12 col-lg-6'
            style={{ borderRight: '2px solid white' }}
          >
            <div className='aboutSectionOne'>
              <h1 className='sectionHeader mb3'>Placeholder</h1>
              <p className='white'>
                some background relating to studies and previous jobs
              </p>
              <p className='white'>how you got into tech / web dev</p>
              <p className='white'>add general skills e.g. npm, git, agile</p>
            </div>
          </div>

          <div className='col-12 col-lg-6'>
            <p className='white'>other content here</p>
          </div>
        </div>
      </Container>
      <Footer />
    </Fragment>
  );
};

export default About;
