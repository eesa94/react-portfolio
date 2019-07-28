import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';
import Navbar from '../Navigation/Navbar';
import './Portfolio.css';
import Project from './Project';
import { projects } from '../../store/projectsData';

const Portfolio = () => {
  return (
    <Container fluid style={{ padding: '0' }}>
      <div className='row'>
        {projects.map((project, index) => (
          <Project
            key={index}
            index={index}
            name={project.name}
            image={project.image}
            description={project.description}
            url={project.url}
            github={project.github}
          />
        ))}
      </div>
    </Container>
  );
};

export default Portfolio;
