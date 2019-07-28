import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';
import Navbar from '../Navigation/Navbar';
import './Portfolio.css';
import NewProject from './NewProject';
import { projects } from '../../store/projectsData';

const Portfolio = () => {
  return (
    <Container fluid style={{ padding: '0' }}>
      {projects.map((project, index) => (
        <NewProject
          key={index}
          index={index}
          name={project.name}
          image={project.image}
          description={project.description}
          url={project.url}
          github={project.github}
        />
      ))}
    </Container>
  );
};

export default Portfolio;
