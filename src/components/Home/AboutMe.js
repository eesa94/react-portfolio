import React, { Component } from 'react';
import styled from 'styled-components';
import './AboutMe.css';

class AboutMe extends Component {
  render() {
    return (
      <div className='container-fluid aboutWrapper'>
        <div className='aboutSection aboutSectionOne'>
          <h1>About Me</h1>
        </div>
        <div className='aboutSection aboutSectionTwo'>
          <h1>Portfolio</h1>
        </div>
      </div>
    );
  }
}

export default AboutMe;
