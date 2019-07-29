import React from 'react';
import './Project.css';
import { Icon } from '@iconify/react';

const Project = ({ index, name, image, description, url, github, tech }) => {
  return (
    <div className='row' key={index}>
      <div
        className='col-12 col-lg-6 projectCol'
        style={{ borderRight: '2px solid white' }}
      >
        <div className='projectSectionOne'>
          <h1 className='projectName montserrat-9'>{name}</h1>
          <div className='mb3'>
            {description.map((item) => (
              <p className='montserrat-5 projectDescription'>{item}</p>
            ))}
          </div>
          <div className='mb3'>
            {tech.map((tech, index) => (
              <Icon
                key={index}
                icon={tech.icon}
                style={{
                  color: tech.color,
                  height: '4em',
                  width: '4em',
                  marginRight: '15px'
                }}
              />
            ))}
          </div>
          <a href={github} target='_blank' rel='noopener noreferrer'>
            <button className='btn montserrat-7 projectButton'>Github</button>
          </a>
        </div>
      </div>
      <div
        className='col-12 col-lg-6 projectCol backgroundImage'
        style={{ backgroundImage: image }}
      >
        <div className='imageOverlay'>
          <a href={url} target='_blank' rel='noopener noreferrer'>
            <button className='btn montserrat-7 projectButton'>
              View Project
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
