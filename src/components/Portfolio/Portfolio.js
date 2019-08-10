import React, { Fragment } from 'react';
import { Container } from 'reactstrap';
import NavBar from '../Navigation/NavBar';
import Project from './Project';
import { projects } from '../../store/projectsData';

const Portfolio = () => {
  return (
    <Fragment>
      <NavBar />
      <Container fluid style={{ padding: '0' }}>
        {projects.map((project, index) => (
          <Project
            key={index}
            index={index}
            name={project.name}
            image={project.image}
            description={project.description}
            url={project.url}
            github={project.github}
            tech={project.tech}
          />
        ))}
      </Container>
    </Fragment>
  );
};

export default Portfolio;
